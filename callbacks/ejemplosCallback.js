// Inicio del ejemplo
var guerrerosZ = ['Goku','Vegetta','Turles','Bardock']; // creo un arrar con strings

guerrerosZ.forEach(function(nombre,index) { // recorro el arreglo guerrerosZ con el ciclo forEach y le paso una funcion anonima como callback junto con dos parametros
  console.log(`${index}  ${nombre}`); // imprimo por consola el iterador y el valor del arreglo en la posicion del iterador
})
// Fin del ejemplo

// Inicio del ejemplo

var usuario = { // creo un arreglo 
  nombre : 'Alonso',  // defino sus propiedades y valores
  apellido : 'Contreras',
  telefono : 1234567895
}

var Usuario =[]; // creo un arreglo vacío
function verificarUsuario(usuario) { // creo una funcion y le paso un parametro en este caso un arreglo vacío
  if (typeof usuario === 'string') { // creo una estructura condicional que verifique el tipo de variable o la naturalidad del parametro usuario
    console.log('Es una cadena '); // en caso de que el parametro usuario sea una cadena se imprime por consola este mensaje
  }else if (typeof usuario === 'object'){ // vuelvo a condicionar el parametro usuario para comparar su naturalidad y verificar que sea un objeto
    for (const key in usuario) { // en caso de que sea un objeto, mediante un For In recorro el parametro usuario
      console.log(key + ": " + usuario[key]); // imprimo por consola los valores contenidos en el arreglo
    }
  }
}

function introducirUsuario(nUsuario,callback) { // creo una funcion que recibe dos parametros en este caso un arreglo y un callback
  Usuario.push(nUsuario); // mediante el metodo push inserto los valores contenidos en el objeto usuario y los inserto en el objeto Usuario 
  callback(nUsuario); // llamo la funcion callback y le paso el objeto para que lo recorra y realice el recorrido del objeto y los pueda insertar en el nuevo objeto
}
introducirUsuario(usuario,verificarUsuario); // llamola funcion introducir UsuariointroducirUsuario y le el objeto usuario y la funcion verificarUsuario como parametros 
// Fin del ejemplo

// Inicio del ejemplo
var arreglo = [22,12,34,36,389,56];  // inicializo una variable para almacenar un arreglo
function recorrer() { // inicializo  una funcion llamada recorrer
    this.arreglo.forEach(resultado => console.log(resultado)); {  // creo un ciclo forEach para recorrer el arreglo que previamente se inicializó y lo imprimo por consola 
    } 
  }
  
function  callback(fn) { // creo una funcion y le paso un parametro 
  fn(); // llamo la funcion que fue recibida como  parametro
}
callback(recorrer); // llamo la funcion recorrer y le paso el collback recorrer
// Fin del ejemplo

// Inicio de Ejemplo
function Tarea(subject, callback) { // creo la funcion tarea y le paso dos parametros 
  alert(`Empezando My tarea de ${subject}.`); // mediante la funcion alert creo una ventana emergente que imprima por pantalla el mensaje junto con la el primer parametro recibido
  callback(); // llamo al callback recibido como parametro
}

Tarea('mate', function() { // llamo la funcion tarea y le paso una cadena como primer argumeento y una funcion anonima como callback
  alert('Tarea Finalizada'); // esta funcion imprime un mensaje por pantalla mediante una ventana emergente 
});
// Fin del ejemplo

//Inicio del ejemplo

var personaje = { // creo un objeto 
  nombre : 'Batman', // defino sus propiedades y valores
  edad: 34,
  ciudad : 'Gótica',
  compañero : 'Robin'
}

function verPersonaje(valor, accion) { // creo un afuncion que recibe dos parametros en este caso un objeto y un callback
  accion(); // llamo al callback
  console.log(`hola soy ${valor.compañero} el nuevo compañero de ${valor.nombre}`); // imrpimo por consola los nuevos valores del objeto que se modificaron con el callback
}

verPersonaje(personaje,()=>{ personaje.compañero = 'WonderWoman'}); // llamo a la funcion verPersonaje y le paso un objeto y una funcion de flecha que modifica la propiedad compañero del objeto personaje
// Fin del ejemplo

// Inicio del ejemplo

