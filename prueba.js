function sayHelloWorld(name) {
    return "Hello world!!! I'm " + name;
}
var myName = "Oscar Úsuga";
var resultado = sayHelloWorld(myName);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Variables y tiposs
var otherName = "Oscar Andrés Úsuga";
var edad = 20;
var coder = true;
var languages = ["PHP", "JavaScript", "CSS"];
var anything = 12;
anything = "Jajaja";
etiqueta.innerHTML = otherName + " - " + edad;
alert("Hola Mundo Alert");
