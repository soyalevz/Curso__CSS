// Mandar a llamar a un archivo
import saludar, {Saludar, PI, usuario,} from "./constantes.js"; //Siempre en las busqueda se debe colocar ./ así esten en la misma carpeta
import {aritmetica as calculos} from "./aritmetica.js"
// Se puede crear alias para nuestras importaciones


// Módulos
console.log("**** Módulos ****");

/* 
 1) Primero se importa los módulos
 2) Declaración de variables
 3) Declaración de funciones
 4) Ejecuccuón de código 
*/

console.log(PI, usuario);
// console.log(aritmetica.sumar(3,4));
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
 saludar();
 let saludo = new Saludar();
 saludo;

 
