import { IReelSymbol, ReelSymbol } from './ReelSymbol';
import { Reel } from './Reel';
import { APP_CONFIG } from '../app.config';
import { SymbolPool } from './SymbolPool';


export const BASE_SYMBOLS: Array<IReelSymbol> = [
    SymbolPool.BASE_SYMBOL_SEVEN,
    SymbolPool.BASE_SYMBOL_SEVEN,
    SymbolPool.BASE_SYMBOL_ACE,
    SymbolPool.BASE_SYMBOL_ACE,
    SymbolPool.BASE_SYMBOL_DOLLAR,
    ...(Array(15).fill(SymbolPool.BASE_SYMBOL_BLANK))
];

export class SlotMachine {
    public Reels: Array<Reel> = [
        new Reel(),
        new Reel(),
        new Reel(),
        new Reel(),
        new Reel(),
    ];

    public readonly Symbols: Array<IReelSymbol> = [];
    public currentDisplay: IReelSymbol[][] = [
        [
            SymbolPool.BASE_SYMBOL_SEVEN,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
        ],
        [
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_ACE,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
        ],
        [
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_DOLLAR,
            SymbolPool.BASE_SYMBOL_BLANK,
        ],
        [
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_ACE,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
        ],
        [
            SymbolPool.BASE_SYMBOL_SEVEN,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
            SymbolPool.BASE_SYMBOL_BLANK,
        ]
    ];

    constructor (symbols: Array<IReelSymbol> = []) {
        this.Symbols = symbols.length ? symbols : [...BASE_SYMBOLS];
    }

    public getRandom (floor: number, ceiling: number): number {
        return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
    }

    public resetReels () {
        this.Reels = [];
        for (var i = 0; i < APP_CONFIG.NUMBER_OF_REELS; i++) {
            this.Reels.push(new Reel());
        }
    }

    public fillReels () {
        let shuffledSymbols = this.shuffleInPlace(this.Symbols);

        for (let i = 0; i < shuffledSymbols.length; i++) {
            let reel = i % APP_CONFIG.NUMBER_OF_REELS;

            this.Reels[reel].Symbols.push(new ReelSymbol(shuffledSymbols[i]));
        }


    }

    public spin (): IReelSymbol[][] {
        this.resetReels();
        this.fillReels();

        this.currentDisplay = this.Reels.map((reel) => reel.spinReel());

        return this.currentDisplay;
    }

    public getScore (): number {

        let runningTotal = 0;

        for (let column = 0; column < APP_CONFIG.NUMBER_OF_REELS; column++) {
            for (let row = 0; row < APP_CONFIG.NUMBER_OF_ROWS; row++) {
                runningTotal += this.currentDisplay[column][row].value;
            }
        }

        return runningTotal;
    }

    public shuffleInPlace<T> (originalArray: T[]): T[] {

        let array: Array<T> = [];

        Object.assign(array, originalArray);

        // if it's 1 or 0 items, just return
        if (array.length <= 1) return array;

        // For each index in array
        for (let i = 0; i < array.length; i++) {

            // choose a random not-yet-placed item to place there
            // must be an item AFTER the current item, because the stuff
            // before has all already been placed
            const randomChoiceIndex = this.getRandom(i, array.length - 1);

            // place our random choice in the spot by swapping
            [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
        }

        return array;
    }
}
