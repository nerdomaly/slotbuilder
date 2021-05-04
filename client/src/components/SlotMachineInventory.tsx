import React from 'react';
import { ISymbol } from '../shared/ISymbol';
import './SlotMachineInventory.scss';

export const SlotMachineInventory: React.FunctionComponent<{
    symbols: Array<ISymbol>;
}> = (props) => {
    return (
        <div className="currentSymbols">
            <div className="currentSymbolsTitle">Current Symbols:</div>
            <div className="currentSymbolsArray">
                {props.symbols.map((symbol) => {
                    return (
                        <img
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