function resolverPromesa(pares,impares) { // creo una funcion que recibe dos parametros en este caso dos arreglos
  return new Promise((resolve, reject)=>{ // creo una promesa y le paso sus atajos como parametros
    if (pares.length===0 || impares.length===0) { // verifico que cualquiera de los dos arrays contenga datos
        reject("Alguno de los arreglos está vacío"); // en caso de que la promesa no se pueda resolver creo con el atajo reject y ,anualmente el fracaso de la promesa 
    }else{
        setTimeout ( ()=>{ // creo un temporizador que ejecutará las sentencias contenidas en el en un intervalo de tiempo
          resolve(pares.forEach(element => { // creo un ciclo para recorrer el array pares 
            var nuevoArray = impares.push(element); // mediante el metodo push le paso los valores del array pares al array impares
            console.log("Dato: "+nuevoArray); // imprimo por consola el nuevo array
        }));
        },3000); // defino el temporizador de la funcion setTimeout en 3 milesimas de suegundos
    }
});
}
async function rPromesa (resolver){ // creo una funcion asincrona y recibo el callback
  const resultado = await resolver([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]); // creo una constante que almacene el llamado al callback y con await pauso la funcion async hasta que la funcion termine sus proceso
  return resultado; // retorno el resultado
}

rPromesa(resolverPromesa).catch(error =>{console.log(error)}); // llamo la funcion rPromesa y con el metodo catch capturo el error en caso de que la la promesa no se pueda cumplir ademas le paso una funcion como parametro callback
// Fin del ejemplo

//Inicio del ejemplo
function calculoA(a) { // creo una funcion que resive un parametro 
  var r = Math.floor(Math.random() * a); // creo una variable que almacene el resultado de multiplicar un nuermo random con el parametro a y lo redondeo con el metodo floor
  return r; // retorno el resultado
}
function calculoB(b) { // creo una funcion y le paso un parametro 
  var r = Math.floor(Math.random() * b); // creo una variable que almacene el resultado de multiplicar un nuermo random con el parametro a y lo redondeo con el metodo floor
  return r; // retorno el resultado
}
async function raizCuadrada(calculo1,calculo2) { // creo una funcion asincrona recibo dos callbacks como pparametros 
  console.log("Calculando los valores de A y B"); // imprimo por consola un mensaje
  const num1 = await calculo1(20); // creo dos constantes que contienen el llamado a los callbacks y con await pauso la ejecucion de la funcion async hasta que se complete la ejecucucion de estas funciones 
  const num2 = await calculo2(32);
  var resultFinal = Math.sqrt(num1 * num2); // creo una variable y almaceno en ella la raiz cuadrada de los valores retornados por la variable num1 y num2
  console.log("El valor final es: "+resultFinal); // imrpimo por consola el resultado junto con un mensaje
}
raizCuadrada(calculoA,calculoB); // llamo la funcion asincrona raizCuadrada y le paso como parametros dos funciones callbacks
// Fin del ejemplo

//Inicio del ejemplo
const verEstadoServidor = (url,fn) => { // creo una funcion que recibe dos parametros una url y un callback
  return new Promise((resolve, reject) => {  // retorno el resultado de la promesa 
    fetch(url) // mediante la funcion fetch para obtener el recurso pasado como parametro en este caso una url a la que se le realizara la evalacion siguiente
      .then(response => resolve(`Estado del Servidor: ${response.status === 200 ? "Url Localizada =)" : "No se pudo"}`)) // con el metodo then accedemos al resultado en caso de que la promesa se pueda resolver y con el operador ternario comparamos el estado de la conexion, si esta es buena o se establece imrpime un mensaje por consola, caso contarior imprmira un mensaje de error
      .catch(() => reject( fn()) ); // con el metod catch capturamos en error en caso de que la promesa no se pueda resolver e imprimimos por consola el mensaje contenido en el callback 
  });
}

verEstadoServidor('https://antonioweb.dev/articulo/funcion-callback-javascript-guia-completa',()=>{ console.log("Error")}) // llamamos a la funcion verEstadoServidor y le paso como argumentos una url y una funcion de flecha que devuelve un mensaje por consola
  .then(result => console.log(result)) // capturamos el mensaje por consola en caso de que la promesa se ejecute y se resuleva
  .catch(e => console.log(e)); // capturamos el mensaje por consola en caso de que no se pueda resolver la promesa
// Fin del ejemplo

