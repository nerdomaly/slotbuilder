import React from 'react';
import { ISymbol } from '../shared/ISymbol';
import './SlotMachineSymbol.scss';

export const SlotMachineSymbol: React.FunctionComponent<{ symbol: ISymbol }> = (
    props
) => {
    let image;
    if (props.symbol.image) {
        image = (
            <img
                src={`img/${props.symbol.image}`}
                title={props.symbol.display}
                alt={props.symbol.display}
            ></img>
        );
    }

    return <>{image}</>;
};
