
// Inicio de ejemplo
var array = [23,21,90,2,87,12]; // creo un arreglo con eneteros

const promesa = new Promise((resolve,reject)=>{ // creo una constante y le asigno una promesa junto con dos parámetros
    if (Number.isInteger(array[3])) { // creo una condicion que verifica que la posicion del array sea un entero
        resolve(`es un entero`); // en caso de que la condicion sea verdadera lanzará este mensaje
    } else { // accion por falso
        reject (new Error("no se pudo recorrer el arreglo")); // creo un nuevo error que será manejado con la variable reject
    }
});

promesa.then(res =>{ // retorno la promesa con then en caso de que la promesa no tenga errores
    console.log(res); // mensaje a imprimir por consola
});

promesa.catch(error =>{ // retorna una promesa en caso de que tenga errores
    console.log (error); // mensaje a imprimir en caso de error
});
 ///// Fin de ejemplo

 // Inicio del ejemplo

 var numero1 = 191.212; // declaro dos variables con numeros flotantes como valores
 var numero2 = 12.178;

 const operaciones = new Promise((resolve,reject)=>{ // creo la promesa mediante una constante
     var a = Math.floor(numero1); // mediante el metodo floor redondeo las variables anteriormente creadas para acercarlas al entero mas cercano
     var b= Math.floor(numero1);
    if (Number.isInteger(a) && Number.isInteger(b)) { // valido que las variables a y b sean enteros
        var resultado= Math.sqrt(a*b); // en caso de dser verdadero creo una variable y almaceno la raiz cuadrada de a multiplicada por b
        resolve(`el resultado es igual a: ${resultado}`); // imprimo un mensaje con el resultado de la raiz cuadrada anterior
    }else{ 
        reject(new Error(`no es posible resolver`)); // en caso de ser negativo instancio un error y le asigno un mensaje
    }
 });

 operaciones.then(res=>{console.log(`solucionado: ${res}`)}); // llamo la promesa a través del metodo then en caso de que se pueda resolver 
 operaciones.catch(error=>{console.log(`Error ${error}`)}); // en caso de que no se pueda resolver capturo el error con el metodo catch

 //// Fin del ejemplo

// Inicio del ejemplo

 const recetario = new Promise((resolve,reject)=>{ // creo una nueva promesa y la almaceno en una constante le paso dos parametros por defect y mediante una funcion de flecha valido lo siguiente
     var dia = 3; // creo una variable de tipo entero
        switch (dia) { // con la estuctura de control switch comprao la variable dia con los siguientes casos
            case 1: // en caso de que dia sea igual al entero 1 imprimira lo siguiente
                    resolve(`Pasta a la boloñesa`); // mensaje a imprimir con el atajo o variable resolve
                break; // rompo la sentencia en caso de no cumplirse la comparacion
            case 2: // en caso de que dia sea igual al entero 2 imprimira lo siguiente
                    resolve("Pollo Desgranado"); // mensaje a imprimir con el atajo o variable resolve
                break;// rompo la sentencia en caso de no cumplirse la comparacion
            case 3 :// en caso de que dia sea igual al entero 3 imprimira lo siguiente
                resolve("Hamburguesa con papas"); // mensaje a imprimir con el atajo o variable resolve
                break;// rompo la sentencia en caso de no cumplirse la comparacion
            default: // valor por defecto en caso de que no se cumplan las comparaciones anteriores
                reject(new Error("No se encontró la receta adecuada, te toca inventar")); // capturo el error con el atajo resolve
                break; // rompo la sentecia
        }
 });

 recetario.then(res =>{ // accedo a la promesa en caso de que se cumpla la condicion
     console.log(`Plato del dia : ${res}`); // imprimo el mesaje por conola junto con el menaje del atajo resolve
 });

 recetario.catch(error =>{ // capturo el error con el metodo catch
    console.log(error); // imprimo un mensaje de error
 });

 //// Fin del ejemplo

 // inicio del ejemplo
 const incrementoEntero= new Promise((resolve,reject)=>{ // creo la promesa y le paso sus respectivos parametros
     var entero = 5; // creo una variable que recibe como valor un entero
     if (entero>4) { // valido el entero anterior para que sea mayor que 4
        setTimeout(()=>{ // creo una funcion que retraza su ejecucion mediante setTimeout 
            entero = entero * 18; // le asigno a la variable entero la multiplicacion de si misma por 18
            resolve (`El resultado del entero es ${entero}`); // mensaje a imprimir mediante el metodo resolve
        }, 2000); // le doy 2 milisegundos de retraso a la ejecucion de la funcion
     } else {  
         reject("El entero no cumple las condiciones"); // mensaje de rechazo para imprimir mediante el atajo reject
     }
           
     });   

