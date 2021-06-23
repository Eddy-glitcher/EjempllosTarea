var entero = 10;  // Declaro una variaboe global y le asigno el numero 10
var string = 'Soy Global'; // Declaro una variable Global  y le asigno una cadena
var arreglo= [1,2,3,4,5,6]; // Declaro una variable global y le asigno un arreglo con numeros
var objeto = {nombre:'luis', edad : 22 }; //Declaro una variable y le asigno un objeto con las propiedades nombre y edad
var booleano = true; // Declaro una variable global y le asigno un booleana con el valor de true
let flecha = () => {return "Hola"}; // Declaro una variable global  y le asigno una funcion de flecha que contiene un return que me devuelve un mensaje 
var caracter = 'A'; // Declaro una variable global y le asigno un caracter de cadena
let decimal = 2.3; // Declaro una variable global con la palabra reservada Let y le asigno un numero decimal
const funcion1= ()=>{console.log("Hola X2")}; // Declaro una variable  global con la palabra reservada const y le asigno una funcion que imprime por consola un mensaje a travéz de la funcion console y el metod log 

function funcion() { // creo una funcion 
    var saludo = flecha(); // creo una variable y reasigno el contenido de la variable flecha en la variable saludo
    return function() { // retorno una funcion
        console.log(saludo+" "+objeto.nombre); // imprimo por consola un mensaje accediendo a la variable saludo y a la propiedad nombre de objeto  
    } // cierro la funcion
} // cierro la funcion principal
var saludito = funcion(); // creo una varible y le asigno la funcion anterior
console.log(saludito()); // imprimo por consola la funcion mediante la variable 

function llamado() { // creo una funcion
    if (booleano == true) { // valido mediante condicional if si la variable booleano es igual a true en caso de ser verdadero sigue este camino
        console.log(arreglo[2]); // imprimo por consola la posicion 2 del arreglo almacenado en la variable arreglo
    }else { // en caso de que booleano no sea verdadero toma este camino
        console.log(false); // imprimo por consola false
    } // cierro mi condicional if
} // cierro mi funcion     
llamado(); // hago un llamado a mi funcion llamado para que ejecute su contenido                                                                                              

function imprimir(){ // creo una funcion 
    console.log(string); // imprimo por consola el contenido de la variable string
} // Cierro mi funcion imprimir
imprimir(); // Realizo el llamado de mi funcion

let llamado2 = ()=>{return funcion1()}; // inicializo una variable llamado2 y le asigno una funcion de lecha que me retorna otra funcion que imprime por consola un mensaje 
llamado2(); // Realizo el llamado de mi funcion

function llamado3() { // Creo una funcion
    console.log({entero,caracter,decimal}); // imprimo por consola tres variable y las encapsulo dentro de un objeto
} // cierro mi funcion
llamado3(); // Realizo el llamado a mi funcion para ejecutar su contenido

