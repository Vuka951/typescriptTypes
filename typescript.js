// Boolean
var isCool = true;
// Number
var age = 25;
// String
var eyeColor = 'black';
var sentence = "Im Jimmy and im " + age;
// Array
var animals = ['wolf', 'cat', 'dog'];
var animals2 = ['lion', 'elephant', 'bitch'];
// Object
var wizard = {
    a: 'Jimmy'
};
// null and undefined
var shit = undefined;
var no = null;
// Tuple
var basket;
basket = ['basketball', 5];
// basket = [5, 'basketball']; // will throw an error
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Larget"] = 3] = "Larget";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
// Any - doesnt really ever need to be used
var something = 'aafascwad';
something = 5;
// Void
var sing = function () {
    console.log('logging something');
    // return 'ds'; will throw an error
};
// Never - doesnt return or have an endpoint
var error = function () {
    throw Error('Shit');
};
var fightRobotArmy = function (robots) {
    console.log('Fight');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('Fight');
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('Fight');
    return 'Fight';
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Raaw');
lion.greet();
// Union
var confused = true;
