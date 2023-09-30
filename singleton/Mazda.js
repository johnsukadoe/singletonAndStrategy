var Mazda = /** @class */ (function () {
    function Mazda() {
    }
    Mazda.getInstance = function () {
        if (!Mazda.instance) {
            Mazda.instance = new Mazda();
        }
        return Mazda.instance;
    };
    Mazda.prototype.start = function () {
        console.log("I'm riding");
    };
    Mazda.prototype.stop = function () {
        console.log("Stopped");
    };
    return Mazda;
}());
var miata = Mazda.getInstance();
var mx5 = Mazda.getInstance();
console.log(miata != mx5);
miata.start();
