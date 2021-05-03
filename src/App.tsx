import React from 'react';
import { SlotMachine } from './api/SlotMachine';

import './App.scss';
import { SlotMachineDisplay } from './components/SlotMachineDisplay';

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
            totalScore: 1500,
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
        this.forceUpdate();
    };

    render() {
        if (!this.state) {
            return <></>;
        }

        let slotMachine = this.state.slotMachine;

        return (
            <div className="App">
                <div className="content">
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
                </div>
            </div>
        );
    }
}

export default App;
