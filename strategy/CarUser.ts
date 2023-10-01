export default class CarUser{
    name:string;
    car:Car;

    constructor(name:string, car:Car){
        this.name= name;
        this.car = car;
    }

    have(){
        console.log(this.name, 'have', this.car.carName());
    }
}