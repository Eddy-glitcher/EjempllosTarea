
function nombre(Nombre) { // creo una nueva funcion y le doy a resivir un parametro
    return function () { // retorno una funcion anonima
        if (Nombre != "Luis" ) { // condicional para evalua el contenido del parametro, en caso de ser diferente de la cadena Luis continuara con la accion por if
            console.log("No eres Luis =("); //  de ser así se imprimirá el mensaje por consola
        }else{ // en caso de que el contenido del parametro sea igual a la cadena Luis continuara por la accion por else
            console.log(`Bienvenido ${Nombre}`); // imprimira por consola un mensaje junto con el contenido del parametro
        } // cierro mi condicional
    }// cierro mi funcion anonima
}// cierro mi funcion principal
var definirNombre = nombre("Luis");// creo una variable que almacene un llamado a la funcion nombre que contiene una cadena como valor en parametro
console.log(definirNombre()); // imprimo por consola la funcion almacenada dentro de la variable definirNombre

function parImpar(numero) { // creo una nueva funcion parImpar que resive un parametro
    return function (){ // retorno una funcion anonima
        if (numero%2==0 ) { // condicional que evalua el parametro numero y en caso de que el resto de dividirlo por 2 sea 0 este continuará por el if
            console.log("El numero es par"); // imprimirá por consola un mensaje
        }else{ // en caso de que el resto de dividir el valor del prametro por 2 no sea 0 el condicional tomará este camino
            console.log("El numero no es par"); // imprimirá un mensaje por consola 
        }// cierro mi condicional 
    } //cierro mi funcion anonima
}// cierro mi funcion principal
let numero = parImpar(30); // creo una variable y le asigno la funcion parImpar qe contiene un valor como parametro
console.log(numero());// imprimo por consola la variable numero como funcion

function numeros() { // creo una nueva funcion llamada numeros
    var num= 120;  // creo una variable local y le asigno un entero como valor
    console.log(`Tienes: ${num} pesos`); // imprimo por consola un mensaje junto con la variable num anteriormente declarada
    return function () { // retorno una funcion anonima
        var num= 150; // creo una variable local y le asigno un entero como valor
        console.log(`Ahora tienes: ${num}`);// imprimo por consola un mensaje junto con la variable local num 
    } // cierro mi funcion anonima
}// cierro mi funcion principal

var valorFinal=numeros(); // creo una variable y le asigno la funcion numeros como valor
valorFinal(); // llamo mi funcion valorFinal

function iniciar() { // creo una nueva funcion primaria iniciar
    var nombre = "Bienvenido A Javascript =D";  // inicializo una nueva variable local y le asigno una cadena como valor
    function mostrarAsignatura() {  // creo una nueva funcion secundaria
      alert(nombre);  // creo una ventana emergente con la funcion alert que contiene un mensaje almacenado en la variable nombre
    } // cierro mi funcion secundari
    mostrarAsignatura(); // llamo mi funcion secundaria
  } // cierro mi funcion principal
  iniciar();  // llamo mi funcion principal

  function imprimir(nombre) { // creo una nueva funcion principal imprimir
      return function () { // retotno una funcion secundaria anonima
          console.log(nombre); // imrpimo por consola el parametro recibido por la funcion principal (nombre)
      } // cierro mi funcion secundari anonima
  }// cierro mi funcion principal
  var arregloo=imprimir(["Luis","German","John","Bryan"]); // inicializo una nueva variable con var y le aigno la funcion principal imprimir y le paso un arreglo como prametro
  console.log(arregloo()); // imprimo por consola la variabe como funcion

  function objetos10() { // creo una nueva funcion objetos10
  var obj={ // creo un objeto
        personaje:'batman', // defino la propiedad y valor del objeto
        edad:32, // defino la propiedad y valor del objeto
        trajes:[  //defino la propiedad y valor del objeto en este caso un arreglo
            "Dark","Light","GreenBlack" // valores del arreglo
        ], // cierro el arreglo
        localidad:"Ciudad Gótica" // defino la propiedad y valor del objeto
    }; // cierro mi objeto
      function imprimir() { // Creo una funcion secundaria imprimir
    console.log("El personaje es: "+obj.personaje+" y vive en: "+obj.localidad); //imprimo un mensaje por conola acompañado de algunas propiedades del objeto obj  
    }// cierro mi funcion secuundaria
      imprimir(); // llamo mi funcion secundaria imprimir
  } // cierro mi funcion principal
 objetos10();//llamo mi funcion principal

 function mostrarHora() { // creo una nueva funcion mostrarHora
     var hora= new Date(); // creo un nuevo contructor date para trabajar con fechas y horas y generarlas y la guardo dentro de la variable hora
     var horas = hora.getHours(); //  creo una nueva variable y adquiero la hora mediante la funcion hora y el metodo getHours para adquirir la hora actual
     var minutos = hora.getMinutes(); //creo una nueva variable y adquiero los minutps mediante la funcion hora y el metodo getMinutes para adquirir los mintuos actuales
    function mostrar(){ // creo una funcion secundaria mostrar
       if (horas > 11 && horas <18) { // condicional que evalua la variable hora para comprarla con la hora militar
           console.log(`son las ${horas} de la tarde con ${minutos} minutos`); // en caso de estra dentro del rango especificado en el condicional imprimirá este mensaje  junto con la hora actual
       }else if(horas > 18 && horas < 24){ // en caso de no cumplir con el anterior condicional se avaluara si cumple con el rango aquí especificado
            console.log(`son las ${horas} de la noche con ${minutos} minutos`); // en caso de estra dentro del rango especificado en el condicional imprimirá este mensaje  junto con la hora actual
       }else if(horas >=00 && horas < 12){ // en caso de no cumplir con el anterior condicional se avaluara si cumple con el rango aquí especificado
            console.log(`son las ${horas} de la mañana con ${minutos} minutos`); // en caso de estra dentro del rango especificado en el condicional imprimirá este mensaje  junto con la hora actual
       }// cierro mi condicional
   } // cierro mi funcion secundari
   mostrar(); // llamo mi funcion secundaria
 } // cierro mi funcion principal
