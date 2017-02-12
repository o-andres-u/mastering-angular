function sayHelloWorld(name) {
    return "Hello world!!! I'm " + name;
}
var myName = "Oscar Úsuga";
var resultado = sayHelloWorld(myName);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// Variables & typos
var otherName = "Oscar Andrés Úsuga";
var edad = 20;
var coder = true;
var languages = ["PHP", "JavaScript", "CSS"];
var anything = 12;
anything = "Jajaja";
etiqueta.innerHTML = otherName + " - " + edad;
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("Inside if: " + a_1 + " - " + b); // Inside if: 4 - 1
}
console.log("Outside if: " + a + " - " + b); // Outside if: 7 - 1
// Functions & typos
function returnNumber(num) {
    return "Number: " + num;
}
alert(returnNumber(25));
