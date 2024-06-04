class Car{
    private myFavoriteCar:string = "Mustang";

    get myCar():string{
        return this.myFavoriteCar;
    }
    set myLoveCar(value:string){
        this.myFavoriteCar = value;
    }
}
// getter
const myCarData = new Car();
// console.log(myCarData.myCar);

// setter

myCarData.myLoveCar = "Ferrari";
console.log(myCarData.myCar);