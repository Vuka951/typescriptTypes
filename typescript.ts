// Boolean
let isCool: boolean = true;

// Number
let age: number = 25;

// String
let eyeColor: string = 'black';
let sentence: string = `Im Jimmy and im ${age}`;

// Array
let animals: string[] = ['wolf', 'cat', 'dog'];
let animals2: Array<string> = ['lion', 'elephant', 'bitch'];

// Object
let wizard: object = {
    a: 'Jimmy'
}

// null and undefined
let shit: undefined = undefined;
let no: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];
// basket = [5, 'basketball']; // will throw an error

// Enum
enum Size { Small = 1, Medium= 2, Larget = 3 }
let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;

// Any - doesnt really ever need to be used
let something: any = 'aafascwad';
something = 5;

// Void
let sing = (): void => {
    console.log('logging something');
    // return 'ds'; will throw an error
}

// Never - doesnt return or have an endpoint
let error = (): never => {
    throw Error('Shit');
}

// Interface
interface RobotArmy { // type RobotArmy = { is similar
    count: number,
    type: string,
    magic?: string // optional property like in C#
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('Fight');
}
fightRobotArmy({count: 1, type: 'dragon'});
let fightRobotArmy2 = (robots: { count: number, type: string, magic: string}) => {
    console.log('Fight');
}

// Type Assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy;
dog.count;

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
    console.log('Fight');
}

let fightRobotArmy4 = (robots: { count: number, type: string, magic: string}): string => {
    console.log('Fight');
    return 'Fight';
}

// Classes
class Animal {
    public sing: string = 'lalala';
    constructor(sound: string) {
        this.sing = sound;
    }

    greet(): string {
        return `Hello ${this.sing}`;
    }
}

let lion = new Animal('Raaw');
lion.greet();

// Union
let confused: string | number | boolean = true;