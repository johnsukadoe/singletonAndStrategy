import CarUser from './CarUser';
import Ford from './Ford';
import Mazda from './Mazda'

const ryan = new CarUser('Ryan', new Ford());
ryan.car.start();
ryan.car.stop();

const miras = new CarUser('Miras', new Mazda());
miras.car.stop();
miras.car.start();
miras.have();
ryan.have();