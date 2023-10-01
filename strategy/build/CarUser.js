"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarUser {
    constructor(name, car) {
        this.name = name;
        this.car = car;
    }
    have() {
        console.log(this.name, 'have', this.car.carName());
    }
}
exports.default = CarUser;
