import { IReelSymbol } from "./ReelSymbol";
import { Rarity } from "./Rarity";

export abstract class SymbolPool {
    public static readonly BASE_SYMBOL_SEVEN: IReelSymbol = { rarity: Rarity.COMMON, cost: 5, display: '7', value: 1, image: 'seven.png' };
    public static readonly BASE_SYMBOL_ACE: IReelSymbol = { rarity: Rarity.COMMON, cost: 5, display: 'A', value: 1, image: 'ace.png' };
    public static readonly BASE_SYMBOL_DOLLAR: IReelSymbol = { rarity: Rarity.COMMON, cost: 5, display: '$', value: 1, image: 'dollar.png' };
    public static readonly BASE_SYMBOL_BLANK: IReelSymbol = { rarity: Rarity.COMMON, cost: 5, display: '', value: 0, image: undefined };
}