incrementoEntero.then(res =>{ // accedo a la promesa en caso de que se cumpla la condicion
    console.log(res);  // imprimo el mesaje por conola junto con el menaje del atajo resolve
}).catch(error=>{ // capturo el error con el metodo catch
    console.log(error); // imprimo un mensaje de error
});

// fin del ejemplo

// Inicio del ejemplo
var personajes = [ // creo un array con objetos como valores y a cada objeto le asigno sus propiedades y valores
    {
        nombre: 'Batman',
        edad : '34',
        identificador :  11342
    },

    {
        nombre : 'Jefe Maesstro',
        edad : "Desconocido",
        identificador : 117
    },

    {
        nombre : 'Conor McGregor',
        edad : 33,
        identificador : "Ufc-12412"
    }

];

const encontrarDato = function(id){ // creo una funcion y le paso un parametro
    return new Promise((resolve,reject)=>{ // retorno una promesa y le aigno sus respectivo parametros
        if (personajes.find(nombree => nombree.nombre === id )) { // condiciono el nombre del personaje para saber si el parametro id existe dentro del array de objetos como un valor
            resolve(`El personaje existe y es ${id}`); // en caso de que exista el atajo resolve captura el mensaje
        }else{
            reject(`El peronaje no existe`); // en caso de que no exista el atajo reject captura el error
        }
    });
} 

encontrarDato('Conor McGregor').then((res)=>{ // lamo la promesa y le paso una cadena como prametro pra gacer la comparacion anterior y con el metodo then capturo la promesa resuelta
    console.log(res); // mensaje que imprime por consola en caso de que se pueda resolver la promesa
}).catch((error)=>{ // capturo el rechazo de la promesa con el metodo catch
    console.log(error); // imprimo el mensaje de error en caso de que no se pueda resolver
});
/// Fin del ejemplo

// inicio del ejemplo

const ventana = function (imprimirVentana) { // creo una funcon ventana y le paso un parametro   
    return new Promise((resolve,reject)=>{ // creo mi promesa y le paso sus respectivo atajos como parametros
    if (imprimirVentana()) { // condiciono la funcion imprimirventana en caso de que sea verdadera o contenga codigo que se pueda ejecutar
        resolve(`El numero mas grande es ${imprimirVentana()}`); // creo manualmente una solucion de la promesa mediante el atajo resolve
    }else{
        reject("Error"); // creo manualmente el error de una promesa mediante el atajo reject
    }
});
}

function imprimirVentana() { // creoo la funcion imprimirventana
    return Math.max(20,100); // mediante la clase Math y el metodo max retorno el numero mas grande de los que estan en los parametros
    // console.log("Hola mundo");
}

ventana(()=>{return Math.max(10,10)}).then(res =>{ // lamo la promesa y le paso una cadena como prametro pra gacer la comparacion anterior y con el metodo then capturo la promesa resuelta
    console.log(res); // mensaje a imprimir en caso de que se resuleva la promesa
}).catch(error =>{ // capturo el rechazo de la promesa con el metodo catch
    console.log(error); // imprimo el mensaje de error en caso de que no se pueda resolver
});
//// Fin del ejemplo

//Inicio del ejemplo

