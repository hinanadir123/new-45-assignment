// assignment no 32

let current_user =["hina", "Nida", "Sana", "nadir", "shani"]
let new_user =["osama", "mail", "furqan","jalil", "hina"]
new_user.forEach(new1user => {
    let our_condition= current_user.some(new1users => new1users.toLocaleLowerCase() === new1user.toLocaleLowerCase())
    if(our_condition){
        console.log(` sorry ${new1user} is already taken`);
        
    }else {
        console.log( `this username ${new1user} is available`);
    }
});