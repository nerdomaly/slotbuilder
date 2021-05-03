import React from 'react';
import { ISlotMachineDisplayProps } from './ISlotMachineDisplay.props';
import './SlotMachineDisplay.scss';

import { APP_CONFIG } from '../app.config';
import { displayPartsToString } from 'typescript';

export const SlotMachineDisplay: React.FunctionComponent<ISlotMachineDisplayProps> = (
    props
) => {
    const displayRows = [];

    for (let row = 0; row < APP_CONFIG.NUMBER_OF_ROWS; row++) {
        const displayCells = [];

        for (let reel = 0; reel < APP_CONFIG.NUMBER_OF_REELS; reel++) {
            displayCells.push(
                <div key={`cell_${reel}_${row}`} className="divTableCell">
                    {props.display[reel][row].display ?? ''}
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
