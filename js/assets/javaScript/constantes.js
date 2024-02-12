// Para exportar un archivo se debe colocar la palabra export 

export const PI = Math.PI;

// Podemos exportar lo que necesitemos pero siempre se debe colocar la palabra export a lo que necesites
export let usuario = "Ale";

 let password = "qwerty";
 //Para no tener errores primero se hace la declaración de variables o constante y despues se hace la exportación por defecto.
//  export default password;

const hello = () => console.log("Hola");


// Para exportar automaticamente es de esta forma
export  default function saludar () {
    console.log("Hola Módulos + ES6")
}
// No se puede exportar default dos veces solo una por archivo


// Si es una función o una clase  se puede hacer la exportación por defecto de manera directa
export  class Saludar {
    constructor () {
        console.log("Hola Clases +ES&");
    }
}

