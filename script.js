// Este es un comentario
/*
Este es un comentario de más de una línea
*/

/*
SINTAXIS Y VARIABLES
*/

//var "hoisting"
//let
//const

console.log("Sintaxis y Variables");
//var

var edad = 28;
edad = 30;  //Reasignación permitida
console.log(edad); // Salida: 30

//let
let nombre = "Andrew";
nombre = "Diana"; //Reasignación permitida
console.log(nombre); //Salida: Diana

//const
const PI = 3.14159;
//PI = 3.14; // Error: No se puede reasignar una constante
console.log(PI);


console.log("=======================")

//TIPOS DE DATOS EN JAVASCRIPT
/*
Número (number)
Representa tanto números enteros como decimales
*/

var edad = 30; //Numero entero
let altura = 1.75; // Número decimal
const temperatura = -5; // Números negativos también son permitidos
console.log(edad, altura, temperatura);

/*
Cade de texto (string)
backticks (para plantillas literales)
*/

var saludo = "Hola, mundo";
let nombres = 'Martha';
const mensaje = `Hola, ${nombres}`; //Uso de plantilla literal
console.log(saludo); 
console.log(mensaje);


/*
Booleano(boolean)
Puede ser true o false
*/

var esEstudiante = true;
let mayorEdad = false;
const accesoPermitido = true;
console.log(esEstudiante, mayorEdad, accesoPermitido);

/*
Nulo (null)
*/

var resultado = null;
console.log(resultado); //Salida: null

/*
Indefinido(undefined)
*/

let valor;
console.log(valor); //Salida: undefined

/*
BigInt
*/

const numeroGrande = 900719925480091n; // La 'n' al final indica que es BigInt
console.log(numeroGrande); //Salida: 900719925480091n

/*
Símbolo (Symbol)
*/

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2); //Salida: false



//CONTROLES DE FLUJO

//CONDICIONALES

//Operador Ternario

let edadPersona = 14;
let mensajes = (edadPersona >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensajes);

//Manejo de excepciones: try, catch, finally.

try {
    let resultado = 10 / 0;
    console.log(resultado);
} catch (error) {
    console.log("Se ha producido un error: " + error.message);
}finally {
    console.log("Esto se ejecutará siempre, ocurra o no un error");
}


/*
Etiquetas (Labels)
*/

outerLoop:
for (let i = 0; i < 3 ; i++) {
    for (let j = 0; j < 3 ; j++) {
        if (i === j) {
            break outerLoop;
        }
          
    }
    console.log("i: ", i, "j; ", j);
}

console.log("===========EJERCICIOS PRACTICA ============")

/*
Escribe un programa que solicite al usuario su edad y determine si es mayor o menor
de edad. Si es mayor de edad, mostrará un mensaje indicando que puede 
ingresar; si es menor, mostrará un mensaje indicando que no puede ingresar
*/

// Solicita la edad al usuario
let edadUsuario = parseInt(prompt("Por favor, ingresa tu edad: "));

//Verificamos si la edad ingresada es un número válido
if (isNaN(edadUsuario)){
    console.log("Por favor, ingresa un número válido.");
} else{
    //Utilizamos esta condicional para verificar si el usuario es mayor o menor de edad
    if (edadUsuario >= 18) {
        console.log("Eres mayor de edad. Puedes Ingresar. :)");
    }else{
        console.log("Eres menor de edad. No puedes Ingresar. :'(");
    }
}


/*
Crear un programa que pida al usuario el monto total de su compra y calcule el
descuento según el siguiente criterio:

    - Si el monto es mayor a 100, se aplica un 10% de descuento.
    - Si el monto es entre 50 y 100, se aplica un 5% de descuento.
    - Si el monto es menor a 50, no se aplica ningún descuento.

El programa debe mostrar el monto total con el descuento aplicado

*/

// Solicita el monto de compra al usuario
let montoCompra = parseInt(prompt("Digita el monto total de tu compra: "));

