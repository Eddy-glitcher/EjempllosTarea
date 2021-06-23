
var datos = function(nombre,edad) { // creo una variable datos con var y le asigno una funcion que recibe dos parametros
            console.log(`Soy un canino, me llamo: ${nombre} y tengo ${edad}`); // imprimo por consola un mensaje junto con los parametros que se le han apasado
        }// cierro mi funcion

datos.apply(null,["Tobby","5 años"]); // llamo la funcoin datos y con el metodo apply le paso null y un arreglo


function imprimirN(numeros) { // creo una nueva funcion imprimirN y le paso un parametro
    console.log(`El valor mas alto de mi arreglo es ${numeros}`) // imprimo por consola un mensaje junto con el parametro que recibí
}// cierro mi funcion imprimirN

var numeros = [1,89,34,23,2,8,45]; // creo una arreglo numeros
var resultado = Math.max.apply(this,numeros); // creo una variable y le asigno la funcion matematica math junto con el metodo max aplicada a mi arreglo numeros para consultar el valor maximo dell arreglo
console.log(resultado); // imprimo por consola la variable resultado para conocer el dato


function recorrer(objj) { // creo una nueva funcion recorrer y resivo un parametro
    for (const i in objj) { // creo un ciclo for in para recorrer el parametro en este caso un objeto
        console.log(i); // imprimo por consola cada uno de los valores
    } // cierro mi ciclo
}// cierro mi funcion principal recorrer

var objj = {a: 10, b: 20, c:30}; // creo un objeto objj
recorrer.apply(null,[objj]); //llamo la funcion y con el metodo apply le paso el objeto como arreglo a la funcion


function posicionArreglo() { // creo una neva funcion posicioArreglo
    let RedDead= juegos.indexOf('Zelda'); // creo una variable RedDead cuyo valor consulta una propiedad del objeto juegos
    console.log(`el juego que buscas está en la posicon: ${RedDead}`); // imprime por consola un mensaje junto con la varaibale RedDead
}// cierro mi funcion principal posicionArreglo

let juegos = ['Zelda','Fifa','Call Of Dutty','Red Dead Redemption']; // creo el arreglo objetos
posicionArreglo.apply(null,juegos)// llamo la funcion posicioArreglo y con el metodo Apply le paso null y el objeto juegos

let Dia = 2; // inicializo una variable Dia con let y le asigno un entero
function diaSemana(mensaje) { // creo una nueva funcion diaSemana y le paso un parametro
    console.log(`${mensaje} ${Dsemana[Dia]() || "Día no definido"}`); // imprimo por consola el prametro recibido junto con una propiedad de objeto
}// cierro mi funcion principal diaSemana
let Dsemana = { // creo el objeto Dseman qe contiene los dias de la semana representados por numeros del 0 al 6 con su respectivo console.log para imprimirlos por consola segun sea el caso
    0:()=>{ return"Domingo"},//
    1:()=>{ return"Lunes"},//
    2:()=>{ return"Martes"},//
    3:()=>{ return"Miercoles"},//  Propiedades con funciones de flecha como valores  que retornan un mensaje con el dia de la semana  
    4:()=>{ return"Jueves"},//
    5:()=>{ return"Viernes"},//
    6:()=>{ return"Sabado"},//
 }; // cierro mi objeto

 diaSemana.apply(Dsemana,["El dia de hoy es: "]); // llamo la funcion diaSemana y con el metodo apply le paso el objetoDsemana y un arreglo 

 function romperReferencia() {// creo  una nueva funcion romperReferencia
    const otrasFrutas=[...fruta]; // creo una constante y uso el operador rest para romper la referencia con el objeto principal fruta y que solo se copien las propiedades
    const otrasFrutas2= [...fruta]; // creo una constante y uso el operador rest para romper la referencia con el objeto principal fruta y que solo se copien las propiedades
    otrasFrutas.push("Cereza"); // agrego dentro del objeto otrasFrutas el valor "Cereza"
    console.table({fruta,otrasFrutas}) // imprimo por consola una tabla con ayuda del metodo table
 } // cierro mi funcion principal
