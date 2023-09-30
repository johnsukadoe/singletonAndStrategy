class Mazda{
    private static instance: Mazda;

    private constructor(){

    }

    public static getInstance():Mazda{
        if(!Mazda.instance){
            Mazda.instance = new Mazda();
        }
        return Mazda.instance;
    }

    start(){
        console.log("I'm riding");
    }
    stop(){
        console.log("Stopped");
    }
}

const miata = Mazda.getInstance();

const mx5 = Mazda.getInstance();

console.log(miata != mx5);

miata.start()
