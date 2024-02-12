//Funciones
/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en javaScript son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/
console.log("**** Funciones ****");

// Función Declarada
function estoEsunaFuncion(){
console.log("uno");
console.log("dos");
console.log("tres");
}

//Invocación de función
//  estoEsunaFuncion();
//  estoEsunaFuncion();
//  estoEsunaFuncion();

function unaFuncionQueDevuelveValor() {
    console.log("uno");
    return 19; // Aquí se observa que el return ignora las líneas de abajo.
    console.log("dos");
    console.log("tres");
    return "La función ha retornado un Cadena de texto"
}

//let valorDeFuncion = unaFuncionQueDevuelveValor(); //Función contenida en una variable.

//console.log(valorDeFuncion);

function saludar(nombre = "Desconocido", edad = 0){ // con valores por defecto
 console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);   
}

saludar("Drigger", 8);
saludar(); //Te sale undefined

//Funciones declaradas VS funciones expresadas

funcionDeclarada();

function funcionDeclarada () {
    console.log("Esto es una función declarada puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
}

funcionDeclarada();

//funcionExpresada(); Nos lanzara error si declaramos antes del cuerpo de función en las funciones expresadas

//Función anónima
const funcionExpresada = function () {
console.log("Esto es una función expresada es decir, una función que se le ha asignado como valor a una variables, si invocamos esta función antes de su definición JS nos dira... 'Uncaught ReferenceError: Cannot access 'funcionExpresada' before initialization")
}

funcionExpresada();

// Arreglos (Arrays)
console.log("**** Arrays ****");

const a = [];
const b = [1, true, "Hola", ["A","B", "C", [1,2,3]]];
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.of("X","Y", "Z", 9, 8, 7);
console.log(c)

const d = Array(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1,2,3, true,false);
console.log(f);

// Metodos de arreglos

const colores = ["rojo", "verde", "azul"];
console.log(colores);

colores.push("negro"); // Agrega un nuevo elemento
console.log(colores);

colores.pop(); // Quita el ultimo elemento agregado
console.log(colores);

colores.forEach(function (el, index){
   console.log(`<li id="${index}"> ${el}</li> `)
})

//Objetos
console.log("**** Objetos ****");

// Se recomienda usar const con objetos para asi no cambiarle la referencía
const objectB = {};
console.log(objectB);

const objectC = new Object();
console.log(objectC);

// Un objeto es una colección de llaves valores

/* Dentro de un objeto a las variables se le van a llamar atribuyos/propiedades y a las funciones se les llama métodos*/
const objectAle = {
    nombre: "Ale",
    apellido: "Velásquez",
    edad: 27,
    pasatiempos: ["Ejercicio", "Leer", "Videojuegos"],
    soltero:true,
    contacto: {
        email: "alejozxxz18@gmail.com",
        instagram: "@soyalevz",
        movil: "932220224"
    },

    saludar: function () {
        console.log("Hola :)");
    },
    
    decirMiNombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir en ${this.contacto.instagram}`)
    }
}

console.log(objectAle);
console.log(objectAle["nombre"]);
console.log(objectAle["apellido"]);
console.log(objectAle.edad); // el . sirve para acceder de forma más sencilla a los atributos o métodos del objeto

console.log(objectAle.pasatiempos[1]); // array interno así se accede
console.log(objectAle.contacto.instagram); // objeto interno así se accede
objectAle.saludar();
objectAle.decirMiNombre();

// Métodos
console.log(Object.keys(objectAle)); // Lista todas las llaves de mi objeto
console.log(Object.values(objectAle)); // Me forma un arreglo y me da los valores de mi objeto
console.log(objectAle.hasOwnProperty("nombre"));
console.log(objectAle.hasOwnProperty("nacimiento"));

// Tipos de Operadores
console.log("**** Tipos de Operadores ****");
 /*
 Aritmeticos + - * / % ()
 */

 let aritmeticos = 5 + (5 - 10) * 3;
 let modulo = 5 % 2; //Nos devuelve el residuo de una división

 console.log(aritmeticos);
 console.log(modulo);

 /* Relacionales 
 >, <, >=, <=, ==, ===, !=, !==
 */
 
 console.log( 8 > 9);
 console.log(8 < 9);
 console.log(8 >= 9);
 console.log(8 <= 9);
 console.log(7 < 7);
 console.log(7 <= 7);

 /*
 = 1 igual es asignación de variables
 == 2 iguales es comparación de valores
 === 3 iguales es comparación de tipo de dato y de valor
 */

 console.log(7 == 7);
 console.log( "7" == 7);
 console.log(0 == false);

 console.log(7 === 7);
 console.log( "7" === 7);
 console.log(0 === false);

 /* Incremento Decremento */

 let i = 2;

 //i = i + 2;
 //i *= 3;

console.log(i++);
//console.log(++i);

 // Operador unario
i++;
i--;
++i;
--i;
 console.log(i);

 /*
 Lógicos
 ! - Not: Niega es decir lo que es verdadero lo vuelve falso y viceversa
 ||- Or: Cuando tengo 2 o más condiciones con que una se cumpla es decir sea verdadera, el OR será verdadero
 && - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse es decir ser verdaderas, para que AND se valide
 */

 console.log(!true);
 console.log(!false);
 console.log((9 === 9)||("9" === 9)); 
 console.log((9 === 9) && ("9" === "9")); 

 // Condicionales
 console.log("**** Condicionales ****");

 /*
 if -else
 */

let edad = 27;

if (edad > 17) {
   console.log("Eres mayor de edad")
} else {
   console.log("Eres menor de edad")
}

if (edad >= 18) {
    console.log("Eres mayor de edad")
 } else {
    console.log("Eres menor de edad")
 }

 if (edad < 18) {
    console.log("Eres menor de edad")
 } else {
    console.log("Eres mayor de edad")
 }

 if (edad <= 17) {
    console.log("Eres menor de edad")
 } else {
    console.log("Eres mayor de edad")
 }

 /* if - else if-else */
 console.log("**** if anidados ****");

//  Déjame Dormir - 0hrs -5hrs
//  Buenos dias 6hrs - 11hrs
//  Buenas tardes 12hrs - 18hrs
//  Buenas noches 19hrs - 23hrs

let hora = 18;
if(hora >= 0 && hora <= 5) {
 console.log("Déjame Dormir");
} else if (hora >= 6 && hora <=11){
    console.log("Buenos Días");
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas Tardes");
}else {
    console.log("Buenas Noches");
}

if(hora > 0 && hora < 6) {
    console.log("Déjame Dormir");
   } else if (hora > 5 && hora < 12){
       console.log("Buenos Días");
   } else if(hora > 11 && hora < 19) {
       console.log("Buenas Tardes");
   }else {
       console.log("Buenas Noches");
   }

   // Operador Ternario (condición) ? verdadero: falsa
   console.log("**** Operador Ternario ****");

   let eresMayor = (edad >= 18) 
   ? "Eres mayor de Edad"
   : "Eres menor de Edad";
   console.log(eresMayor);

// switch - case
console.log("**** switch - case");

/*
domingo - 0
lunes - 1
martes - 2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6
*/

let dia = 5;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
        case 1:
            console.log("Lunes");
            break;
            case 2:
                console.log("Martes");
                break;
                case 3: 
                console.log("Miércoles");
                break;
                case 4: 
                console.log("Jueves");
                break;
                case 5:
                    console.log("Viernes");
                    break;
                    case 6: 
                    console.log("Sábado");
                    break;
                    default:
                        console.log("El día no existe")
}


// Ciclos
console.log("**** Ciclos ****");
console.log("** While **")
let contador = 0;

// while
while (contador <= 10) {
   console.log("while " + contador);
   contador++;
}

// do while 
console.log("** do while **");
do {
    console.log( "do while " + contador);
    contador++;
} while(contador < 10);

//for
/* for (inicialización de la variable; condición; decremento o incremento) {
    sentencias que ejecuta el for
    sentencias que ejecuta el for
    sentencias que ejecuta el for
} */


console.log("** for **");
for (let i = 0; i < 10; i++ ){
    console.log("for " + i);
}

let numeros = [10,20,30,40,50,60,70,80,90,100];

for (let i = 0; i < numeros.length; i++) {
 console.log(numeros[i]);
}


// forin
console.log("** forin **");
const alevz = {
    nombre: "ale",
    lastName: "Velasquez",
    edad: 27
}

for (const propiedad  in alevz) {
 console.log(`key: ${propiedad}, value: ${alevz[propiedad]}`);
}

// forof

for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola Mundo";
for (const caracter of cadena) {
    console.log(caracter);
}

// Manejo de errores
console.log("**** Manejo de Errores ****");

try {
    console.log("En el try se agrega el código a evaluar");
    console.log("Segundo mensaje en el try")
    noExiste
}catch (error) {
console.log("Catch captura cualquier error surgido o lanzado en el try");
console.log(error)
}finally {
console.log("finally se ejecutará siempre al final de un bloque try catch")
}

try {
let numero = "y";
 if(isNaN(numero)) {
 throw new Error("El caracter introducido no es un Número");
 }

 console.log(numero * numero)
}catch (error) {
 console.log(`Se produjo el siguente error: ${error}`)
}

// break & continue 
console.log("**** break & continue ****");

const numbers = [1,2,3,4,5,6,7,8,9,0];

console.log("break")

for (let i=0; i < numbers.length; i++) {
    if (i === 5) {
        break; 
    }
    console.log(numbers[i]);
}

console.log("Continue")

for (let i=0; i < numbers.length; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(numbers[i]);
}

//Destructuración
console.log("**** Destructuración ****");

// Sin destructuración
let numbers2 = [1,2,3];

let uno = numbers2[0],
    dos = numbers2[1],
    tres = numbers2[2]

  console.log(uno,dos,tres);  

// Con destructuración
const [one, two, three] = numbers2;
console.log(one, two, three);

const people = {
    nombre: "Ale",
    apellido: "Velásquez",
    year: 27
}

let {nombre, apellido, year} = people; 
console.log(nombre, apellido, year);

// Objetos literales
console.log("**** Objetos Literales ****");

// Es una nueva forma de escribir atributos y métodos y asignarlos

let namee = "Drigger";
let age = "8";

const gato =  {
    nombre: namee,
    age: age,
    miauar: function () {
        console.log("Miau")
    }
}

console.log(gato);
gato.miauar();

const cat = {
    nombre, 
    age,
    raza: "Callejero",
    miauar() {
        console.log("miau miau ")
    }
}

console.log(cat);
cat.miauar();

// Parámetros Rest  & Operador Spread

console.log("**** párametros rest & operador spread **** ");

function plus (a, b, ...c) {
    let resultado = a + b;

    c.forEach(function (n) {
        resultado += n
    });

    return resultado;
   
}

console.log(plus(1,2));
console.log(plus(1,2,3));
console.log(plus(1,2,3,4));
console.log(plus(1,2,3,4,5,6));
console.log(plus(1,2,3,4,5,6,7));



const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8, 9, 0]

console.log(arr1, arr2);   

const arr3 = [...arr1, ...arr2];
console.log(arr3)

// Arrow Functions
console.log("**** Arrow Functions ****");
 
const hi =  () =>  console.log("Hola") // Cuando la función solo tiene una instrucción podemos quitar los corchetes
hi();

const hi2 = nombre => console.log (`Hola ${nombre}`);
hi2("Bryan");

// const plus2 = function (a,b) {
//     return a + b;
// }

const plus2 = (a,b) => a+b;

console.log(plus2(9,9));

const funcionDeVariasLineas = () => {
    console.log("uno");
    console.log("dos");
    console.log("tres");
}

funcionDeVariasLineas();

const numbers3 = [1,2,3,4,5];

numbers3.forEach( (el,index) => 
    console.log(`El elemento ${el} esta en la posición ${index}`))


// function Perro () {
//     console.log(this);
// }    

// Perro();

const perro = {
    nombre: "Dino",
    ladrar ()  {
        console.log(this);
    }
}

perro.ladrar();

// Prototipos
console.log("**** Prototipos ****");

// POO 
/*
 Clases - Modelo a seguir.
 Objetos - Es una instancia de una clase
   Atributos - es una característica o propiedad del objeto(son variables dentro de un objeto)
   Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/


// const animal = {
//     nombre: "Fox",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }


// const animal2 = {
//     nombre: "Lola Bunny",
//     sonar(){
//         console.log("Hago sonidos porque estoy vivo");
//     }
// }


// console.log(animal);
// console.log(animal2);


/* Función Constructora */

// function Animal (nombre, genero) {
//   //Atributos  
//   this.nombre = nombre;
//   this.genero = genero;
 
//  //Métodos 
//   this.sonar = function () {
//    console.log("Hago sonidos porque estoy vivo")
//   }
  
//   this.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`)
//   }
// }


/* Función constructuora dónde asignamos los métodos al prototipo, no a la función como tal */

function Animal (nombre, genero) {
    //Atributos  
    this.nombre = nombre;
    this.genero = genero;
   
}
//Métodos agregados al prototipo de la función constructora
 Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo")
 }
 
 Animal.prototype.saludar = function () {
   console.log(`Hola me llamo ${this.nombre}`)
 }



