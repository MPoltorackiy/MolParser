const zbcc = new zbCryptoConstructor({
    dataBlocksFormSelector: '.form-block[data-id="data-blocks"]',
    preConditionFormSelector: '.form-block[data-id="pre-condition"]',
    buildedSchemeFormSelector: '.form-block[data-id="builded-scheme"]',
})

zbcc.dataBlocksForm.addEventListener('submit', (e, formBlock) => {
    e.preventDefault()
    e.stopImmediatePropagation()

    // zbcc.dataBlocksForm.tokenCirculation.addPrecondition(, )
    // console.log(formBlock.getValues())
})

zbcc.dataBlocksForm.addDataBlocks({ initialData: new zbccDataBlock_InitialData({
        inputsSelectors: {
            totalTokensAmount: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="initial-data"] [data-id="total-tokens-amount"]',
            initialTokenPrice: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="initial-data"] [data-id="initial-token-price"]',
            exchangeType: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="initial-data"] [data-id="exchange-type"]',
            tradingFunction: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="initial-data"] [data-id="trading-function"]',
            duration: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="initial-data"] [data-id="duration"]',
        },
        inputsParams: {
            totalTokensAmount: {
                type: 'number',
                dataType: 'integer',
            },
            initialTokenPrice: {
                type: 'number',
                dataType: 'float',
            },
            exchangeType: {
                type: 'select',
                allowedValues: ['decentralized', 'centralized']
            },
            tradingFunction: {
                type: 'select',
                allowedValues: ['increasing', 'decreasing', 'volatility']
            },
            duration: {
                type: 'number',
                dataType: 'integer',
            },
        }
    })
})

zbcc.dataBlocksForm.addDataBlocks({ investmentRounds: new zbccDataBlock_InvestmentRounds({
        table: new NumerableTable({
            name: 'table',
            elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table',
            controls: {
                numerableInputSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] [data-id="rounds-number"]',
            },
            rowPreset: {
                numOnInit: 1,
                numOfMin: 1,
                htmlTemplate: htmlTemplates.trInvestmentRound,
                trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id]',
                inputsSelectors: {
                    roundTitle: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id="{tr-id}"] [data-id="round-title"]',
                    fiat: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id="{tr-id}"] [data-id="fiat"]',
                    tokenPrice: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id="{tr-id}"] [data-id="token-price"]',
                    tokensAmount: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id="{tr-id}"] [data-id="tokens-amount"]',
                    investorShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="investment-rounds"] .inputs-table.numerable[data-id="rounds"] table tr[data-id="{tr-id}"] [data-id="investor-share"]',
                },
                inputsParams: {
                    roundTitle: {
                        type: 'text',
                    },
                    fiat: {
                        type: 'number',
                        dataType: 'float',
                    },
                    tokenPrice: {
                        type: 'number',
                        dataType: 'float',
                    },
                    tokensAmount: {
                        type: 'number',
                        dataType: 'float',
                    },
                    investorShare: {
                        type: 'number',
                        dataType: 'float',
                    },
                },
            }
        })
    })
})

zbcc.dataBlocksForm.addDataBlocks({ agents: new zbccDataBlock_Agents({
        table: new NumerableTable({
            name: 'table',
            elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table',
            controls: {
                numerableInputSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] [data-id="agents-number',
            },
            rowPreset: {
                numOnInit: 1,
                numOfMin: 1,
                htmlTemplate: htmlTemplates.trAgent,
                trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id]',
                inputsSelectors: {
                    agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                    agenShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id="{tr-id}"] [data-id="agent-share"]',
                    tokensAmount: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id="{tr-id}"] [data-id="tokens-amount"]',
                },
                inputsParams: {
                    agentName: {
                        type: 'text',
                    },
                    agenShare: {
                        type: 'number',
                        dataType: 'float'
                    },
                    tokensAmount: {
                        type: 'number',
                        dataType: 'float'
                    },
                },
                linksToDependableSelects: {
                    agentName: {
                        inputId: 'agent-name',
                        optionHtmlTemplate: htmlTemplates.selectOption,
                        optionSelector: 'option[value="{value}"][data-id="{id}"]',
                        selects: [
                            '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id] [data-id="agent-name"]',
                            '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id] [data-id="agent-name"]',
                            '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id] [data-id="agent-name"]',
                            '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id] [data-id="agent-name"]',
                            '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id] table tr[data-id] [data-id="agent-name"]',
                        ]
                    }
                }
            }
        })
    })
})

