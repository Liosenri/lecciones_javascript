console.log("Hello");

// Strings
const nombre = "Luis";
const numeroDeControl = "E11020913";
const simboloDePregunta = "?";
const stringConComillas = "Medina";

console.log(stringConComillas);

// number
const edad = 23; // number
const estatura = 15.6;
const calificacion_a = 10;
const calificacion_b = 7;
const calificacion_c = 5;
const promedio = (calificacion_a + calificacion_b + calificacion_c) / 3;

// Jerarquia de operaciones

// Parentesis
// Raiz cuadrada y Exponente
// Multiplicacion y Divicion
// Suma y Resta

// Concatenacion
const mensajePromedio = "El promedio es " + promedio;
console.log(mensajePromedio);

// Causa un error por que mensajePromedio es constante
// mensajePromedio = "promedio sin registrar";

var variableConVar = "Hola";
variableConVar = "Adios";

let variableConLet = "Hola";
variableConLet = "Adios";

let sumaVar = 29;

var a = 5;
var b = 10;

if (true) {
  let c = 20;
  var d = 30;
  console.log("C vale " + c); // 20
}

console.log("A vale " + a); // 5
console.log("B vale " + b); // 10
console.log("D vale " + d); // 30
// console.log("C vale " + c); //  da error por que c es undefined

function imprimirSuma(numero_a, numero_b) {
  const resultado = numero_a + numero_b;
  console.log("imprimirSuma : " + resultado);
}

imprimirSuma(5, 6);
imprimirSuma(20, 30);

// Da error por que resultado es const y esta dentro de imprimirSuma, estamos fuera de su scope
// console.log("El resultado fue ", resultado);

function obtenerResultado(numero_a, numero_b) {
  const resultado = numero_a + numero_b;
  return resultado; // Si la funcion no devuelve nada , regresara undefined
}

const resultadoSuma = obtenerResultado(7, 10);
console.log("resultadoSuma ", resultadoSuma);
