import React from 'react';
import { IReelSymbol } from '../shared/ReelSymbol';
import './SlotMachineInventory.scss';

export const SlotMachineInventory: React.FunctionComponent<{
    symbols: Array<IReelSymbol>;
}> = (props) => {
    return (
        <div className="currentSymbols">
            <div className="currentSymbolsTitle">Current Symbols:</div>
            <div className="currentSymbolsArray">
                {props.symbols.map((symbol, index) => {
                    return (
                        <img
                            key={index}
                            src={`img/${symbol.image}`}
                            alt={symbol.display}
                            title={symbol.display}
                        ></img>
                    );
                })}
            </div>
        </div>
    );
};
