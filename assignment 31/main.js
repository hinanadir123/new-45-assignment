"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usernames = ["aliya", "ayesha", "asim", "admin", "hina"];
usernames = [];
if (usernames.length === 0) {
    console.log("we need to find some user!");
}
else {
    usernames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log(" hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for logging in again"));
        }
    });
}
