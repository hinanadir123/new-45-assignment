function makesandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwitch with the following items:\n");
    items.forEach(function (singleitem) {
        return console.log(singleitem);
    });
    console.log("now enjoy sandwitch");
}
makesandwitch("bread", "butter");
makesandwitch("chicken", "mayonise", "oil");
makesandwitch("eggs", "cheese", "onion", "chiili sauce", "mustard paste");
