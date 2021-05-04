import { Rarity } from "./Rarity";

export interface IReelSymbol {
    rarity: Rarity;
    cost: number;
    value: number;
    display: string;
    image?: string;
}

export class ReelSymbol implements IReelSymbol {
    public rarity: Rarity = Rarity.COMMON;
    public cost: number = 0;
    public value: number = 0;
    public display: string = '';
    public image?: string;

    public modifiers: Array<(value: number) => {}> = [];

    constructor (symbol: IReelSymbol) {
        Object.assign(this, symbol);
    }
}