class Car{
   public body_style:string;
   private name:string;
    protected year:number;
    color:string;

    constructor(body_style:string,name:string,year:number,color:string){
        this.body_style = body_style;
        this.name =name;
        this.year = year;
        this.color = color;
    }
    getCar():string{
        return `${this.body_style} ${this.name} ${this.year} ${this.color}`
    }
}
class Pickup extends Car{
    constructor(body_style:string,name:string,year:number,color:string){
       super(body_style,name,year,color);
    }
}
let myPickup =new Pickup("Pickup","Ranger",1981,"blue");

console.log(myPickup.getCar());

// const myFavoriteCar = new Car("Sportcar","Mustang",1964,"red");
// console.log(myFavoriteCar.body_style);
// console.log(myFavoriteCar.color);

// Access Modifyers
// public : you can access both inside and outside of the class
// let car1 = new Car("Pickup","Ranger",1981,"blue");
// console.log(car1.body_style);
// private: you can only access inside of the class
// let car1 = new Car("Pickup","Ranger",1981,"blue");
// console.log(car1.getCar());

// protected: you can access inside and as well as subcass that cass


