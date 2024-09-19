"use strict";
// assignment 37
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, printmessage) {
    if (size === void 0) { size = "Large"; }
    if (printmessage === void 0) { printmessage = " i love typescript"; }
    console.log(" creating a ".concat(size, " shirt with the ").concat(printmessage, " prints on shirt"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love  typescript");
