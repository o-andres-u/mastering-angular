function sayHelloWorld(name) {
  return "Hello world!!! I'm " + name;
}

var myName = "Oscar Úsuga";
var resultado = sayHelloWorld(myName);

var etiqueta = <HTMLElement>document.getElementById("container")
etiqueta.innerHTML = resultado;

// Variables & typos
var otherName:string = "Oscar Andrés Úsuga";
var edad:number = 20;
var coder:boolean = true;
var languages:Array<string> = ["PHP", "JavaScript", "CSS"];

var anything:any = 12;
anything = "Jajaja";

etiqueta.innerHTML = otherName + " - " + edad;

var a = 7;
var b = 12;

if (a === 7) {
  let a = 4;
  var b = 1;

  console.log("Inside if: " + a + " - " + b); // Inside if: 4 - 1
}

console.log("Outside if: " + a + " - " + b); // Outside if: 7 - 1
