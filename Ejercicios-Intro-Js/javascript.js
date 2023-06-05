//Ejercicio 1
let Nombre;
Nombre = "Eva";
console.log("Eva")

//Ejercicio 2
let Apellido;
Apellido = "Aguilera";
console.log("Aguilera")

//Ejercicio 3
let Edad;
Edad = "22años";
console.log("22años")

//Ejercicio 4
let Mascota;
Mascota = "Matilda";
console.log("Matilda")

//Ejercicio 5
let edadMascota;
edadMascota = "4años";
console.log("4años")

//Ejercicio 6
let nombre1;
nombre1 = "Eva";
let Edad2;
Edad2 = "22años";
let miMascota2;
miMascota2 = "Matilda";
let edadMascota2;
edadMascota2 = "4años";
console.log(nombre1, Edad2, miMascota2, edadMascota2)

//Ejercicio 7
let miNombre = ("Eva")
let miApellido = ("Aguilera")
let nombreCompleto = miNombre + miApellido;
console.log(nombreCompleto)

//Ejercicio 8
let textoPresentacion1;
Nombre = "Eva";
Apellido = "Aguilera";
Edad = "22años";
Mascota = "Matilda";
edadMascota = "4años";
let textoPresentacion = Nombre + Apellido + Edad + Mascota + edadMascota
console.log(textoPresentacion)

//Ejercicio 9
let miEdad = 22;
let edadMascota4 = 4;
// sumaEdades= miEdad + edadMascota3;
console.log(22 + 4)
//restarEdades= miEdad - edadMascota3;
console.log(22 - 4)
//multiplicacionEdades= miEdad *edadMascota3;
console.log(22 * 4)
//divisionEdades = miEdad / edadMascota3;
console.log(22 / 4)

//Ejercicio 10
let textoPresentacion2;
Nombre5 = "Eva";
Apellido5 = "Aguilera";
Edad5 = "22años";
Mascota5 = "Matilda";
edadMascota5 = "4años";
let textoPresentacion3 = (Nombre5) + (Apellido5) + (Edad5) + (Mascota5) + (edadMascota5) + (22 - 4) + (22 + 4) + (22 * 4) + (22 / 4)
console.log(textoPresentacion3)

//Ejercicio 11
let alumno = {
    nombre: "Ignacio",
    edad: 20,
    carrera: "Ingeniería",
    año: "segundoAño",
    semestre: "1ersemestre"

};

console.table(alumno);

console.log("Nombre: " + alumno.nombre);
console.log("Edad: " + alumno.edad);
console.log("Carrera: " + alumno.carrera);
console.log("año: " + alumno.año);
console.log("semestre: " + alumno.semestre);

//Ejercicio 12
let Mascota8 = {
    nombre: "Matilda",
    edad: 4,
    color: "negro",
    añoDeNacimiento: "2019",
    Raza: "Mestizo"

};

console.table(Mascota8);

console.log("Nombre: " + Mascota8.nombre);
console.log("Edad: " + Mascota8.edad);
console.log("color: " + Mascota8.color);
console.log("añoDeNacimiento: " + Mascota8.añoDeNacimiento);
console.log("Raza: " + Mascota8.Raza);

//Ejercicio 13
let frutas = ["Manzana", "Banana", "Naranja", "Pera", "Kiwi"]

console.log(frutas);

frutas.forEach(function (fruta, indice) {
    console.log("Fruta #" + (indice + 1) + ": " + fruta);
});

//Ejercicio 14
let numeros = ["fanta", "cocacola", "sprite", "pepsi", "inkacola"]

console.log(numeros);

numeros.forEach(function (numero, indice) {
    console.log("numeros #" + (indice + 1) + " : " + numero);
});

//Ejercicio 15
let familia = ["Mama", "Papa", "Hermano", "Hermana", "Abuela"]

console.log(familia)

familia.forEach(function (familia, indice) {

    console.log("familia #" + (indice + 1) + " : " + familia);
});

//Ejercicio 16
let segundoElemento = "Banana";
let cuartoElemento = "pepsi";
let quintoObjeto = "Abuela";
let textoAleatorio = (segundoElemento) + (cuartoElemento) + (quintoObjeto);

console.log(textoAleatorio)

//Ejercicio 17

let miEdad1 = Number(prompt("mi edad"));
let edadCompañero = Number(prompt("edad compañero"));


let edadesIguales = miEdad === edadCompañero;
let soyMayor = miEdad > edadCompañero;
let soyMenor = miEdad < edadCompañero;


console.log("Mi edad es igual a la de mi compañero:", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero:", soyMayor);
console.log("Mi edad es menor a la de mi compañero:", soyMenor);

//Ejercicio 18

let edad = Number(prompt("Ingresa tu edad"));

let soyMayorDeEdad = edad >= 18;

console.log("Soy mayor de edad:", soyMayorDeEdad);

//Ejercicio 19
let edad9 = Number(prompt("Ingresa tu edad"));
let altura = Number(prompt("Ingresa tu altura en cm"));

let puedeSubir = edad > 6 && altura >= 120;

console.log("Puede subir a la atracción:", puedeSubir);

//Ejercicio 20

let tipoPase = prompt("Ingresa el tipo de pase (VIP, NORMAL o LIMITADO)");
let saldo = parseFloat(prompt("Ingresa tu saldo disponible:"));

let puedePasar = tipoPase === "VIP" || saldo > 1000;

console.log("La persona puede pasar:", puedePasar);
# intro-a-js
