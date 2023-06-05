//Ejercicio 1
/* for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i}= ${3 * i}`)
}

//Ejercicio 2
let acumulador = [];
let ingresado;

do {
    ingresado = Number(prompt("Ingresar número o 0 para terminar"));
    acumulador.push(ingresado); // Agregar el número ingresado al arreglo
} while (ingresado !== 0);

console.log(acumulador); */



//Ejercicio 3

// let numeroFinal = 8;
// let ingresar;
// let intentos = []
// do {
//     ingresar = Number(prompt("Adivinar un número entre 1 y 100"));
//     if (ingresar > numeroFinal) {
//         alert("El número es mayor, vuelva a intentarlo.");
//         //console.log("")
//     } if (ingresar < numeroFinal) {
//         alert("El número es menor, vuelve a intentarlo.");
//         //console.log("")
//     } else if (ingresar === numeroFinal) {
//         alert("¡Felicidades, adivinaste!");
//     }
//     intentos.push(ingresar);
// } while (ingresar != numeroFinal);
// alert("El número de intentos fué:" + " " + intentos.length)



//Ejercicio 7
/* let familia = [
    { nombre: "Eugenia", apellido: "Tauda", edad: "21", relacion: "Hija" },
    { nombre: "Agueda", apellido: "Tauda", edad: "27", relacion: "Hija" },
    { nombre: "Sofia", apellido: "Tauda", edad: "23", relacion: "Hija" },
    { nombre: "Sandra", apellido: "Manriquez", edad: "51", relacion: "Esposa" },
    { nombre: "Waldo", apellido: "Tauda", edad: "63", relacion: "Marido" },

];
console.log(familia)
familia.forEach(function (persona) {
    let nombre = persona.nombre;
    let apellido = persona.apellido;
    let edad = persona.edad;
    let relacion = persona.relacion;

    let saludo = "Hola, mi nombre es " + nombre + apellido + "tengo" + edad + "años de edad" + "soy la" + relacion;

    console.log(saludo);
}); */

//Ejercicio 9

/* let numeros = [
    { Numero: 1, },
    { Numero: 4, },               //no debe usar foreach
    { Numero: 3, },
    { Numero: 9, },
    { Numero: 2, },
    { Numero: 11, },
    { Numero: 5, },
    { Numero: 6, },
    { Numero: 7, },
    { Numero: 8 },
];
console.log(numeros)

numeros.forEach(function (objeto) {
    var numero = objeto.Numero;

    if (numero % 2 !== 0) {
        console.log(numero);
    }
}); */

//Ejercicio 4
/*
function imprimirDivisores(numero) {
    var divisores = [];

    for (var i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    console.log("Los divisores de " + numero + " son: " + divisores.join(", "));
}

// Ejemplo de uso:
var numeroIngresado = 24;
imprimirDivisores(numeroIngresado);

//Ejercicio  5

let mensajes = ["Hola", "que", "tal", "bienvenido", "a", "la", "introduccion", "de", "javascript", "¡Suerte!"];

for (let i = 0; i < mensajes.length; i++) {
    console.log(mensajes[i]);
} */

//Ejercicio 6
/* let numeros = [5, 20, 10, 23, 45, 1, 23, 26, 7, 8];
for (let i = 0; i < numeros.length; i++) {
    let doble = numeros[i] * 2;
    console.log("El doble de " + numeros[i] + " es: " + doble);
}
//Ejercicio 11
let numerados = [1, 4, 63, 8, 56, 7, 41, 7, 9, 12];
let numeroMayor = numerados[0]
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMayor)
        numeroMayor = numerados[i];

}
console.log("El número más grande es:" + numeroMayor); */

//Ejercicio 10

let Pares = 0;
let Impares = 0;
let numero;

do {
    numero = Number(prompt("Ingresa un número (ingresa 0 para finalizar)"));

    if (numero % 2 === 0) {
        Pares += numero;
    } else {
        Impares += numero;
    }
} while (numero !== 0);

console.log(`La  de los números pares es: ${Pares}`);
console.log(`La  de los números impares es: ${Impares}`);