zbcc.dataBlocksForm.addDataBlocks({ pools: new zbccDataBlock_Pools({
        tables: {
            poolTypes: new CalcableTable({
                name: 'poolTypes',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table',

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trPoolType,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table tr[data-id]',
                    inputsSelectors: {
                        poolNumber: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table tr[data-id="{tr-id}"] [data-id="pool-number"]',
                        poolType: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table tr[data-id="{tr-id}"] [data-id="pool-type"]',
                    },
                    inputsParams: {
                        poolNumber: {
                            type: 'number',
                            dataType: 'integer'
                        },
                        poolType: {
                            type: 'text'
                        },
                    },
                    linksToDependableSelects: {
                        poolType: {
                            inputId: 'pool-type',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            optionSelector: 'option[value="{value}"][data-id="{id}"]',
                            selects: [
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id] [data-id="pool-type"]',
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table.calcable.unhideable[data-id="actions"] table tr[data-id] [data-id="currency-type"]',
                            ]
                        },
                    }
                }
            }),
            pools: new CalcableTable({
                name: 'pools',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table',

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trPool,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id]',
                    inputsSelectors: {
                        poolTitle: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id="{tr-id}"] [data-id="pool-title"]',
                        poolType: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id="{tr-id}"] [data-id="pool-type"]',
                        poolShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id="{tr-id}"] [data-id="pool-share"]',
                        amount: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id="{tr-id}"] [data-id="amount"]',
                    },
                    inputsParams: {
                        poolTitle: {
                            type: 'text',
                        },
                        poolType: {
                            type: 'select',
                        },
                        poolShare: {
                            type: 'number',
                            dataType: 'float'
                        },
                        amount: {
                            type: 'number',
                            dataType: 'integer'
                        },
                    },
                    linksToOptions: {
                        poolTypes: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table tr[data-id] [data-id="pool-type"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{pool-type-options}',
                        }
                    },
                    linksToDependableSelects: {
                        poolTitle: {
                            inputId: 'pool-title',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            optionSelector: 'option[value="{value}"][data-id="{id}"]',
                            selects: [
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id] [data-id="pool-title"]',
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id] [data-id="pool-for-rewards"]',
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id] [data-id="pool-for-rewards"]',
                                '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id] table tr[data-id] [data-id="pool-for-rewards"]',
                                '#zbcc > .form-block[data-id="pre-condition"] .input-data [data-id="pool-threshold"] select[data-id="pool-threshold-easier-pool"]',
                                '#zbcc > .form-block[data-id="pre-condition"] .input-data [data-id="pool-threshold"] select[data-id="pool-threshold-harder-pool"]',
                            ]
                        }
                    }
                }
            })
        }
    })
})

