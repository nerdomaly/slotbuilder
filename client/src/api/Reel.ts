import { ISymbol } from './ISymbol';
import { APP_CONFIG } from '../app.config';


export class Reel {
    public readonly Symbols: Array<ISymbol> = [];

    private getRandomInt (max: number) {
        return Math.floor(Math.random() * max);
    }

    public fillReel () {
        const numberToAdd = APP_CONFIG.NUMBER_OF_ROWS - this.Symbols.length;

        for (let i = 0; i < numberToAdd; i++) {
            this.Symbols.push({ display: '', value: 0 });
        }
    }

    public spinReel (): Array<ISymbol> {
        let retVal: Array<ISymbol> = [];

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
