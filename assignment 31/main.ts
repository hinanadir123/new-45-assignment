import { log } from "node:console"
import { loadavg } from "node:os";

let usernames= ["aliya", "ayesha", "asim", "admin", "hina"]

usernames =[]
if(usernames.length === 0){
   console.log("we need to find some user!");
   
}else{
    usernames.forEach(oneuser => {
        if (oneuser === "admin") {
            console.log(` hello ${oneuser}, would you like to see a status report?`);
            
        }else {
            console.log(`hello ${oneuser}, thank you for logging in again`);
            
        }
    });

}