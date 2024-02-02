//door 
var width=20;
console.log(width);
let hieght=30;
console.log(hieght, typeof hieght);
const door = "door is open";
console.log(open, typeof open);
let Locked = "no";
console.log(Locked, typeof Locked);
var Automatic = "yes";
console.log(Automatic, typeof Automatic);
const SecuritySystem = "no";
console.log(SecuritySystem, typeof SecuritySystem);
let FireResistant = "yes";
console.log(FireResistant, typeof FireResistant);
var Soundproof = "yes";
console.log(Soundproof, typeof Soundproof);
const WeatherResistant = "no";
console.log(WeatherResistant, typeof WeatherResistant);

//locker
var width=100;
console.log(width,typeof(width));
let Size=10 ;
console.log(Size,typeof(Size));
const Material="Wood" ;
console.log(Material,typeof(Material));
var Ventilation= "prevent odors";
console.log(Ventilation,typeof(Ventilation));
let Security = "secure hinges";
console.log(Security,typeof(Security));
const Accessibility = "pull-out trays";
console.log(Accessibility, typeof(Accessibility));
var tracking= "Monitoring";
console.log(tracking, typeof(tracking));
let Customization= "mirrors";
console.log(Customization, typeof(Customization));
const Resistance="watere Resistance" ;
console.log( Resistance, typeof(Resistance));
var Durability="potential tampering";
console.log(Durability ,typeof(Durability));

//Mouse

var isLeftButtonPressed = "false";
console.log(isLeftButtonPressed);
var isRightButtonPressed = "false";
console.log(isRightButtonPressed);
// Properties with let
let isMiddleButtonPressed = "false";
console.log(isMiddleButtonPressed);
let scrollPosition = 0; 
console.log(scrollPosition);
// Properties with const
const defaultDPI = 800;
console.log(defaultDPI);
const backForwardButtonsSupported = "true";
console.log (backForwardButtonsSupported);

//Plug
let PluggedIn = "false";
console.log(PluggedIn);
let voltage = 0;
console.log(voltage);
let currentUsage = 0;
console.log(currentUsage);
// Properties with var
var plugType = "Type A";
console.log(plugType);
var Grounded = "true";
console.log(Grounded);
// Properties with const
const maxVoltage = 120;
console.log(maxVoltage);
const supportedDevices = ["Laptop", "Phone", "Tablet"];
console.log(supportedDevices);
const standard = "US Standard";
console.log(standard);

//table
// Properties with let
let Assembled = "false";
console.log(Assembled);
let numberOfLegs = 4;
console.log(numberOfLegs);
let Foldable = "false";
console.log(Foldable);
// Properties with var
var material = "Wood";
console.log(material);
var color = "Brown";
console.log(color);
// Properties with const
const shape = "Rectangle";
console.log(shape);
const Drawers = "false";
console.log(Drawers);
const maxLoadCapacity = 100; // in kilograms
console.log(maxLoadCapacity);

// Slf-Invoking Function

(function(){
    var ref=500;
    console.log(ref);
}())

(function(){
    var car=1000;
    console.log(car);
}())

(function(){
    var plane="airIndia";
    console.log(plane);
}())
(function(){
    var bag=Gucci;
    console.log(Gucci);
}())

(function(){
    var watch=15000;
    console.log(watch);
}())

(function(){
    var Bottle="Woben";
    console.log(Bottle);
}())

(function(){
    var Glass="Steel";
    console.log(Glass);
}())

(function(){
    var Dongle=2000;
    console.log(Dongle);
}())

(function(){
    var Phone=150000;
    console.log(Phone);
}())

(function(){
    var Mobile="I-phone";
    console.log(ref);
}())


//for NAMED FUNCTION
let greetMessage = "Hello";
function greet(name) {
    let message = {greetMessage};
    console.log(message);
}
greet("Alice");

var multiply = function(x, y) {
    return x * y;
};
console.log(multiply(3, 4));

function globalExample() {
    var localVar = "I am a local variable";
    console.log(localVar);
}
globalExample();

function printDynamicValue() {
    let dynamicValue = "Dynamic";
    console.log("The value is dynamic Value");
}
printDynamicValue();

function incrementCounter() {
    var counter = 0;
    console.log(counter);
}
incrementCounter();

const person = {
    name: "John",
    age: 25
};
console.log(person.name);



//ARROW FUNCTION

let add = (x, y) => {
    return x + y;
};
console.log(add(3, 4));

var vegitable = () => {
    console.log(cabege)
};
vegitable();

const calculateSum = (a, b) => {
    let sum = a + b;
    console.log(`The sum is: ${sum}`);
};
calculateSum(8, 12);

const globalExample1 = () => {
    var localVar = "I am a local variable";
    console.log(localVar);
};
globalExample1();

const greetPerson = (name) => {
    let greeting = `Hello, ${name}!`;
    console.log(greeting);
};


