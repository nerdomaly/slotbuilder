import { ReelSymbol } from './ReelSymbol';
import { APP_CONFIG } from '../app.config';
import { SymbolPool } from './SymbolPool';


export class Reel {
    public readonly Symbols: Array<ReelSymbol> = [];

    private getRandomInt (max: number) {
        return Math.floor(Math.random() * max);
    }

    public fillReel () {
        const numberToAdd = APP_CONFIG.NUMBER_OF_ROWS - this.Symbols.length;

        for (let i = 0; i < numberToAdd; i++) {
            this.Symbols.push(new ReelSymbol(SymbolPool.BASE_SYMBOL_BLANK));
        }
    }

    public spinReel (): Array<ReelSymbol> {
        let retVal: Array<ReelSymbol> = [];

        let startIndex = this.getRandomInt(this.Symbols.length);

        let count = 0;
        let index = startIndex;
        while (count < APP_CONFIG.NUMBER_OF_ROWS) {
            retVal.push(this.Symbols[index]);
            index++;
            count++;

            if (index >= this.Symbols.length) {
                index = 0;
            }
        }

        return retVal;
    }
}
