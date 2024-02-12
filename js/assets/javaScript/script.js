/*
Isomorfismo:
Hoy JavaScript, es el únuco lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

1. Frotend (JS)
2. Backend (Node.js)
3. Persistencia de Datos (MongoDb, Couch Db, Firebase, etc)
*/

/*
Con JS puedes:
- Diseño y Desarrolo Web
- Hacer videojuegos
- Experiencias 3D, realidad aumentada, realidad virtual.
- Controlar hardware (Drones, robots, electrodomésticos)
- Aplicaciones híbridas y móviles.
- Machine learning.
- etc.
*/

/*
Características:
- Lenguaje de alto nivel
- Interpretado
- Dinámico
- Multi paradigma
- Sensible a MAYUSCULAS y minúsculas
- No necesita los puntos y comas al final de cada línea
*/

/*  
Escritura de código

- Los identificadores deben comenzar con:
   Una letra o
   Un signo de dolar $ o
   Un guión bajo_
   Nunca con números o caracteres especiales

   Usa snake_case en:
    - Archivos
   Usa UPPER_CASE en:
   - Constantes
   Usa upperCamelCase en:
   - Clases
   Usa lowerCamelCase en:
   - Objetos
   - Primitivos
   - Funciones
   - Instancias
*/ 

/*
Variables en JS
*/

console.log("**** Variables ****");

var hola = "Hola mundo";
var a = 3;
let hello = "Hello world";

console.log(hola);
console.log(hello);
console.log(window);
console.log(window.hola);
console.log(window.hello);

// Con var sucede el hosting que es la elevación de las variables y se va al scoot global lo cual genera errores

// Con let podemos tener variables con ambito de bloque lo cual es lo ideal.

//Esto es un comentario de una sola línea

// var
console.log("**** var ****");
var musica = "Rock";
console.log("Variable de música antes del Bloque", musica);

// Ambito bloque
{
   var musica = "Pop";
   console.log("Variable de música dentro del Bloque", musica);
}

console.log("Variable de música después del  Bloque", musica);

// let
console.log("**** let ****");
let music = "Rock";
console.log("Variable de música antes del Bloque", music);

// Ambito bloque
{
   let music = "Pop";
   console.log("Variable de música dentro del Bloque", music);
}

console.log("Variable de música después del  Bloque", music);


// Constantes 

console.log("**** Constantes ****");

let b;

const PI = 3.1416;
// const NUEVE, No se pueden declarar constantes vacías.
console.log(PI);
// PI = 3.15, No se pueden cambiar los valores de una costante.

b = "Digger";
console.log(b);

//objetos

const objeto = {
   nombre: "Ale",
   edad: 35
}

// Arreglos

const colores = ["Blanco", "Negro", "Azul"];

console.log(objeto);
console.log(colores);

objeto.correo = "alejozxxz18@gmail.com"; // Para agregar en objetos se utiliza un .conelvalorquequierasagregar
colores.push = "Naranja"; // Para agregar en arreglos se utiliza .push

console.log(objeto);
console.log(colores);

// Cadenas de texto (Strings)
 
/*
Objeto: Colección de información.
Propiedades: atributos de un objeto que nos dara información de un objeto, son como sus caracteristicas.
Metodos: Son acciones que el objeto hace todos los metodos terminan con ().
 */ 

console.log("**** Strings ****")

let name = "Ale";
let lastName = 'Velásquez';
let hand = new String("Hola Ale"); // Declaración con su construtor.
let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo nulla id. Dicta adipisci tenetur esse repellat quas, neque fugit perferendis tempora, libero hic vitae, nesciunt repudiandae fuga dolores nihil."

console.log(name, lastName, hand);
console.log(name.length, // Propiedad length
   lastName.length,
    hand.length,
    name.toUpperCase(), // Metodos
    lastName.toLocaleLowerCase(),
    lorem.includes("amet"),
    lorem.includes("ale"),
    lorem.trim(),
    lorem.split(" "),
    lorem.split(","),
    );

    /* Template Strings */

    console.log ("**** Template Strings ****");

    let n = "ale";
    let v = "Velásquez";

   //Concatenación
    let s = "Hola mi nombre es " + n + " " + v + ".";
    console.log(s);

   //Interpolación de variables
   //Template Strings
   let saludo2 = `Hola mi nombre es ${n} ${v}`;
   console.log(saludo2);

   let ul =
   `<ul>
   <li>Primavera</li>
   <li>Verano</li>
   <li>Otoño</li>
   <li>Invierno</li>
 </ul>`
console.log(ul);

/* Números (Numbers) */

console.log("**** Numbers ****");

let numberA = 2;
let numberB = new Number (1);
let numberC = 7.19;
let numberD = "5.6";

console.log(numberA,numberB, numberC);
console.log(numberC.toFixed(1)); /* Redondea el número y nos dice cuantos decimales nos mostrara */
console.log(numberC.toFixed(5));
console.log(parseInt(numberC)); /* Nos devuelve la parte entera del número */
console.log(parseFloat(numberC));/* Nos devuelve la parte flotante del decimal */
console.log(typeof numberC, typeof numberD); /* Nos indica la naturaleza de nuestro dato */
console.log(numberA+numberB);
console.log(numberA + numberD);
console.log(numberC + parseInt(numberD));/* 
Aquí hace un casting convierte un string a un número y hace la operación correctamente*/
console.log(numberC + parseFloat(numberD));

/*
Boleans
*/

console.log("**** Booleans ****");

let verdadero = true;
let falso = false;
//Con su construtor
let booleanv = Boolean(true);
let booleanf = Boolean(false);
// Valores que tienden a ser booleans
console.log(Boolean(0));
console.log(Boolean(-7));
console.log(Boolean(""));
console.log(Boolean(" "));

console.log(verdadero,falso);
console.log(typeof verdadero, typeof falso);

// undefined, null & NaN
console.log("**** undefined, null & NaN ****");

//undefined es una variable que no a sido inicializada, y que el valor está ausente.
let indefinida;
console.log(indefinida)

//null es una variable que esta vacía intecionalmente dada por el programador. Es un valor especial que indica la ausencia de un valor.
let nulo = null;
console.log(nulo);

//NaN - Not a Nunmber
let noEsunNumero = "hola" * 3.27;
console.log(noEsunNumero);
