
function llamado() { // creo una funcion 
   var entero = 90; // inicializo una variable local y le asigno un entero como valor
    console.log(entero); // imprimo por consola la variable local previamente declarada
} // Cierro mi funcion
llamado(); // Llamo mi funcion

function imprimirArray() { // Creo una funcion
    return function() { // Retorno una funcion anónima
        var array = [1,2,3,4,5,6]; // Declaro una variable local y le asigno un arreglo como valor
        console.log(array); // Imprimo por consola la variable que contiene el arreglo     
    } // cierro mi funcion anonima 
}; //Cierro mi funcion principal
var imprimir = imprimirArray(); // inicializo una variable y le asigno la funcion imprimirArray
console.log(imprimir()); // imprimo por consola la variable como funcion

function mensaje(){ // Creo una funcion
    var saludo = "Hola que tal"; // Inicializo una variable local con un string o cadena como valor
    alert(saludo);//Utilizo la funcion predefinida alert para mostrar en una ventana emergente el contenido de la variable saludo
} // Cierro mi funcion principal
mensaje(); // Realizo el llamado a mi funcion mensaje

function numeros() { // creo una nueva funcion
    return function(){ // retorno una funcion anónima
        const verdadero=true; // declaro una variable local con const que contenga un booleano true como valor
        console.log(verdadero); // Imprimo por consola la variable verdadero 
    }// cierro mi funcion anonima
} // cieroo mi funcion principal
var numeross = numeros(); // inicializo una nueva variable con var y le asigno como valor la funcion numeros
console.log(numeross()); // imprimo por consola la variable como funcion

(function auto(){ // creo una funcion  autoinvocada llamada auto
    var local= "Soy una variable local"; // Inicializo una variable local con una cadena como valor
    console.log( local); // imprimo por consola el contenido de la variable local
  })(); // cierro mi funcion autoinvocada

  function documento() {// creo una nueva funcion
      var local = 10; // inicializo una variable local con un entero como valor 
      if (local <100) { // creo un condicional que evalua si la variable local es menor a 100
          document.write("Es menor de 100"); // de ser verdadero lo anterio, con document.write escribo en el documento un mensaje
      } else { // en case de que la variable local sea mayor a 100 el condicional tomará este camino
          document.write("Es mayor que 100"); // imprimira en el documento un mensaje
      } // Cierro mi condicional
  } // cierro mi funcion
  documento(); // llamo mi funcion para ejecutar su contenido

  function objeto2() { // creo una nueva funcion y le doy un nombre
        var objectt= {nombre: 'luis', edad: 22, localidad: 'marmato'}; // creo una variable local y le asigno un objeto con dospropiedades y dos valores
        objectt.nombre= 'carlos'; // accedo a la propiedad nombre del objeto objectt y reasigno el valor de esta propiedad
        console.log(objectt); // imprimo el objeto por consola
  } // cierrro mi funcion
  objeto2();// realizo el llamado a mi funcion

  function ciclo(params) { // creo una funcion y le asigno un nombre
      var enteros = [1,2,3,4,5,6,7,8,9]; // inicializo una variable local que contiene un arreglo como valor 
    for (let i = 0; i < enteros.length; i++) { // creo un ciclo for prar recorrer el arreglo contenido en la variable enteros inciando en la posicion 0 hasta la longitud de mi arreglo y de forma ascendente
        var recorrido = enteros[i]; // creo otra variable local para asignarle el contenido del arreglo en la posicion de i
        console.log(recorrido);// imprimo por consola el resultado dado por la variable
    } // cierro mi ciclo
  } // cierro mi funcion
ciclo();// llamo mi funcion

function ingresar() { // creo una nueva funcion
    var nombre= prompt("Ingresa tu nombre para verlo en pantalla"); // creo una variable local y le asigno un prompt que me genera una ventana emergente que pide un dato y lo almacena en la variable local
    console.log(`Tu nombre es ${nombre}` );// imprimo el contenido de la variable local nombre
} // cieroo mi funcion
var ingresarr = ingresar();// creo una variable global que almacene la funcion ingresar
console.log(ingresarr); // imprimo por consola la variable que tiene por valor la funcion ingresar

function estructura() { // creo una funcion y le asigno un nombre
    var operador = '*'; // creo una variable local y le asigno una cadena en este caso un operador
    switch (operador) { // con la estructura switch evaluo la variable y la compara con los siguientes casos 
        case '+': // en caso de que operador sea igual al de la suma realiza lo siguiente
                console.log("Vas a Sumar"); // imprime por consola un mensaje
            break; // en caso de no ser el operador de la suma se salta este caso
            case '-':// en caso de que operador sea igual al de la resta realiza lo siguiente
                console.log("Vas a Restar"); // Imprime por consola un mensaje
            break;// en caso de no ser el operador de la resta se salta este caso
            case '*':// en caso de que operador sea igual al de la multiplicacion realiza lo siguiente
                console.log("Vas a Multiplicar");// imprime por consola un mensaje
            break;// en caso de no ser el operador de la multiplicacion rompe o se salta este caso
            case '/':// en caso de que operador sea igual al de la division realiza lo siguiente
                console.log("Vas a Dividir");// imprime por consola un mensaje
            break;// en caso de no ser el operador de la divicion se salta este caso
    
        default: // en caso de no cumplir con ninguno de los caso anteriormente vistos se dará paso a la condicion por defecto de la estructura
            console.log("No seleccionaste ninguna de las opciones =("); // imprime por consola un mensaje
            break; // termina la sentencia
    } // cierro mi switch
} // cierro mi funcion
estructura(); // llamo mi funcion estructura