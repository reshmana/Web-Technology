//globle variable
var city;
var state;

function location1(city,state){
 this.city=city;
 this.state=state;
}
location1("Bengalore","karnataka");
console.log("running location Function")
 console.log("city is",city);
 console.log("State :",state);

 var Arrey=[1,2,3,4,5,6,7];
 console.log(Arrey);
 for(let i=0; i<Arrey.length;i++){
    console.log(Arrey[i]);
 }
 Arrey[1]=10;//arrye push
 console.log(Arrey);
 var neewArrey=Arrey.push(20);//push th value to arrey list 
 console.log(neewArrey);
//  var neewArrey=Arrey.push(50);
//  console.log(neewArrey);
var element=Arrey.pop(60);//remove the last arrey and retur it.
console.log(element);
console.log(Arrey);
Arrey.unshift(50);
console.log(Arrey);
console.log(Arrey.shift(50));
console.log(Arrey);

var Arrey1=[50,60,60,20,30,40,65];
console.log(Arrey1);
var neewArrey=Arrey1.slice(0,6);//cut the last arrey . write onty given index 
console.log(neewArrey);
var deletedelement=newArrey.pop();
console.log(deletedelement);
console.log(neewArrey);
console.log(neewArrey.shift());
console.log(neewArrey);


var numbers=[10,20,2,3,6,80,70];
console.log(numbers.splice(2,4,1,5,9,8));
console.log(numbers);

function arithmetic(a,b){
    var sum=a+b;
    return sum;
} var sumOfnumbers=arithmetic(1,2);
console.log(sumOfnumbers);

// exicute all arrey operation 2 examples
// exicute all arithmitic operation
