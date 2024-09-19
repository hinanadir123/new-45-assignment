"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let onenum of numbers) {
    let ordinalend;
    if (onenum === 1) {
        ordinalend = "st";
    }
    else if (onenum === 2) {
        ordinalend = "nd";
    }
    else if (onenum === 3) {
        ordinalend = "rd";
    }
    else {
        ordinalend = "th";
    }
    console.log(`${onenum} ${ordinalend}`);
}
