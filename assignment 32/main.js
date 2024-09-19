// assignment no 32
var current_user = ["hina", "Nida", "Sana", "nadir", "shani"];
var new_user = ["osama", "mail", "furqan", "jalil", "hina"];
new_user.forEach(function (new1user) {
    var our_condition = current_user.some(function (new1users) { return new1users.toLocaleLowerCase() === new1user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log(" sorry ".concat(new1user, " is already taken"));
    }
    else {
        console.log("this username ".concat(new1user, " is available"));
    }
});
