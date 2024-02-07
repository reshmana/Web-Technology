
let ref=[20,50,80,60,100];
// ref.map((elements)=>{return elements*10;})
let updatedArray=ref.map(function(elements){
    return elements*20;
})
console.log(updatedArray);

let arrowFuncton=()=>{
    alert("this is Arrow Function");
}
//arrowFuncton();
console.log(ref);
let filteredElements =ref.filter(function(element){
    var output = element>20
    return output;
})
console.log(filteredElements);

let arrowFuncton1=ref.filter((element)=>{
    return element>50;
})
console.log(arrowFuncton1);
  
//ACCUMULATOR Always 0
// current values in reduced
console.log(ref);
var reduced=ref.reduce(function(current,accumulator){
    var sum=current+accumulator;
    return sum;
})
console.log(reduced);

let arrow=ref.reduce((current,accumulator)=>{
    var sum=current+accumulator;
    return sum;
})
console.log(arrow);



//CONSTRUCTOR;
//new Function(return a+b)
console.log(ref);
var slice=ref.slice(2)
console.log(slice);
console.log(ref.slice(1,3));

var splice=ref.splice();
console.log(splice);

//create 5 arrey each array have to apply higher order function
//create one form html fname lname gender, dob, adress, phno, password,submit, clear 