function bExponentes(base,exponente) { // cro una funcion y le paso dos parametros en este caso dos enteros
    return new Promise((resolve,reject)=>{ // retorno una nueva promesa junto con sus atajos como parametros
        if (!Number.isInteger(base) || !Number.isInteger(exponente) ) { // condiciono el parametro base y exponente para asegurarse de que sean enteros
            reject("Hay un valor que no es un entero"); // si no son enteros se lanza el fracaso de la promesa
        } else {
            var entero = Math.pow(base,exponente)  // en caso de que sean enteros con ayuda de la clase math y el metodo pow elevo un numero al exponente
            resolve(`el rsultado del exponencial: ${entero}`); // en caso de que la promesa se pueda resolver imprimira este mensaje 
        }
       
    });
}
bExponentes(22,12).then(res =>{console.log(res)}) // lamo la promesa y le paso una cadena como prametro pra gacer la comparacion anterior y con el metodo then capturo la promesa resuelta y le paso a la funcion bExponentes dos enteros coomo parametros
.catch(error =>{console.log(`Se produjo un error ${error}`)});// capturo el rechazo de la promesa con el metodo catch en caso de que no se pueda resolver la promesa
// Fin del ejemplo

// inicio del ejemplo

    cambioValor = (num) => new Promise((resolve,reject)=>{ // creo una promesa y la ejecuto mediante una funcion de flechay le paso sus atajos como parametros
        if (num < 10) { // condiciono el parametro num para que sea mayor qeu 10
            reject("El numero es menor a 10"); // creo el error manualmente con el atajo reject en caso de que no se pueda solucionar la promesa
        } else {
            setTimeout(() => { // en caso de que se pueda resolver la promesa se ejecuta una funcion retarsada
                resolve(alert(`${num}`)); // con el atajo resolve imrpime la solucion de la promesa
            },1000); // se le asigna un tiempo de ejecucion de 1000 milesimas de segundos
        }
    });

cambioValor("El valor actual es: "+12).then(res => cambioValor(`El nuevo Valor es: ${10+20}`)) // en caso de que se pueda resolver la promesa el metodo then ejecutara el mensaje 
.catch(errr =>{console.log(errr)}); // en caso de que no se resuelva la promesa el metodo catch captura e imprime el error
/// Fin del ejemplo
 
// Inicio del ejemplo
var cadenas = ['Hola','Luis','Que tal']; // creo una rreglo con cadenas como valores

const arregloPromise = new Promise((resolve,reject)=>{ // creo la promesa y le paso sus respectivos atajos como parametros
    var tipo = typeof(cadenas);  // creo una funcion y mediante la funcion typeof detecto de que tipo es la naturaleza de esa variable en concreto
    if (tipo) { // condiciona la variable tipo, si es verdader la promesa se puede resolver
        resolve(cadenas.forEach(element => { // creo un ciclo para recorrer las posiciones del array cadenas
            console.log(`Dato: ${element}`); // imprimo un mensaje o respuesta por consola
        }));
    } else {
        reject("No son cadenas"); // en caso de que no se pueda resolver la promesa se imprime el error o fracaso de promesa
    }
    
});

arregloPromise.then(res => console.log(res)).catch(error => console.log(error)); // mediante el metodo the capturo la solucion de la promesa y con el catch el fracaso de la pormesa y en cualquiera de los casos imprimo por consola el resultado
/// Fin del ejemplo

// Inicio del ejemplo
var pares = [2,4,6,8,10,12,14]; // creo dos arreglos con enteros como valores 
var impares = [1,3,5,7,9,11,13];
const unirArrays= new Promise((resolve, reject)=>{ // creo una promesa y le paso sus atajos como parametros
    if (pares.length===0 || impares.length===0) { // verifico que cualquiera de los dos arrays contenga datos
        reject("Alguno de los arreglos está vacío"); // en caso de que la promesa no se pueda resolver creo con el atajo reject y ,anualmente el fracaso de la promesa 
    }else{
        resolve(pares.forEach(element => { // creo un ciclo para recorrer el array pares 
            var nuevoArray = impares.push(element); // mediante el metodo push le paso los valores del array pares al array impares
            console.log(`Dato: ${nuevoArray}`); // imprimo por consola el nuevo array
        }));
    }
});

unirArrays.then(res => console.log(res)).catch(error =>console.log(error)); // mediante el metodo the capturo la solucion de la promesa y con el catch el fracaso de la pormesa y en cualquiera de los casos imprimo por consola el resultado
/// Fin del ejemplo