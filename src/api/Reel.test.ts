import React from 'react';
import { Reel } from './Reel';

test('reels should be empty upon creation', async () => {
    var reel = new Reel();

    expect(reel.Symbols.length).toEqual(0);
});

test('reels should fill with three empty symbols called', async () => {
    var reel = new Reel();

    reel.fillReel();

    expect(reel.Symbols.length).toEqual(3);
});

test('reels should fill with empty symbols when called', async () => {
    var reel = new Reel();

    reel.fillReel();

    expect(reel.Symbols.every((e) => e.value === 0)).toEqual(true);
});