zbcc.dataBlocksForm.addDataBlocks({ vestingAndUnlocking: new zbccDataBlock_VestingAndUnlocking({
        cssActiveClass: 'unhidden',
        unhiders: {
            vesting: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] button.unhider[data-unhideableId="vesting"]',
            unlocking: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] button.unhider[data-unhideableId="unlocking"]',
        },
        tables: {
            vesting: new CalcableTable({
                name: 'vesting',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table',

                isInitable: false,

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trVesting,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id]',
                    inputsSelectors: {
                        agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                        poolTitle: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id="{tr-id}"] [data-id="pool-title"]',
                        startVesting: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id="{tr-id}"] [data-id="start-vesting"]',
                        endVesting: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id="{tr-id}"] [data-id="end-vesting"]',
                        vestingCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="vesting"] table tr[data-id="{tr-id}"] [data-id="vesting-coefficient"]',
                    },
                    inputsParams: {
                        agentName: {
                            type: 'text'
                        },
                        poolTitle: {
                            type: 'select'
                        },
                        startVesting: {
                            type: 'text'
                        },
                        endVesting: {
                            type: 'text'
                        },
                        vestingCoefficient: {
                            type: 'text'
                        },
                    },
                    linksToOptions: {
                        agentName: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id] [data-id="agent-name"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{agent-name-options}',
                        },
                        poolTitle: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id] [data-id="pool-title"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{pool-title-options}',
                        }
                    }
                }
            }),
            unlocking: new CalcableTable({
                name: 'unlocking',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table',

                isInitable: false,

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trUnlocking,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id]',
                    inputsSelectors: {
                        agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                        startUnlocking: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id="{tr-id}"] [data-id="start-unlocking"]',
                        endUnlocking: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id="{tr-id}"] [data-id="end-unlocking"]',
                        initialUnlocking: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="vesting-and-unlocking"] .inputs-table.calcable.unhideable[data-id="unlocking"] table tr[data-id="{tr-id}"] [data-id="initial-unlocking"]',
                    },
                    inputsParams: {
                        agentName: {
                            type: 'text',
                        },
                        startUnlocking: {
                            type: 'text',
                        },
                        endUnlocking: {
                            type: 'text',
                        },
                        initialUnlocking: {
                            type: 'text',
                        },
                    },
                    linksToOptions: {
                        agentName: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id] [data-id="agent-name"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{agent-name-options}',
                        }
                    }
                }
            })
        }
    })
})

