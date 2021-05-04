import { ISymbol } from "./ISymbol";
import { Rarity } from "./Rarity";

export abstract class SymbolPool {
    public static readonly BASE_SYMBOL_SEVEN: ISymbol = { rarity: Rarity.COMMON, cost: 5, display: '7', value: 1, image: 'seven.png' };
    public static readonly BASE_SYMBOL_ACE: ISymbol = { rarity: Rarity.COMMON, cost: 5, display: 'A', value: 1, image: 'ace.png' };
    public static readonly BASE_SYMBOL_DOLLAR: ISymbol = { rarity: Rarity.COMMON, cost: 5, display: '$', value: 1, image: 'dollar.png' };
    public static readonly BASE_SYMBOL_BLANK: ISymbol = { rarity: Rarity.COMMON, cost: 5, display: '', value: 0, image: undefined };
}