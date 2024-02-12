// Expresiones Regulares
console.log("**** Expresiones Regulares ****");

// Es una secuencia de carácteres que forman un patron de busqueda, es principalmente usado en la busqueda de cadena de caracteres.

// Con función constructora 
let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium laborum neque iste maiores! Culpa, facere praesentium commodi repellendus, voluptatibus accusantium similique quos dolorem porro fuga dicta. Vitae, aliquid repellat."

let expReg = new RegExp("lorem", "ig");

// Segunda forma de declarar un expresión regular

let expReg2 = /lorem{2,}/ig;

console.log(expReg.test(cadena)); //Prueba que la expresión regular existe dentro de la cadena
console.log(expReg.exec(cadena)); // Devuelve un arreglo

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

// Funciones Anónimas Autoejecuttables

console.log("**** Funciones Anónimas Autoejecuttables ****");

(function () {
 console.log("Mi primer IFE");
})();

(function (d,w,c) {
    console.log("Mi segunda IFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log");
})(document,window,console);

//Formas de escribir funciones anónimas autoejecutables
(function (){
    console.log("Forma Clásica");
})();

// La Crockford (javaScript the Good Parts)
{(function (){
    console.log("Versión Crockford");
})()};

//Unaria
+function () {
    console.log("Versión Unaria");
}();

//Facebook
!function () {
    console.log("Versión Facebook");
}();