// Herencia Prototípica
console.log("**** Herencia Prototípica ****");

function Perro (nombre, genero, tamanio) {
 this.super = Animal;
 this.super(nombre, genero);
 this.tamanio = tamanio;
}

// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de métodos del prototipo padre en el hijo

Perro.prototype.sonar = function () {
    console.log("Soy un perro y mi sonido es un ladrido");
}

Perro.prototype.ladrar = function () {
    console.log("Guau Guau");
}

const fox = new Perro("Fox", "Macho", "Mediano"),
      lolaBunny = new Animal ("Lola Bunny", "Hembra");

console.log(fox);
console.log(lolaBunny);      

fox.sonar();
fox.saludar();
fox.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();

// Clases y Herencia 
console.log("**** Clases y Herencia ****");

class Animales { 
    /* Las clases no reciben parametros para hacerlo sería de la siguente forma: */

    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    // El constructor es un método especial que se ejecuta en el momento de instanciar la clase

   
    //Métodos 
     sonar() {
      console.log("Hago sonidos porque estoy vivo")
     }
     
     saludar() {
       console.log(`Hola me llamo ${this.nombre}`)
     }
}

class Dog extends Animales {
    constructor(nombre, genero, tamanio) {
       // Con el método super() se maanda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("Guauuu Guauuu!!!!");
    }