mostrarHora();// llamo mi funcion principal


function diaSemana() { // creo una nueva funion diaSemana
    var fecha= new Date(); //creo un nuevo contructor date para trabajar con fechas y horas y generarlas y la guardo dentro de la variable fecha
    var día = fecha.getDay(); // creo una nueva variable y le asigno la funcion fecha con el metodo getDay para obtener el numero del dia de la semana 
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
var diaSemanal = diaSemana(); // declaro un variable y le asigno la funcion diaSemana
console.log(diaSemanal());// imprimo por consola la variable diaSemanal como funcion

function suma() { // cre una nueva funcion y le doy un nombre suma
    var arreglo=['12','32','10','22','89']; // creo una variable local con var y le asigno un arreglo
    return function(){ // retorno una variable anonima secundaria
        console.log(eval(arreglo[0])+eval(arreglo[3]));// imprimo por consola el resultado de la suma de las posiciones del arreglo y con el metodo eval calculo el valor de estas dos cadenas
    } // cierro mi funcon anonima secundaria
} // cierro mi funcion principal
var resultado=suma(); // creo una variable resultado y le asigno la funcion principal suma
console.log(resultado()); // imprimo por consola la variable resultado como funcion

function errores() { // creo una nueva funcion errores
    return function() { // creo una nueva funcion anonima secundaria
        try { // inicializo un manejador de errores para evaluar la siguiete expresion
            console.log(carrito);  // como carrito no es una variable que haya definido me dirije justo al error
        } catch (error) { // capturador de error
            console.warn("Error Variable no definida"); // imprime por consola un mensaje de advertencia con el mensaje 
        }// cierro mi manejador de errores
    }// cierro mi funcion anonima secundaria
} // cierro mi funcion principal errores

var error = errores(); // creo una nueva variable y le asigno la funcion principal errores como valor
console.log(error()); // imprimo la variable error como funcion

function tipoDato() { // creo una nueva funcion tipoDato 
    var bool = !false; // creo una nueva variable local bool con var y le asigno un booleano
    function tipo() { // creo una funcion secundario
        console.log(typeof(bool)); // imprimo por consola el tipo de dato de la variable bool con el metodo typeof
    }// cierro mi funcion secundaria
    tipo();// llamo mi funcion secunndaria
}// cierro mi funcion principal tipoDato
tipoDato(); // llamo mi funcion principal tipoDato

function cargando() { // creo una nueva funcion principal cargando
    (function () { // creo una funcion autoinvocada anonima
        window.confirm("Soy otro mesaje emergente =)"); // con ayuda del objeto global window y su metodo confirm creo una ventana emergente con un mensaje
        } //  cierro mi funcin secundaria anonima 
    )(); // cierro el iniciador de la funcion
} // cierro la funcion principal
cargando(); // llamo la funcion priincipal cargando

function IArray() { // creo una naueva funcion principal IArray
    var array = [1,2,3,4,5,6,7,8,9]; // creo una varaibale local array con var y le asigno un arreglo
    return function () { // retorno una funcion anonima 
        array.push(120,12,45); // con ayuda del metodo push agrego nuevos valores dentro del arreglo array
        console.log(array); // imprimo por consola el nuevo arreglo
    }// cierro la funcion secundaria anonima
}// cierro la funcion principal
var Iarraryy = IArray();// creo una variable y le asigno la funcion principal IArray
console.log(Iarraryy()); // imprimo por consola la variable Iarraryy como funcion

 function IArray2() { // creo una nueva funcion  Iarray2
    return function () { // retorno una funcion anonima
        var arreglo = [10,20,30,40,50]; // creo una variable arreglo y le asigno un arreglo como valor
        var imprimir = arreglo.map(arreglo=> arreglo + 2.2); // creo una nueva variable imprimir y le asigno el arreglo y el metodo map pra generar un nuevo arreglo en donde le sumo a cada valor de arreglo lo especificado en la funcion de flecha (2.2)
        console.log(imprimir); // imprimo por consola la variable imprimir
    } // cierro la funcion anonima
}// cierro la funcion principl Iarray2
var imprimir = IArray2(); // creo una variable imprimir y le asigno la funcion IArrray2 como valor
console.log(imprimir()); // imprimo por consola la variable imprimir como funcion

