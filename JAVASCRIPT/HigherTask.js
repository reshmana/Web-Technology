
let Array=[100,200,300,400,500,6000];
let updatedArray=Array.map(function(elements){
    return elements*20;
})
console.log(updatedArray);

let arrowFuncton=()=>{
    alert("this is Arrow Function");
}
//arrowFuncton();
console.log(Array);
let filteredElements =Array.filter(function(element){
    var output = element>100
    return output;
})
console.log(filteredElements);

let arrowFuncton1=Array.filter((element)=>{
    return element>50;
})
console.log(arrowFuncton1);
  
console.log(Array);
var reduced=Array.reduce(function(current,accumulator){
    var sum=current+accumulator;
    return sum;
})
console.log(reduced);

let arrow=Array.reduce((current,accumulator)=>{
    var sum=current+accumulator;
    return sum;
})
console.log(arrow);


let Array1=[2,4,6,8,9,10];
let updatedArray1=Array1.map(function(elements){
    return elements*20;
})
console.log(updatedArray1);

let arrowFuncton3=()=>{
    alert("this is Arrow Function");
}
//arrowFuncton();
console.log(Array1);
let filteredElements1=Array.filter(function(element){
    var output = element>100
    return output;
})
console.log(filteredElements1);

let arrowFuncton2=Array1.filter((element)=>{
    return element>50;
})
console.log(arrowFuncton2);
  
var reduced1=Array1.reduce(function(current,accumulator){
    var sum=current+accumulator;
    return sum;
})
console.log(reduced1);

let arrow1=Array1.reduce((current,accumulator)=>{
    var sum=current+accumulator;
    return sum;
})
console.log(arrow);


let Array2=[8,5,6,9,10,12,35,50];
let updated=Array2.map(function(element){
    return element*2;
}) 
console.log(updated);

let Arrow=()=>{
    alert("Arrow");
}
console.log(Array2);
let filteredElements2=Array2.filter(function(element){
    var output = element>20
    return output;
})
console.log(filteredElements2);

let arrows=Array2.filter((element)=>{
    return element>50;
})
console.log(arrows);

console.log(Array2);
var reduced2=Array2.reduce(function(current,accumulator){
    var sum=current+accumulator;
    return sum;
})
console.log(reduced2);

let arrowss=Array2.reduce((current,accumulator)=>{
    var sum=current+accumulator;
    return sum;
})
console.log(arrowss);

let ref=[45,50,60,85,100,500,600];
let updated1=ref.map(function(element){
    return element*10
})
console.log(ref);

let arrowFuncton4=()=>{
    alert("this are arrowfunction");
}

console.log(ref);
let filteredElements4=ref.filter(function(element){
    var output = element>20
    return output;
})
console.log(filteredElements4);

console.log(ref);
let arrowFuncton5=ref.filter((element)=>{
    return element>60;
})
console.log(arrowFuncton5);