    // Un método estático se pueden ejecutar sin necesidad de instanciar la clase
    static queEres () {
        console.log("Los perros somos animales mamíferos que pertenecemos  a la familia de caninos. Somos considerados los mejores amigos del hombre.")
    }

    // Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza() {
      return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Dog.queEres();

const mimi = new Animales ("Mimi", "Hembra"),
scooby = new Dog ("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.saludar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);



// Métodos estáticos, getters y setters


// Object Console
console.log("**** object Console ****");

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let Name = "Ale",
    Apellido = "Velásquez",
    Edad = 27

console.log(Name, Apellido, Edad);
console.log(`Hola mi nombre es ${Name} ${Apellido} y tengo ${Edad} años`);    

console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);    

console.clear();

console.log(window); /* Documento Global */
console.log(document); /* Representación de html a traves de js */
console.dir(window);
console.dir(document);
console.clear();

console.group("Cursos de @jonmircha en Youtube");
console.log("Curso de javaScript");
console.log("Curso de nodeJs");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y  programación Web ");
console.groupEnd();

console.groupCollapsed("Cursos de @jonmircha en Youtube");
console.log("Curso de javaScript");
console.log("Curso de nodeJs");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y  programación Web ");
console.groupEnd();
console.clear();

console.log(console);
console.table(Object.entries(console).sort());

const Numeros = [1,2,3,4,5],
      vocales = ["a", "e", "i", "o", "u"];
console.table(Numeros);
console.table(vocales);

const Cat = {
    nombre: "Mía",
    raza: "Criolla",
    color: "Blanca"
} 

console.table(Cat);
console.clear();

console.time("Cuanto tiempo tarda mi código");
const Arr = Array(1000000);

for(let i = 0; i < Arr.length; i++){
    Arr[i] = i;
}

console.timeEnd("Cuanto tiempo tarda mi código");
// console.log(Arr);

console.clear();

for(let i = 0; i <= 100; i++){
    console.count("código for");
    console.log(i);
}

let w = 3,
    y = 2,
pruebaWY = "Se espera que W sea siempre menos que Y";

console.assert(w < y, {w,y,pruebaWY});

// Object Date
console.log("**** Objeto Date ****");

console.log(Date());

let fecha = new Date();
console.log(fecha);
// Día del mes
console.log(fecha.getDate());
// Día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDay());
// mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumpleAle = new Date(1996,8, 12);
console.log(cumpleAle);

// Objeto Math: Es un objeto estatico
console.log("**** Objeto Math ****");
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8)); /* Valor absoluto de un número */
console.log(Math.ceil(7.8));/* Redondea el número entero mayor */
console.log(Math.floor(7.8)); /* Redondea el número entero menor */
console.log(Math.round(7.8)); /* Redondea al número más cercano */
console.log(Math.sqrt(81)); /* Raiz caudrada */
console.log(Math.pow(2,5)); /* Elevar potencias */
console.log(Math.sign(0.3)); /* Es un indicador si el número positivo da 1, negativo da -1, cero da 0  */
console.log(Math.random());/* Da números aleatoreos  */
console.log(Math.round(Math.random() * 1000)) /* Round sirve para redondear números */

// Operador Cortocircuito
/*
Cortocircuito OR - Cuando el valor de la izquierda en la expresión siempre pueda validar a true, es el valor que se cargará por defecto

Cortocircuito AND - Cuando el valor de la izquierda en la expresión siempre puede validar false, es el valor que se cargará por defecto
*/

console.log("**** Operador Cortocircuito ****");


function hang (nombre) {
    nombre = nombre || "Desconocido"; // Cortocircuito
    console.log(`Hola ${nombre}`)
}

hang();
hang("Ale");
console.log("cadena" || "valor de la derecha" );
console.log(19|| "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null  || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2  || "Valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(false && "Valor de la derecha");
console.log("cadena" && "valor de la derecha" );
console.log(19 && "Valor de la derecha");
console.log([] && "Valor de la derecha");

// alert, confirm y prompt

console.log("**** alert, confirm y prompt ****");

// alert("Esto es una alerta");
// confirm("Hola esto es una confirmación");
// prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");

let alerta = alert("Esto es una alerta"); 

let confirmacion = confirm("Hola esto es una confirmación");

let aviso = prompt("Hola esto es un prompt y le permite al usuario ingresar un valor");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);