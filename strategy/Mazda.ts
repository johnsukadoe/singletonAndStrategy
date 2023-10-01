export default class Mazda implements Car{
    start():void{
        console.log("Riding with Mazda");
    }
    stop():void{
        console.log('Stopped with Mazda');
    }
    carName(): string {
        return('Mazda');
    }
}