//PUSH
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
var newArrey=fruits.push("grapes");
console.log(newArrey)
let size = fruits.length;

var vegetables = ["onion","tomato","potato","radish","chilli"];
console.log(vegetables);
var newArrey=vegetables.push("spinatch");
console.log(newArrey)

//POP
var Array=[20,50,60,90,100,120];
console.log(Array);
var element=Array.pop();//remove the last arrey and retur it.
console.log(element);

var Array=[20,0,2,9,80,500];
console.log(Array);
var element=Array.pop();
console.log(element);

//UNSHIFT
const car=["maruti","volvo","thar","shwift","hounda"];
console.log(car);
car.unshift("bentch");
console.log(car);

const device=["mobile","remote","tv","laptop","charger"];
console.log(device);
car.unshift("cable");
console.log(device);

//SHIFT
let arrey1=[1000,3000,5600,9000,7500,8630,250000];
console.log(arrey1);
arrey1.shift();
console.log(arrey1);

let arrey2=[2586,1000,3000,5600,9000,7500,8630,250000,8520,8561,100000,25861];
console.log(arrey2);
arrey1.shift();
console.log(arrey2);

//SLICE
let  age = [12,4, 5, 2, 5];
console.log(age);
let newArrey1=age.slice(2,4);
console.log(newArrey1);

var numbers = [2, -9, 0, 5, 12, -25, 22, 9, 8, 12];
console.log(numbers);
var newArrey2=numbers.slice(3,7)
console.log(newArrey2);

//SPLISH
var numbers1 = [2, -9, 0, 5, 12, -25, 22, 9, 8, 12];
console.log(numbers1);
var newArrey3=numbers1.splice(3,7,8,61,87,100)
console.log(newArrey3);
var deletedelement=numbers1.pop();
console.log(deletedelement);

//ARITHMETICS

function arithmetic(a,b){
    var sum=a+b;
    return sum;
} var sumOfnumbers=arithmetic(1,2);
console.log(sumOfnumbers);

function values(a,b){
    var sum=a-b;
    return sum;
}
var sumOfnumbers=values(250,100);
console.log(sumOfnumbers);

function values1(a,b){
    var sum=a*b;
    return sum;
}
var sumOfnumbers=values1(250,520);
console.log(sumOfnumbers);

function values2(a,b){
    var sum=a/b;
    return sum;
}
var sumOfnumbers=values2(1000,520);
console.log(sumOfnumbers);

function values3(a,b){
    var sum=a%b;
    return sum;
}
var sumOfnumbers=values3(1000,530);
console.log(sumOfnumbers);