zbcc.dataBlocksForm.addDataBlocks({ projectServices: new zbccDataBlock_ProjectServices({
        tablesDataBlockSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .base-inputs',

        unhideableCssClass: 'unhideable',
        unhideableActiveCssClass: 'unhidden',
        choosableCssClass: 'choosable',
        choosableActiveCssClass: 'choosen',
        curveableCssClass: 'curveable',
        curveableActiveCssClass: 'curved',

        unhiders: {
            staking: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] button.unhider[data-unhideableId="staking"]',
            farming: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] button.unhider[data-unhideableId="farming"]',
        },

        choosableTableSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"]',
        curveableTablesSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.curveable',

        choosers: {
            serviceNameInput: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .extra-inputs [data-id="service-name"]',
            servicesSelectBox: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .extra-inputs [data-id="service-names"]',
            addServiceBtn: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .extra-inputs [data-id="add"]',
            serviceNameOptionSelector: 'option[id="{id}"]',
            serviceNameOptionTemplate: htmlTemplates.selectOption,
        },

        htmlServiceTableTemplate: htmlTemplates.serviceTableTemplate,
        htmlCurvesTableTemplate: htmlTemplates.curvesTableTemplate,
        htmlCurvesTableTemplateAlternative: htmlTemplates.curvesTableTemplateAlternative,

        servicesNames: {
            staking: 'Staking',
            farming: 'Farming'
        },

        serviceTables: {
            staking: new CalcableTable({
                name: 'staking',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table',

                isInitable: false,

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                actionButtons: {
                    addCurves: 'button.action[data-action="add-curves"]'
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trService,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id]',
                    inputsSelectors: {
                        number: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="number"]',
                        agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                        agentShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="agent-share"]',
                        unstakingFactor: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="unstaking-factor"]',
                        rewardCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="reward-coefficient"]',
                        poolForRewards: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="staking"] table tr[data-id="{tr-id}"] [data-id="pool-for-rewards"]',
                    },
                    inputsParams: {
                        number: {
                            type: 'number',
                            dataType: 'integer'
                        },
                        agentName: {
                            type: 'select'
                        },
                        agentShare: {
                            type: 'text'
                        },
                        unstakingFactor: {
                            type: 'text'
                        },
                        rewardCoefficient: {
                            type: 'text'
                        },
                        poolForRewards: {
                            type: 'select'
                        },
                    },
                    linksToOptions: {
                        agentName: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id] [data-id="agent-name"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{agent-name-options}',
                        },
                        poolTitle: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id] [data-id="pool-title"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{pool-title-options}',
                        }
                    }
                }
            }),
            farming: new CalcableTable({
                name: 'farming',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table',

                isInitable: false,

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                actionButtons: {
                    addCurves: 'button.action[data-action="add-curves"]'
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trService,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id]',
                    inputsSelectors: {
                        number: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="number"]',
                        agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                        agentShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="agent-share"]',
                        unstakingFactor: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="unstaking-factor"]',
                        rewardCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="reward-coefficient"]',
                        poolForRewards: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.unhideable[data-id="farming"] table tr[data-id="{tr-id}"] [data-id="pool-for-rewards"]',
                    },
                    inputsParams: {
                        number: {
                            type: 'number',
                            dataType: 'integer'
                        },
                        agentName: {
                            type: 'select'
                        },
                        agentShare: {
                            type: 'text'
                        },
                        unstakingFactor: {
                            type: 'text'
                        },
                        rewardCoefficient: {
                            type: 'text'
                        },
                        poolForRewards: {
                            type: 'select'
                        },
                    },
                    linksToOptions: {
                        agentName: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id] [data-id="agent-name"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{agent-name-options}',
                        },
                        poolTitle: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id] [data-id="pool-title"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{pool-title-options}',
                        }
                    }
                }
            })
        },
        curveTables: {
        },
        serviceTablePreset: {
            elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table',

            controls: {
                calcAddBtnSelector: 'button.calc[data-action="add"]',
                calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
            },

            actionButtons: {
                addCurves: 'button.action[data-action="add-curves"]'
            },

            header: {
                titleElement: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] header h3.table-title',
                curvesTitleElement: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] header h3.table-title',
                titlePreset: '{service-name}',
                description: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] header div.table-description',
            },

            rowPreset: {
                numOnInit: 1,
                numOfMin: 1,
                htmlTemplate: htmlTemplates.trService,
                trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id]',
                inputsSelectors: {
                    number: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="number"]',
                    agentName: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="agent-name"]',
                    agentShare: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="agent-share"]',
                    unstakingFactor: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="unstaking-factor"]',
                    rewardCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="reward-coefficient"]',
                    poolForRewards: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.choosable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="pool-for-rewards"]',
                },
                inputsParams: {
                    number: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    agentName: {
                        type: 'select'
                    },
                    agentShare: {
                        type: 'number',
                        dataType: 'float'
                    },
                    unstakingFactor: {
                        type: 'number',
                        dataType: 'float'
                    },
                    rewardCoefficient: {
                        type: 'number',
                        dataType: 'float'
                    },
                    poolForRewards: {
                        type: 'select'
                    },
                },
                linksToOptions: {
                    agentName: {
                        mask: '{agent-name-options}',
                        optionHtmlTemplate: htmlTemplates.selectOption,
                        selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="agents"] .inputs-table.numerable[data-id="agents"] table tr[data-id] [data-id="agent-name"]'
                    },
                    poolTitle: {
                        mask: '{pool-title-options}',
                        optionHtmlTemplate: htmlTemplates.selectOption,
                        selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pools"] table tr[data-id] [data-id="pool-title"]'
                    }
                }
            }
        },
        curvesTablePreset: {
            elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table',

            controls: {
                calcAddBtnSelector: 'button.calc[data-action="add"]',
                calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
            },

            actionButtons: {
                showService: 'button.action[data-action="show-service"]'
            },

            header: {
                titleElement: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] header h3.table-title',
                titlePreset: '"{service-name}" Income',
                description: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] header div.table-description',
            },

            rowPreset: {
                numOnInit: 1,
                numOfMin: 1,
                htmlTemplate: htmlTemplates.trCurve,
                trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id]',
                inputsSelectors: {
                    curveNumber: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="curve-number"]',
                    salesStart: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="sales-start"]',
                    salesEnd: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="sales-end"]',
                    salesMin: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="sales-min"]',
                    salesMax: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="sales-max"]',
                    chooseAlgorithm: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="choose-algorithm"]',
                    angularCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="angular-coefficient"]',
                    risingsCoefficient: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="project-services"] .inputs-table.calcable.curveable[data-id="{table-id}"] table tr[data-id="{tr-id}"] [data-id="risings-coefficient"]',
                },
                inputsParams: {
                    curveNumber: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    salesStart: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    salesEnd: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    salesMin: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    salesMax: {
                        type: 'number',
                        dataType: 'integer'
                    },
                    chooseAlgorithm: {
                        type: 'select',
                    },
                    angularCoefficient: {
                        type: 'number',
                        dataType: 'float'
                    },
                    risingsCoefficient: {
                        type: 'number',
                        dataType: 'float'
                    },
                },
            }
        }
    })
})

