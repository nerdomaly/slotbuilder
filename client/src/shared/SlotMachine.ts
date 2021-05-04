import { IReelSymbol, ReelSymbol } from './ReelSymbol';
import { Reel } from './Reel';
import { APP_CONFIG } from '../app.config';
import { SymbolPool } from './SymbolPool';


export const BASE_SYMBOLS: Array<IReelSymbol> = [
    SymbolPool.BASE_SYMBOL_SEVEN,
    SymbolPool.BASE_SYMBOL_SEVEN,
    SymbolPool.BASE_SYMBOL_ACE,
    SymbolPool.BASE_SYMBOL_ACE,
    SymbolPool.BASE_SYMBOL_DOLLAR
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

    private getRandomInt (max: number) {
        return Math.floor(Math.random() * max);
    }

    public resetReels () {
        this.Reels = [];
        for (var i = 0; i < APP_CONFIG.NUMBER_OF_REELS; i++) {
            this.Reels.push(new Reel());
        }
    }

    public fillReels () {
        for (let i = 0; i < this.Symbols.length; i++) {
            let reel = this.getRandomInt(APP_CONFIG.NUMBER_OF_REELS);

            this.Reels[reel].Symbols.push(new ReelSymbol(this.Symbols[i]));
        }

        for (let i = 0; i < this.Reels.length; i++) {
            this.Reels[i].fillReel();
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
}