//Inicio del ejemplo

function obtenerDia(){ // creo una funcion 
  var fecha= new Date(); //creo un nuevo contructor date para trabajar con fechas y horas y generarlas y la guardo dentro de la variable fecha
  var día = fecha.getDay(); // creo una nueva variable y le asigno la funcion fecha con el metodo getDay para obtener el numero del dia de la semana 
  return día; // devuelvo el dia consultado
}
function diaSemana(día) { // creo una nueva funion diaSemana y le paso un parametro en este caso el resultado de la funcion callback
  return function () { // retorna una funcion anonima secundaria
      switch (día) { // con la estructura switch evaluo la variable y la compara con los siguientes casos 
          case 0: // en caso de que dia sea igual a 0 hará lo siguiente
              console.log("Es domingo"); // imprimirá un mensaje en pantalla que dice el dia de la semana
          break; // en caso de no cumplir con el caso anterior pasa al siguiente
          case 1:// en caso de que dia sea igual a 1 hará lo siguiente
              console.log("Es Lunes");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;// en caso de no cumplir con el caso anterior pasa al siguiente
          case 2:// en caso de que dia sea igual a 2 hará lo siguiente
              console.log("Es Martes");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;// en caso de no cumplir con el caso anterior pasa al siguiente

          case 3:// en caso de que dia sea igual a 3 hará lo siguiente
              console.log("Es Miercoles");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;// en caso de no cumplir con el caso anterior pasa al siguiente
          case 4:// en caso de que dia sea igual a 4 hará lo siguiente
              console.log("Es Jueves");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;// en caso de no cumplir con el caso anterior pasa al siguiente
          case 5:// en caso de que dia sea igual a 5 hará lo siguiente
              console.log("Es Viernes");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;// en caso de no cumplir con el caso anterior pasa al siguiente
          case 6:// en caso de que dia sea igual a 6 hará lo siguiente
              console.log("Es Sabado");// imprimirá un mensaje en pantalla que dice el dia de la semana
          break;  // en caso de no cumplir con el caso anterior pasa al siguiente      
          default:console.log("Dia no valido"); // imprimirá un mensaje en pantalla que dice el dia de la semana
              break; // fin de la ejecucion de la sentencia
      }// cierro mi switch
  }// cierro la funcion anonima secundari
}// cierro la funcion principal
async function verDia(dia,mostarDia){ // creo una funcion asincrona  y recibo dos callback como argumentos
  const día = await dia(); // creo dos constantes que contienen el llamado a los callbacks y con await pauso la ejecucion de la funcion async hasta que se complete la ejecucucion de estas funciones 
  const resultado = await mostarDia(día); // aqui aparte de lo anterior le paso como argumentoel resultado retornado por la funcion dia
  resultado(); // llamo la funcion resultado
}
verDia(obtenerDia,diaSemana); // llamo la funcion verDia y le paso dos funciones como argumentos

// Fin del ejemplo

//Inicio del ejemplo

  var palabras = { // creo un objeto
    saludar : 'mensaje 1: Hola', // defino una propiedad y un parametro
    metodo :  function () { // defino un parametro que recibe una funcion anonima como valor
      setTimeout (()=>{ // creo un temporizador que ejecutará lo siguiente en un tiempo determinado
        console.log(this.saludar+" :o"); // imprimirá este mensaje por consola
      },1000); // determino el tiempo de retraso con el que se ejecutara la funcion
    }
  }
var palabras2 = { // creo un objeto y defino una propiedad y valor
  saludar : 'Mensaje 2: ¡Hola qué Más!'
}
function nuevoSaludo() { // creo una funcion 
  palabras.metodo.apply(palabras2); // modifico la propiedad contenida en el objeto palabras mediante el objeto palabras2 usando el metodo apply
}
async function saludos(saludito){ // creo una funcion asíncrona que recibe un callback como parametro
  const primerSaludo = await palabras.metodo(); //  creo una constante y mediante la expresion await pauso la funcion asíncrona para que se ejecute primero la funcion  palabras.metodo
  const segundoSaludo = await saludito(); //  creo una constante y mediante la expresion await pauso la funcion asíncrona para que se ejecute primero la funcion  palabras.metodo
}
saludos(nuevoSaludo); // llamo la funcion saluddos y le paso como parametro una funcion
// fin del ejemplo