zbcc.dataBlocksForm.addDataBlocks({ tokenCirculation: new zbccDataBlock_TokenCirculation({
        cssActiveClass: 'unhidden',
        unhiders: {
            actions: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] button.unhider[data-unhideableId="actions"]',
        },
        tables: {
            actions: new CalcableTable({
                name: 'actions',
                elementSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table',

                isInitable: false,

                controls: {
                    calcAddBtnSelector: 'button.calc[data-action="add"]',
                    calcDeleteBtnSelector: 'button.calc[data-action="delete"]',
                },

                rowPreset: {
                    numOnInit: 1,
                    numOfMin: 1,
                    htmlTemplate: htmlTemplates.trAction,
                    trSelector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id]',
                    inputsSelectors: {
                        actionNumber: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="action-number"]',
                        source: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="source"]',
                        currencyType: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="currency-type"]',
                        valuePercents: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="value-percents"]',
                        destionation: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="destination"]',
                        preCondition: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="token-circulation"] .inputs-table[data-id="actions"] table tr[data-id="{tr-id}"] [data-id="pre-condition"]',
                    },
                    inputsParams: {
                        actionNumber: {
                            type: 'text'
                        },
                        source: {
                            type: 'text'
                        },
                        currencyType: {
                            type: 'select'
                        },
                        valuePercents: {
                            type: 'text'
                        },
                        destionation: {
                            type: 'text'
                        },
                        preCondition: {
                            type: 'text'
                        },
                    },
                    unicInputs: [
                        'actionNumber'
                    ],
                    linksToOptions: {
                        poolTypes: {
                            selector: '#zbcc > .form-block[data-id="data-blocks"] .data-block[data-id="pools"] .inputs-table.calcable[data-id="pool-types"] table tr[data-id] [data-id="pool-type"]',
                            optionHtmlTemplate: htmlTemplates.selectOption,
                            mask: '{pool-type-options}',
                        }
                    },
                }
            })
        }
    })
})






zbcc.preConditionForm.addEventListener('submit', (e, formBlock) => {
    e.preventDefault()
    $(formBlock.element).hide()

    console.log(zbcc.preConditionForm.getValues(), formBlock.element.dataset.actionId)
    zbcc.dataBlocksForm.dataBlocks.tokenCirculation.addPreCondition(zbcc.preConditionForm.getValues(), formBlock.element.dataset.actionId)

    formBlock.clearData()
})


zbcc.preConditionForm.clearData = () => {
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-select"]').prop('checked', false)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-inpx"]').val('')

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpx"]').val('')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb2"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpy"]').val('')


    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-inpx"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpx"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb2"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpy"]').prop('disabled', true)

    //

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-select"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-andor"]').val('0')

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-inpx"]').val('')

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpx"]').val('')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb2"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpy"]').val('')


    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-andor"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-inpx"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpx"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb2"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpy"]').prop('disabled', true)

    //

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-select"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-andor"]').val('0')

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-inpx"]').val('')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-pool"]').val('0')

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder"]').prop('checked', false)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb1"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpx"]').val('')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb2"]').val('0')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpy"]').val('')
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-pool"]').val('0')


    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-andor"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-inpx"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-pool"]').prop('disabled', true)

    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb1"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpx"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb2"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpy"]').prop('disabled', true)
    $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-pool"]').prop('disabled', true)
}

