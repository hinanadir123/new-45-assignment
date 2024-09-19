// assignment 37

import { log } from "node:console";

function make_shirt(size:string = "Large", printmessage:string = " i love typescript"){
    console.log(` creating a ${size} shirt with the ${printmessage} prints on shirt`);
    
}
 make_shirt()
make_shirt("medium")
 make_shirt("small", "i love  typescript")