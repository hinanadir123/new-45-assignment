// asignment 45 
 function create_car(manufacturer : string, model:string , ... options: any){
    let car = {
        manufacturer : manufacturer,
        model : model
    }

  options.forEach(main => {
  let [key,value] = main.split(":")
      car [key.trim()] = value.trim()
    })
    return car;
 }
 let my_car = create_car("toyota", "corolla", "color:black", "sunroof: true")
 console.log(my_car);
 