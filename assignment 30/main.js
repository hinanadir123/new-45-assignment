// assignment no 30
var usernames = ["aliya", "ayesha", "asim", "admin", "hina"];
usernames.forEach(function (oneuser) {
    if (oneuser === "admin") {
        console.log(" hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for logging in again"));
    }
});
