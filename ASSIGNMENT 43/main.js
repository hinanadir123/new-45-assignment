function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
    var magician_nmaes = ["alia", "hussain", "gujjar"];
    var copy_magicians_name = magician_nmaes.slice();
    var copy_great_magicien = make_great(copy_magicians_name);
    console.log("\noriginal array\n");
    show_magician(magician_nmaes);
    console.log("\ncopies array\n");
    show_magician(copy_great_magicien);
}