zbcc.preConditionForm.getValues = () => {
    let result = {}

    let timeBlockCheckbox = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-select"]')

    let timeMonthlyRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly"]')

    let timeMonthlyEasierRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier"]')
    let timeMonthlyEasierEqSign = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-cb1"]')
    let timeMonthlyEasierInput = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-inpx"]')

    let timeMonthlyHarderRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder"]')
    let timeMonthlyHarderEqSign1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb1"]')
    let timeMonthlyHarderInput1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpx"]')
    let timeMonthlyHarderEqSign2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb2"]')
    let timeMonthlyHarderInput2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpy"]')

    if ( timeBlockCheckbox.prop('checked') ) {
        result.time = {}

        if ( timeMonthlyRadio.prop('checked') ) {
            result.time.monthly = true

        } else if ( timeMonthlyEasierRadio.prop('checked') ) {
            result.time.monthEasier = {
                eqSign: timeMonthlyEasierEqSign.val(),
                inputVal: timeMonthlyEasierInput.val()
            }
        } else if ( timeMonthlyHarderRadio.prop('checked') ) {
            result.time.monthHarder = {
                eqSign1: timeMonthlyHarderEqSign1.val(),
                inputVal1: timeMonthlyHarderInput1.val(),
                eqSign2: timeMonthlyHarderEqSign2.val(),
                inputVal2: timeMonthlyHarderInput2.val()
            }
        }
    }

    //

    let tokenPriceCheckbox = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-select"]')
    let tokenPriceAndor = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-andor"]')

    let tokenPriceEasierRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier"]')
    let tokenPriceEasierEqSign = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-cb1"]')
    let tokenPriceEasierInput = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-inpx"]')

    let tokenPriceHarderRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder"]')
    let tokenPriceHarderEqSign1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb1"]')
    let tokenPriceHarderInput1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpx"]')
    let tokenPriceHarderEqSign2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb2"]')
    let tokenPriceHarderInput2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpy"]')

    if ( tokenPriceCheckbox.prop('checked') ) {
        result.tokenPrice = {}
        result.tokenPrice.andor = tokenPriceAndor.val()

        if ( tokenPriceEasierRadio.prop('checked') ) {
            result.tokenPrice.tokenPriceEasier = {
                eqSign: tokenPriceEasierEqSign.val(),
                inputVal: tokenPriceEasierInput.val()
            }
        } else if ( tokenPriceHarderRadio.prop('checked') ) {
            result.tokenPrice.tokenPriceHarder = {
                eqSign1: tokenPriceHarderEqSign1.val(),
                inputVal1: tokenPriceHarderInput1.val(),
                eqSign2: tokenPriceHarderEqSign2.val(),
                inputVal2: tokenPriceHarderInput2.val()
            }
        }
    }

    //

    let poolThresholdCheckbox = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-select"]')
    let poolThresholdAndor = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-andor"]')

    let poolThresholdEasierRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier"]')
    let poolThresholdEasierEqSign = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-cb1"]')
    let poolThresholdEasierInput = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-inpx"]')
    let poolThresholdEasierPool = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-pool"]')

    let poolThresholdHarderRadio = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder"]')
    let poolThresholdHarderEqSign1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb1"]')
    let poolThresholdHarderInput1 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpx"]')
    let poolThresholdHarderEqSign2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb2"]')
    let poolThresholdHarderInput2 = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpy"]')
    let poolThresholdHarderPool = $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-pool"]')

    if ( poolThresholdCheckbox.prop('checked') ) {
        result.poolThreshold = {}
        result.poolThreshold.andor = poolThresholdAndor.val()

        if ( poolThresholdEasierRadio.prop('checked') ) {
            result.poolThreshold.poolThresholdEasier = {
                eqSign: poolThresholdEasierEqSign.val(),
                inputVal: poolThresholdEasierInput.val(),
                poolId: poolThresholdEasierPool.val()
            }
        } else if ( poolThresholdHarderRadio.prop('checked') ) {
            result.poolThreshold.poolThresholdHarder = {
                eqSign1: poolThresholdHarderEqSign1.val(),
                inputVal1: poolThresholdHarderInput1.val(),
                eqSign2: poolThresholdHarderEqSign2.val(),
                inputVal2: poolThresholdHarderInput2.val(),
                poolId: poolThresholdHarderPool.val()
            }
        }
    }

    return result
}


$('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-select"]').on('change', e => {
    if (e.currentTarget.checked) {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-inpx"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpx"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb2"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpy"]').prop('disabled', false)
    } else {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-easier-inpx"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpx"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-cb2"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="time"] [data-id="time-monthly-harder-inpy"]').prop('disabled', true)
    }
})

$('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-select"]').on('change', e => {
    if (e.currentTarget.checked) {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-andor"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-inpx"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpx"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb2"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpy"]').prop('disabled', false)
    } else {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-andor"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-easier-inpx"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpx"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-cb2"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="token-price"] [data-id="token-price-harder-inpy"]').prop('disabled', true)
    }
})