if (isNaN(montoCompra) || montoCompra < 0){
    console.log("Por favor, digite un monto válido");
} else{
    let descuento = 0;

    if(montoCompra > 100){
        descuento = montoCompra * 0.10; // 10% de descuento
    }else if (montoCompra >= 50){
        descuento = montoCompra * 0.05; // 5% de descuento
    }

    let montoFinal = montoCompra - descuento;

    console.log("Monto Compra: $" +montoCompra.toFixed(2));
    console.log("Descuento: $" + descuento.toFixed(2));
    console.log("Monto final: $" + montoFinal.toFixed(2));

}


/*
Crea un programa que pida al usuario ingresar las calificaciones de un grupo 
de estudiantes. El usuario debe indicar cuántas calificaciones ingresará.
El programa calculará el promedio de las calificaciones y determinará si cada
estudiante está aprobado o desaprobado. Se considera que una calificación 
de 60 o más es un aprobado. 
*/

let cantidadEstudiantes = parseInt(prompt("¿Cúntos estudiantes deseas digitar?"));

if (isNaN(cantidadEstudiantes) || cantidadEstudiantes <= 0){
    console.log("Por favor, digite una cantidad válida");
} else{
    let calificaciones = [];

    for (let i=0; i < cantidadEstudiantes; i++){
        let calificacion = parseFloat(prompt("Digite la calificación del estudiante " + (i + 1 )+ ":"));

        if (isNaN(calificacion) || calificacion < 0 || calificacion > 100 ){
            console.log("Por favor, digite una calificación válida entre 0 y 100");
            i--;
        }else{
            calificaciones.push(calificacion);
        }

    }

    let suma = 0;
    for (let calificacion of calificaciones) {
        suma += calificacion;
    }
    let promedio = suma / cantidadEstudiantes;


    console.log("El promedio de las calificaciones es: " + promedio.toFixed(2));

    for (let i = 0; i < cantidadEstudiantes; i++) {
        let estado = calificaciones[i] >= 60 ? "Aprobado" : "Desaprobado";
        console.log("Estudiante " + (i + 1) + ": " + estado);
    }
}

//FUNCIONES EN JS
/*
Sintaxis
*/

function nombreFuncion(param1, param2) {
    // Cuerpo de la función
    return resultado; 
}


function sumarNumeros (a, b) {
    return a + b;
}

console.log(sumarNumeros(5, 10)); //Salida: 15


/*
EJERCICIO 01
Gestión de Notas  de Estudiantes

Crear un programa que gestione las notas de los estudiantes de un curso
El programa debe permitir al usuario:

- Agregar un nuevo estudiante son nombre y calificación.
- Mostrar la lista de estudiantes con sus calificaciones
- Calcular el promedio de las calificaciones del curso
- Determinar cuántos estudiantes aprobaron (Calificacion >= 60) y cuantos desaprobaron
- El programa debe seguir pidiendo al usuario acciones hasta que decida salir
*/


/*

EJERCICIO 02
Crea una función que verifique si una palabra o frase es un palíndromo.
La función esPalindromo debe tomar un parámetro texto.
La función debe devolver true si el texto es un palíndromo y false en caso contrario.
*/

/*
EJERCICIO 03

Crea una función que genere un array de números aleatorios.

Enunciado:

La función generarNumerosAleatorios debe tomar dos parámetros: cantidad (número de elementos a generar) y rango (un objeto que define el rango de los números aleatorios con propiedades min y max).
La función debe devolver un array con los números aleatorios generados.

*/


/*
EJERCICIO 04
Crea una función que analice un conjunto de calificaciones y devuelva un objeto con información resumida: la calificación más alta, la más baja, la media y el número de aprobados.

Enunciado:

La función analizarCalificaciones debe tomar un parámetro calificaciones, que es un array de números.
La función debe devolver un objeto que contenga:
mayor: la calificación más alta.
menor: la calificación más baja.
media: la calificación media (promedio).
aprobados: la cantidad de calificaciones mayores o iguales a 60.
*/
