const fruta =["Manzana","Zandía","Banano","Pera"]; // creo un arreglo fruta
romperReferencia.apply(null,fruta);// llamo la funcion romperReferencia y con el metodo apply le paso null y el objeto fruta


function Profesor (nombre) { // creo una nueva funcion Profesor y le paso un parametro
     this.nombre = nombre || 'Nombre desconocido'; this.salarioBase = 1200; // accedo a la propeda nombre del parametro recibido
}// cierro mi funcion principal Profesor

function saludar(nombrePersona, modoSaludo) { // creo una funcion saludar y recibo dos parametros
alert ('Hola, soy ' + this.nombre + ' y saludo a ' +nombrePersona+ ' con ' + modoSaludo); } // creo un alert que me crea una ventana emergente en el navegador y me imprime el mensajejunto con algunas propiedades o valores de los parametros recibido por la funcion

function ejemploObjetos() { // creo una nueva funcion ejemploObjetos
     var unProfesor = new Profesor('Carlos'); // creo una variable un Profesor y le asigno un constructor que recibe una cadena como parametro
var unArray = ['Christian', 'odio'];// creo un array con cadenas
saludar.apply(unProfesor, ['Ernesto', 'afecto']); // llamo la funcion saludar y con el metodo apply le paso el constructor y un arreglo
saludar.apply(unProfesor, unArray); // llamo la funcion saluar y con ayuda del metodo apply le paso el constructor unProfesor y un unArray 
}// cieero mi funcion
ejemploObjetos();// llamo la funcion

var llamarActor = {// creo un objeto y le asigno propiedades y valores
    nombre : "Robert Dawney", 
    Apellido:  "Junior",
    pelicula : "Iron Man",
    InfoGeneral : function () { // le asigno al objeto una funcion como valor de propiedad
        return `El actor ${this.nombre} ${this.Apellido} es el protagonista de ${this.pelicula}`; // retorno un mensaje con algunas propiedades del objeto con la ayuda de this 
    }// cierro mi funcion 
}; // cierro mi funcion

let otroActor = { // creo un nuevo objeto y le asigno sus respectivas propiedades y valores
    nombre :"Crhis",
    Apellido : "Evans", 
    pelicula : "Capitan America"
};

var taquilla = llamarActor.InfoGeneral.apply(otroActor);// creo una variable taquilla y le asigno la llamada de la funcion infoGeneral y con el metodo apply le paso el objeto otroActor
console.log(taquilla); // imprimo por consola la variable taquilla


var nave = { nombre: 'Death Star' }; // creo un nuevo objeto nave y le asigno una propiedad y valor

function disparar(disparo) { // creo una funcion disparar y le paso un parametro
  console.log(this.nombre + ' está Disparando: ' + disparo.toUpperCase() + '!!!'); // imprimo por consola un mensaje junto con las propiedades del objeto disparo
}// cierro mi funcion

nave.disparar; // para llamar a la funcion 
disparar.apply(nave, ['pichium']); // llamo la funcion y con el metodo apply le paso el objeto nave y un arreglo con una cadena

var obj1 = { // creo un nuevo objeto obj1 y le asigno nalgunas propiedades y valores
    x: 10, 
    y: 2,
    incrementar: function () { // le asigno una funcion como valor a un apropiedad del objeto
      this.y += 2; // incremetno la propiedad y del objeto 
      console.log('Ahora Y vale', this.y * Math.random()); // imprimo un mensaje junto con la multiplicacion de y con un numero random
    }// cierro mi funcion
  };// cierro mi objeto
  
  var obj2 = {// creo un objeto obj2
      y : 6 // le asigno una propiedad y valor
  };// cierro el objeto

  obj1.incrementar.apply(obj2); // llamo al objeto y la funcion incrementar y con el metodo apply le paso el obj2 
//   var id = setInterval(obj.advance, 1 * 1000);