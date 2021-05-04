import React from 'react';
import './SlotMachineDisplay.scss';

import { APP_CONFIG } from '../app.config';
import { SlotMachineSymbol } from './SlotMachineSymbol';
import { ISymbol } from '../shared/ISymbol';

export const SlotMachineDisplay: React.FunctionComponent<{
    display: Array<Array<ISymbol>>;
}> = (props) => {
    const displayRows = [];

    for (let row = 0; row < APP_CONFIG.NUMBER_OF_ROWS; row++) {
        const displayCells = [];

        for (let reel = 0; reel < APP_CONFIG.NUMBER_OF_REELS; reel++) {
            displayCells.push(
                <div key={`cell_${reel}_${row}`} className="divTableCell">
                    <SlotMachineSymbol
                        symbol={props.display[reel][row]}
                    ></SlotMachineSymbol>
                </div>
            );
        }

        displayRows.push(
            <div key={`row_${row}`} className="divTableRow">
                {displayCells}
            </div>
        );
    }

    return (
        <div className="divTable">
            <div className="divTableBody">{displayRows}</div>
        </div>
    );
};
