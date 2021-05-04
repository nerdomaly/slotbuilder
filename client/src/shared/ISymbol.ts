import { Rarity } from "./Rarity";

export interface ISymbol {
    rarity: Rarity;
    cost: number;
    value: number;
    display: string;
    image?: string;
}
