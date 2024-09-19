function show_magician( magician : string[] ) {
    magician.forEach(name => console.log(name)
    
            );
    }
    function make_great( magician: string[]) {
    return magician.map( name => `the great ${name}`)
    let magician_nmaes = ["alia", "hussain", "gujjar"]

    let copy_magicians_name =magician_nmaes.slice()

    let copy_great_magicien = make_great(copy_magicians_name)

    console.log("\noriginal array\n" );
    
    show_magician(magician_nmaes)
    console.log("\ncopies array\n");
        show_magician(copy_great_magicien)
    }