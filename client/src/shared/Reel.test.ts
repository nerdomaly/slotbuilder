import React from 'react';
import { Reel } from './Reel';

test('reels should be empty upon creation', async () => {
    var reel = new Reel();

    expect(reel.Symbols.length).toEqual(0);
});
