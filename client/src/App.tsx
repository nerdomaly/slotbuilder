import React from 'react';
import { SlotMachine } from './shared/SlotMachine';
import { SymbolPool } from './shared/SymbolPool';

import './App.scss';
import { SlotMachineDisplay } from './components/SlotMachineDisplay';
import { SlotMachineInventory } from './components/SlotMachineInventory';
import { IReelSymbol } from './shared/ReelSymbol';

class App extends React.Component<
    any,
    { slotMachine: SlotMachine; currentWin: number; totalScore: number }
> {
    constructor(props: any) {
        super(props);

        let slotMachine = new SlotMachine();
        this.state = {
            slotMachine: slotMachine,
            currentWin: 0,
            totalScore: 1000,
        };
    }

    public clickSpin = () => {
        let slotMachine = this.state.slotMachine;

        slotMachine.spin();
        let currentWin = slotMachine.getScore();

        this.setState({
            slotMachine: slotMachine,
            currentWin: currentWin,
            totalScore: this.state.totalScore + currentWin,
        });
        //this.forceUpdate();
    };

    public addSymbol = (symbol: IReelSymbol) => {
        let slotMachine = this.state.slotMachine;

        slotMachine.Symbols.push(symbol);

        this.setState({
            slotMachine: slotMachine,
        });

        //this.forceUpdate();
    };

    render() {
        if (!this.state) {
            return <></>;
        }

        let slotMachine = this.state.slotMachine;

        return (
            <div className="App">
                <div className="content">
                    <h2>Reel Builder Slots</h2>
                    <SlotMachineDisplay
                        display={slotMachine.currentDisplay}
                    ></SlotMachineDisplay>
                    <div className="scoreLine">
                        <div className="currentScore">
                            Current Win: {this.state.currentWin}
                        </div>
                        <div className="totalScore">
                            Total Money: {this.state.totalScore}
                        </div>
                        <div className="scoreButtons">
                            <button onClick={this.clickSpin}>Spin!</button>
                        </div>
                    </div>

                    <SlotMachineInventory
                        symbols={slotMachine.Symbols}
                    ></SlotMachineInventory>

                    <div className="symbolStore">
                        <div className="symbolStoreTitle">Store:</div>
                        <div className="symbolStoreItems">
                            <div>
                                <img
                                    src="img/seven.png"
                                    onClick={() =>
                                        this.addSymbol(
                                            SymbolPool.BASE_SYMBOL_SEVEN
                                        )
                                    }
                                ></img>
                            </div>
                            <div>
                                <img
                                    src="img/ace.png"
                                    onClick={() =>
                                        this.addSymbol(
                                            SymbolPool.BASE_SYMBOL_ACE
                                        )
                                    }
                                ></img>
                            </div>
                            <div>
                                <img
                                    src="img/dollar.png"
                                    onClick={() =>
                                        this.addSymbol(
                                            SymbolPool.BASE_SYMBOL_DOLLAR
                                        )
                                    }
                                ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
