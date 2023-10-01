"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarUser_1 = __importDefault(require("./CarUser"));
const Ford_1 = __importDefault(require("./Ford"));
const Mazda_1 = __importDefault(require("./Mazda"));
const ryan = new CarUser_1.default('Ryan', new Ford_1.default());
ryan.car.start();
ryan.car.stop();
const miras = new CarUser_1.default('Miras', new Mazda_1.default());
miras.car.stop();
miras.car.start();
miras.have();
ryan.have();
