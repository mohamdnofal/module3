
var message = "taleen";
console.log(message);



var a = function () {
    var message = "alma";
    console.log(message);
    
}
a();


function b (){
    console.log(message);
}
b();



// var x = function () {
//     console.log("Hello World");
//     return;
//   };
//   x = "hello, I am a new value!";

// -----------

x = "4";
y = 4;
if (x == y){
    console.log("my");
}
else {
    console.log("moo")
}

x = "4";
y = 4;
if (x === y){
    console.log("my");
}
else {
    console.log("moo")
}

// --------------

var sum = 0;
for (var i = 0; i < 10; i++){
    console.log(i);
    sum = sum + i;
}
console.log(sum);

// ------

function order (side){
    console.log("mohammad " + side);
}

order("nofal ");

// --------

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}

// --------

var facebook = {
    name: "facebook",
    ceo: {
        firstname: "mohammad",
        lastname: "nofal"
    },
    "mohammad":10
};
console.log(facebook.ceo.firstname,facebook.ceo.lastname);
// console.log(facebook.ceo.firstname);
// console.log(facebook, "mohammad");

// ---------


function ahm (b){
    var myFunc = function (x){
        return b * x;
    }

    return myFunc;

};

var moh = ahm(3);
console.log(moh(10));

var alma = ahm (2);
console.log(alma(100));
// --------
function doOperation (x, y){
    return y(x);

}
var result = doOperation(5, moh);
console.log(result);

result = doOperation(200, alma);

console.log(result);


// -----------------

// function makeMultiplier(multiplier) {
//     var myFunFunc = function (x) {
//       return multiplier * x;
//     };
    
//     return myFunFunc;
//   }
  
//   var operation = makeMultiplier(5);
//   console.log(operation(10));

var a = 7;
var b = a;

console.log("a= "+a);
console.log("b= "+b);

b = 20;


console.log("after b update");
console.log ("a= "+a);
console.log ("b= "+b);

// --------

var a = {x: 7};
var b = a;

console.log(a);
console.log(b);

b.x =5;

console.log("after b update");
console.log(a);
console.log(b);


// ---------

function test () {
    console.log(this);
    this.myName = "mohammad";
}

test();
console.log(this.myName);

// ----------

function Circle (radius){
    this.radius = radius;
}

var myCircle = new Circle(10);
console.log(myCircle);

// ------------

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
}
  
  var max = new Dog("Max", "Buddy");
  max.bark();

//   ---------------

var array = new Array();
array [0] = "mohammad";
array [1] = 29;
array [2] = function (nofal) {

    console.log("hello "+ nofal);

};
array[3] = {modle: "html, css nad js"};

console.log(array);

// array[2]();
// array[2]("mohammad");
array[2](array[0]);

console.log(array[3].modle);

//Short way to create array

let newArray = ["mohammad", "lama", "taleen", "alma"];
console.log(newArray[3]);

for (let i= 0; i< newArray.length; i++){
    console.log("hello "+newArray[i]);
}

// new think that important when use for loop with array --------------------------------------------------

let newArray2 = ["mohammad", "lama", "taleen", "alma"];

let myOpj = {
    names: " mohammad",
    course: " css/html/css",
    date: " fridy"
}

for (let loop in myOpj){
    console.log(loop + ":" + myOpj[loop]);
}
//Array in java scrip just for opjects --------------------------------------------------


// for (let newArr in newArray2){
//     console.log("hello " + newArray2[newArr]);
// }


var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);


// closures --------------------------------------------------

function makeMult (mult){
    return (
        function (x) {
            return mult * x;
        }
    );
}

let newMult = makeMult(2);
console.log(newMult(10));


// ---------------- fake scpase name  week 4


// ---------------- Immediately Invoked Function Expressions (IIFEs)
  (function(window) {

     var obj = {};

    obj.dreamOn = function () {
    console.log("I want to see the global scope! Let me out!");
    };

    window.doer = obj;

})(window);

 doer.dreamOn();
    