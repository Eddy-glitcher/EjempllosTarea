var arreglo = [22,12,34,36,389,56];  // inicializo una variable para almacenar un arreglo
function recorrer() { // inicializo  una funcion llamada recorrer
    this.arreglo.forEach(resultado => console.log(resultado)); {  // creo un ciclo forEach para recorrer el arreglo que previamente se inicializó y lo imprimo por consola 
    } 
}
recorrer(); // Llamo la funcion con el metodo this

var num = 1200; // Creo una variable llamada num para almacenar un entero
const flecha = () =>{return this.num}; // creo una funcion de flecha para imprimir el numero almacenadao en la variable con ayuda de this
console.log("Haciendo llamado de variable con this: "+ flecha()); // llamo a la funcion acompañada de un texto 

var objeto = { // creo un nuevo objeto y lo llamo objeto valga la redundancia
     nombre : 'Luis Edier Aguirre', // creo una propiedad o llave y le asigno un valor
     edad : function() { // creo una propiedad y le asigno una funcion como valor
        var contador = 0; // creo una variable y la uso como contador para que se autoincremente
        for (let i = 0; i < this.nombre.length; i++) { // creo un ciclo for para recorrer una cadena de texto en este caso una propiedad o llave del mismo objeto
            contador = contador + 1; // uso mi contador previamente creado y lo auto incremento
        }
        console.log("Mi edad es la cantidad de caracteres en mi nombre: "+contador); // imprimo el resultado acumulado en el contador
    }
};
console.log(objeto.edad()); // imprimo el resultado del proceso de la funcion por consola

const funcion = ()=>{   // creo una constante y le asigno una funcion e flecha
    return console.log(this.navigator.appVersion); // retorno una funcion predeterminada en javascript y la imprimo por consola. esta funcion me dice que version de mi navegador estoy usando
}
console.log(funcion()); // ejecuto la funcion por medio de su llamado por consola


function suma(numero1,numero2,total) { // creo una funcion y le paso algunos argumentos para realizar la serie fibonacci
    this.a= numero1; 
    this.b=numero2 ;  // inicializo nuevas variables con la palabra reservada this
    this.c= total
    return function (){for (let i = 0; i < 10; i++) { // retorno un ciclo para recorrerlo 10 veces 
        c = a + b;  // le asigno a c el valor de la suma entre a y b
        a =b;  // igualo lo que hay en b en a
        b = c;  // igualo lo que hay en c en b
        console.log(c); // imprimo el resultado
        }  
    }
}

var fibonacci = suma(0,1,0); // llam la funcion y le paso parametros y la asigno a una variable
console.log(fibonacci()); // imprimo por consola la sucesion de fibonacci que está en la funcion

function titulo() { // creo una funcion 
    return alert("Mi pagina se llama: "+this.document.title); // retorno una funcion predeterminada que me muestra por consola el titulo de mi documento
}
titulo(); // llamo la funcion

let Rectangulo = class { // creo una pequeña clase
    constructor(alto, ancho) { // creo uhn constructor y le paso algunoss parametros
      this.alto = alto; // reasigno variables con el metodo this
      this.ancho = ancho; // reasigno variables con el metodo this
    } // cierro mi constructor
  }; // cierro mi funcion
  
  console.log(Rectangulo.name); // imprimo el resultado por consola


  const carro = { // creo un nuevo objeto llamado carro
    marca : 'Audi' // le doy una propiedad y valor a mi objeto
  }; // cierro mi objeto

  function auto() {  // creo una funcion  llamada auto
    if (this.marca!='Audi') { // valido que la marca de mi auto sea Audi
          console.log('Tu coche es un Magnífico: ' + this.marca); // si es aud me imprime por consola el mensaje acompañado de la marca
      }else { // Si no es Audi se va por este camino
          console.log('Genial tu coche es un hermoso: '+ this.marca+" Es mi coche Favorito"); // Acompañdo del mensaje me aparece un mensaje por consola
      } // cierro condicional
  } // cierro funcion

  carro.auto=auto; // reasigno funcion a variable
  carro.auto(); // llamo la funcion con la variable que definí previamente

function vPi() { // Creo una funcion 
    return this.Math.PI;    // retorno el equivalente de pi con ayuda de la funcion Math y su respectivo metodo
}
var ValorT=vPi(); // reasigno funcion en variable
console.log(ValorT); //Imprimo la funcion reasignada 

function condicion() { // creo una funcion
    var arreglo1 = [1,2,3,4,5,6,7,8,9]; // Inicializo un arreglo con var
    var arreglo2 = [22,32,42,54]; // Inicializo un arreglo con var
    if (this.arreglo!="") { //Creo un condicional que en el caso de que mi arreglo tenga informacion se ejecutara el condicional
        var nArreglo = arreglo1.concat(arreglo2); // uno los dos arreglos por medio del metodo concat
        console.log("Mi nuevo arreglo es: "+ nArreglo); // imprimo el resultado 
    } else {
        console.log("No hay datos en los arreglos"); // Mensaje a imprimir en caso de que el primer arreglo esté vacío
    }
}
condicion(); // llamo la funcion para ejecutar su seccion de codigo

var presentacion = { // inicializo un objeto con var
    nombre : "Juana",  // digito algunas prropiedades del objeto presentacion en este caso el nombre
    edad : "19",  // La edad
    pais : "Argentina", // Procedencia o pais
    ciudad : "Buenos Aires", // ciudad
    musica : ["Rock","Metal","Rap","Country"], // gustos musicales
    saluda: function presentarse() { // creo una funcion dentro de una propiedad de objeto
        console.log("Hola me llamo: ",this.nombre, " Y me gusta mucho la musica: ", this.musica[3]); // imprimo el resultado de las consultas al objeto con this
    }
};

presentacion.saluda(); // llamo a la funcion y a la propiedad saluda que contiene la funcion a ejecurtar

function protocolo() { // creo una funcion con su respectivo nombre
    return this.location.protocol; // retorno por consola que me enseña el protocolo que se está usando en mi documento o sitio web
}
var verProtocolo = protocolo(); // asigno la funcion a una variable
console.log(verProtocolo);  // muestra el protocolo usado file http https ftp etc

function cadenaANumero() { // inicializo una funcion 
    var a = '10'; // creo una variable y le almaceno un entero como string 
    var b = '21'  // creo una variable y le almaceno un entero como string 
    return this.eval(parseInt(a)+parseInt(b)); // retorno el resultado de la evaluacion o suma de dos numero que fueron convertido de cadenas a numero a través del metodo parseInt
}
console.log(cadenaANumero()); // imprimo la funcion a ejecutar

function Poblacion(color, nombre, tipo) { // creo una nueva funcion y le paso algunos parametros
    this.color = color; // reasigno parametros con this en variables
    this.nombre = nombre; // reasigno parametros con this en variables
    this.tipo = tipo;  // reasigno parametros con this en variables
  }
  
const definicion= new Poblacion('Blancos', 'Mestizos', 'Delgados'); // creo una constante y le almaceno un nuevo objeto
const define = Object.create(Poblacion); // inicializo el objeto 
define.nombre= "Afroamericanos"; // almaceno dentro del objeto la propiedad nombre con su respectivo valor
console.log(define.nombre); // lllamo la propiedad de objeto almacenada dentr de la funcion

function masNumeros(){ // creo una nueva funcion 
    this.a = 37; // le asigno valores a variables 
    return {a:38}; // retorno el nuevo resultado o valor de a
}
var resultt= masNumeros(); // reasigno el valor de la funcion en una variable
console.log(resultt); // imprimo el resultado