// Ejercicio 1

console.log("Ejercicio 1");

const contarCaracteres = (caracteres) => {
  caracteres = "Hola Ale tú puedes";
  return console.log(
    "La cadena:",
    caracteres,
    "tiene",
    caracteres.length,
    " caracteres."
  );
};
contarCaracteres();

// Solución de Jon

// function Contar(cadena) {
//   if(!cadena) {
//     console.warn("No ingresaste ninguna palabra");
//   }else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//   }
// }

const contarPalabras = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ninguna palabra")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarPalabras();
contarPalabras("Hola Mundo");

//Ejercicio 2
console.log("Ejercicio 2");

const cortarPalabras = (palabra) => {
  palabra = "Yo solo sé que no sé nada";

  return console.log(palabra.slice(11));
};

cortarPalabras();

// Solución de Jon

const recortarTexto = (cadena = "", logitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : logitud === undefined
    ? console.warn("No ingresaste el texto")
    : console.info(cadena.slice(0, logitud));

recortarTexto("Hola mundo", 4);
recortarTexto();
recortarTexto("Hola Hola");
recortarTexto("", 5);

// Ejercicio 3

console.log("Ejercicio 3");

const word = (palabra, separada) => {
  palabra = "Hola Personas";
  separada = palabra.split("");

  return console.log(separada);
};

word();

// Solución de jon

const cadenaAArreglo = (cadena = "", separador = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : separador === undefined
    ? console.warn("No ingresaste el caracter separador")
    : console.info(cadena.split(separador));

cadenaAArreglo(
  "enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre",
  ","
);
cadenaAArreglo(
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci repellendus officia maxime hic dolores temporibus dicta, at vel quis corrupti voluptatum animi provident amet suscipit praesentium itaque. Dolores, reiciendis.",
  ","
);
cadenaAArreglo("Hola mundo");
cadenaAArreglo("", "-");

// Ejercicio 4

console.log("Ejercicio 4");

const repetirNombre = () => {
  let nombre = "Ale";
  for (let i = 0; i < nombre.length; i++) {
    console.log(nombre);
  }
};

repetirNombre();

// Solución de jon

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("No ingresate un texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces a repetir el textoo");

  if (veces === 0) return console.error("El número de veces no puede ser 0");

  if (Math.sign(veces) === -1)
    return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

repetirTexto("Hola mundo", 3);
repetirTexto("Ale", 0);
repetirTexto("Ale", -20);
repetirTexto("", 20);
repetirTexto("Ale");

//Ejercicio 5
console.log("Ejercicio 5");

const invertirPalabra = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));

invertirPalabra("");
invertirPalabra("Hola mundo");
invertirPalabra("ale");
invertirPalabra("JavaScript es un lenguaje de programación increible");
invertirPalabra(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci repellendus officia maxime hic dolores temporibus dicta, at vel quis corrupti voluptatum animi provident amet suscipit praesentium itaque. Dolores, reiciendis."
);

// Ejercicio 6
console.log("Ejercicio 6");

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

textoEnCadena();
textoEnCadena("", "mundo");
textoEnCadena("Hola mundo adios mundo");
textoEnCadena("Hola mundo adios mundo", "mundo");

// Ejercicio 7
console.log("Ejercicio 7");

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLocaleLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Sí es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`
      )
    : console.info(
        `No es palíndromo, Palabra original ${palabra}, Palabra al revés ${alReves}`
      );
};

palindromo();
palindromo("Hola mundo");
palindromo("salas");

// Ejercicio 7
console.log("Ejercicio 7");

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste el texto")
    : !patron
    ? console.warn("No ingresaste el patrón de caracteres")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5 xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

eliminarCaracteres(
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci repellendus officia maxime hic dolores temporibus dicta, at vel quis corrupti voluptatum animi provident amet suscipit praesentium itaque. Dolores, reiciendis.",
  "[a-z]"
);

//Ejercicio 9
console.log("Ejercicio 9");

const numero = (aleatorio = "") => {
  let min = 501;
  let max = 600;

  console.info((aleatorio = Math.ceil(Math.random() * (max - min + 1) + min)));
};

numero();

// Solución de jon

const aleatorio = () => console.info(Math.round(Math.random() * 100 + 500));

aleatorio();

//Ejercicio 10
console.log("Ejercicio 10");

const capicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, No es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(
        `Sí es capícua, Número original ${numero}, Número al revés ${alReves}`
      )
    : console.info(
        `No es capícua, Número original ${numero}, Número al revés ${alReves}`
      );
};

capicua();
capicua("19");
capicua({});
capicua(2000);
capicua(2002);
capicua(20.02);
capicua(10.99);
capicua(212.212);

//Ejercicio 11
console.log("Ejercicio 11");

const factorial = (numero = undefined) => {
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, No es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial ${numero} es ${factorial}`);
};

factorial();
factorial("5");
factorial([1, 2, 3]);
factorial(0);
factorial(-5);
factorial(5);
factorial(8);
factorial(3);
factorial(2);
factorial(1);
factorial(4);

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

console.log("Ejercicio 7");

const numeroPrimo = (numero = undefined) => {
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, No es un número`);

  if (numero === 0) return console.error("El número no puede ser 0");

  if (numero === 1) return console.error("El número no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let divisible = false;

  for(let i = 2; i < numero; i++ ) {
    if((numero % i) === 0) {
      divisible = true;
      break;
    }
  }

  return (divisible)
  ?console.log(`El número ${numero}, Si es primo`)
  :console.log(`El número ${numero}, No es primo`);
}

numeroPrimo();
numeroPrimo("");
numeroPrimo(7);
numeroPrimo(2);
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(5);
numeroPrimo(200);

  


    

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
