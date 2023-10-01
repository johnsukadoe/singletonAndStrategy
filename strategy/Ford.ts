export default class Ford implements Car{
    start():void{
        console.log("Riding with Ford");
    }
    stop():void{
        console.log('Stopped with Ford');
    }
    carName(): string {
        return 'Ford';
    }
}