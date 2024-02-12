// Ejercicio 1
const contarCaracteres = (caracteres) => {
  caracteres = "Hola Ale tú puedes";
  return console.log(caracteres.length)
   
}
contarCaracteres();


//Ejercicio 2

const cortarPalabras = (palabra) => {
   palabra = "Yo solo sé que no sé nada";

   return console.log(palabra.slice(11));
}

cortarPalabras();

// Ejercicio 3 

const word = (palabra, separada) => {
   palabra = "Hola Personas";
   separada = palabra.split('')

   return console.log(separada);

}

word();

// Ejercicio 4

const repetirNombre = (nombre) => {

nombre = "Ale";
for( let i = 0; i <= nombre.length; i++);
return console.log(nombre)

}

repetirNombre();