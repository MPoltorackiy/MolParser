const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const webSocket = require('ws');
const wss = new webSocket.Server({ server });

const path = require('path');
const fs = require('fs');
const Bonds = require('./Bonds.js');
const StructureAplan = require('./StructureAplan.js');
const routes = require('./routes/index');
var cons = require('consolidate');

//read_JSON('./temp1.mol');

wss.on('connection', (ws) => {
 console.log("Connection to Server");
	ws.on('message', (message) => {
	 console.log(message);
	 var mol = JSON.parse(message);
	 var dataMol=mol.data;
	 saveToServerTrace(dataMol,'molFiles','dataMol','.mol', ws);
	});
	ws.on('close', function() {
    	 console.log("Close");
  	});
}); 



app.use('/public', express.static('public'));

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', routes);



function read_JSON(path){
var obj;
 fs.readFile(path, 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
  });
}

function saveToServerTrace(trace,path,name,type, ws){
  var fs = require('fs');
  fs.writeFile(path+"/"+name+type,trace, function (err) {
    if (err) 
       return console.log(err);
         
   console.log("The file was saved!");
   parseMolStructure('./molFiles/dataMol.mol',ws);
  });
}

function parseMolStructure(path,ws){ 
 var itearator=0;
 var start = 4;
 var symb = new Array();
 var memoryLine=0;
 
 const allFileContents = fs.readFileSync(path, 'utf-8');
 //const allFileContents = fs.readFileSync('./MolView.mol', 'utf-8');
  
 allFileContents.split(/\r?\n/).forEach(line => {
 
  //console.log(`Line from file: ${line}`);
  line.split(/(\s+)/).forEach(row=>{
   if (/[a-zа-яё]/i.test(row) && itearator>=start && row!='END' && row!="M")
    symb.push(row);
  });
  
  itearator+=1;
 });
 
 memoryLine=symb.length+start;
 
 var struct=createInitialEnvironment(symb);
 parseBond(memoryLine,allFileContents, struct,ws);
}

function createInitialEnvironment(symb){ 
 
 var str=''; 
 var iter=1;
 symb.forEach(el=>{
  str+=`molecule(1).atoms(${iter}).name==${el} &&\n`;
  
  iter+=1;
 });
 
 console.log('molecule(1).atomsNum=='+symb.length);
 console.log(str);
 
 var structure = new StructureAplan();
 structure.atomsNum='molecule(1).atomsNum=='+symb.length;
 structure.elments=str;
 
 return structure;
}

function parseBond(lineStartBond, dataMol, structure,ws){
 
 var iterator=0;
 var from, to;
 var bonds=new Array();
 var bondsObjects= new Array();
 var newLineBond=7;
 dataMol.split(/\r?\n/).forEach(line => {
   if(iterator>=lineStartBond)
    line.split(/(\s+)/).forEach(row => {
      if (/[0-9]/i.test(row))
       bonds.push(row);
    });
    
    iterator+=1;
  });
  
  var bondsStr='';
  var newRow ='&&\n';
  
  for(let i=0;i<bonds.length;i+=newLineBond){
   from = bonds[i];
   to = bonds[i+1];
   var newBonds = new Bonds(Number(from), Number(to));
   bondsObjects.push(newBonds);
   bondsStr+=`molecule(1).bondV(${from},${to})==1&&\n`;
   if(i+newLineBond<bonds.length)
    console.log("Add"); 
   else{ 
    structure.bonds=bondsStr;
    generateAllBonds(bondsObjects, structure, ws);
   
   }
  }
  
   console.log(bondsStr);
}

function generateAllBonds(bonds,structure,ws){
 var allBonds = [];
 for(let i=1;i<=bonds.length;i++)
  for(let j=1;j<=bonds.length;j++){
   if(i!=j){
     var newBond = new Bonds(i,j)
     allBonds.push(newBond);
    }
   }  
   generateNoneBond(allBonds,bonds, structure,ws);  
   
   console.log(bonds);
}

function generateNoneBond(allBonds, bonds, structure,ws){
 /*
 allBonds.forEach(allEl=>{
   bonds.forEach(el=>{
    if(allEl.valueFrom == el.valueFrom && allEl.valueTo == el.valueTo){
      const index = allBonds.indexOf(allEl);
      const x = allBonds.splice(index, 1);
    }
   });
  });
  */
  
  for(let i=0;i<allBonds.length;i++){
   for(let j=0;j<bonds.length;j++){
    if(allBonds[i].valueFrom == bonds[j].valueFrom && allBonds[i].valueTo == bonds[j].valueTo){
     console.log("Delete"+ JSON.stringify(allBonds[i]));
     const index = allBonds.indexOf(allBonds[i]);
      if (index > -1) 
       allBonds.splice(index, 1);
      }
   }
  } 
  var bondsStr='';
  var newRow='&&\n';
  for(let i=0;i<allBonds.length;i+=1){  
   bondsStr+=`molecule(1).bondV(${allBonds[i].valueFrom},${allBonds[i].valueTo})== -1`; 
   if(i<allBonds.length)
    bondsStr+=newRow;  
  }
  structure.nonBonds=bondsStr;
  console.log(structure);
  ws.send(JSON.stringify(structure));
}

function diff(a, b) {
    return a.filter(function(i) {return b.indexOf(i) < 0;});
};

wss.getUniqueID = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
};
server.listen(process.env.PORT ||5005, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
