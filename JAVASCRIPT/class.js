//DTO
//syntax for keyword

//object String db jsonstring object to object String 
//objectString JSON.parse()  convert object String to object

let ref={name:"Resh", password:"123456"};
console.log(ref);//object
var string=JSON.stringify(ref);
console.log(string)//objectstring

// var parse=JSON.parse(string);
// console.log(parse);

var localstorage=localStorage.setItem("Store",string);
//consloe.log(localstorage)(inspect network(application(localstorage(file))))
var getData=localStorage.getItem("Store");
console.log(getData);
var parse=JSON.parse(getData)
console.log(parse.name);

// var fname=document.getElementById("first name")
// console.log(fname);

function functionClick(){

    var work=Registration.working.value;
    console.log(work);

    var fname=document.getElementById("firstname");
console.log(fname.value);
var lname=document.getElementById("lname")
console.log(lname.value)
   // alert("this is working form")

   if(fname.value.length > 3 && fname.value.length < 20){
    console.log("name is valid");
   }else{
    console.log("name is invalid");
   }
}

function fnameValidation(){
 var firstname=document.getElementById("firstname").value;
 if(firstname.length > 3 && firstname.length < 20 ){
    console.log("Name is valid");
 }
 else{
    console.log("Name is invalid");
 }
}