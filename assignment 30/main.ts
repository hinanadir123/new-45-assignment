// assignment no 30

let usernames= ["aliya", "ayesha", "asim", "admin", "hina"]

usernames.forEach(oneuser => {
    if (oneuser === "admin") {
        console.log(` hello ${oneuser}, would you like to see a status report?`);
        
    }else {
        console.log(`hello ${oneuser}, thank you for logging in again`);
        
    }
});
    