$('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-select"]').on('change', e => {
    if (e.currentTarget.checked) {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-andor"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-inpx"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-pool"]').prop('disabled', false)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb1"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpx"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb2"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpy"]').prop('disabled', false)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-pool"]').prop('disabled', false)
    } else {
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-andor"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-inpx"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-easier-pool"]').prop('disabled', true)

        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb1"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpx"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-cb2"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-inpy"]').prop('disabled', true)
        $('#zbcc > .form-block[data-id="pre-condition"] .input-data div[data-id="pool-threshold"] [data-id="pool-threshold-harder-pool"]').prop('disabled', true)
    }
})



zbcc.dataBlocksForm.dataBlocks['initialData'].inputs.totalTokensAmount.addEventListener('change', (e, input) => {
    let ids = Object.keys(zbcc.dataBlocksForm.dataBlocks['investmentRounds'].table.rows)
    console.log('tta changed:', ids)
    for (let rowId = 0; rowId < Object.keys(zbcc.dataBlocksForm.dataBlocks['investmentRounds'].table.rows).length; rowId++) {
        console.log('changing row:', rowId)
        calculateInvestmentRoundForRow(rowId, zbcc.dataBlocksForm.dataBlocks['investmentRounds'].table)
    }
    // console.log(zbcc.dataBlocksForm.dataBlocks['investmentRounds'].table.rows)
})

zbcc.dataBlocksForm.dataBlocks['investmentRounds'].table.addEventListener('change', (e, dataBlock) => {
    console.log('')
    console.log('')
    console.log('rounds table changed')
    let rowId = e.target.parentNode.parentNode.dataset.id

    calculateInvestmentRoundForRow(rowId, dataBlock)
})

function calculateInvestmentRoundForRow(rowId, dataBlock) {
    let db = dataBlock.rows[rowId]
    let tta = zbcc.dataBlocksForm.dataBlocks['initialData'].inputs.totalTokensAmount.value

    console.log('')
    console.log('')
    console.log('')
    console.log('—————————————')

    Object.keys(db).forEach(key => {
        if (key === 'id' || key === 'roundTitle')
            return

        console.log('')
        console.log('key:', key)
        console.log('value:', db[key].value)
        console.log('element:', db[key].element)
        console.log('element value:', db[key].element.value)
    })
    // console.log(db.map(e => {return e.value}))

    if (db.tokenPrice.value !== undefined && db.investorShare.value !== undefined) {
        db.tokensAmount.element.value = tta * db.investorShare.value / 100
        db.tokensAmount.syncValue()
        db.fiat.element.value = tta * db.investorShare.value / 100 * db.tokenPrice.value
        db.fiat.syncValue()
    } else if (db.tokenPrice.value !== undefined && db.tokensAmount.value !== undefined) {
        db.investorShare.element.value = db.tokensAmount.value * 100 / tta
        db.investorShare.syncValue()
        db.fiat.element.value = db.tokensAmount.value / db.tokenPrice.value
        db.fiat.syncValue()
    } else if (db.tokenPrice.value !== undefined && db.fiat.value !== undefined) {
        db.tokensAmount.element.value = db.fiat.value * db.tokenPrice.value
        db.tokensAmount.syncValue()
        db.investorShare.element.value = db.fiat.value * db.tokenPrice.value * 100 / tta
        db.investorShare.syncValue()
    } else if (db.fiat.value !== undefined && db.tokensAmount.value !== undefined) {
        db.investorShare.element.value = db.tokensAmount.value * 100 / tta
        db.investorShare.syncValue()
        db.tokenPrice.element.value = db.fiat.value / db.tokensAmount.value
        db.tokenPrice.syncValue()
    } else if (db.fiat.value !== undefined && db.investorShare.value !== undefined) {
        db.tokensAmount.element.value = tta * db.investorShare.value / 100
        db.tokensAmount.syncValue()
        db.tokenPrice.element.value = db.fiat.value / ((tta * db.investorShare.value) / 100)
        db.tokenPrice.syncValue()
    } else {
        console.log('')
        console.log('not enough data for auto calculate')
        console.log('')
    }
}