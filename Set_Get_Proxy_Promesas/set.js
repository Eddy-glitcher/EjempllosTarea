
// Inicio del ejemplo
class  operaciones{  // creo la clase operaciones
    constructor(numero1,numero2,operador){ // inicializo el metodo y recibo la variables con las que se va trabajar
        this.numero1=numero1;  // igualo las variables recibidas por el constructor a una nueva variable
        this.numero2=numero2;
        this.operador=operador;
    }
    get(){ // declaro el metodo get 
        switch (this.operador) { // creo una estructura de control switch y le paso la variable operador
            case '+': // en caso de que la variable operador almacene un signo de suma realizo lo siguiente
                var resultado = (this.numero1 + this.numero2); // inicializo una variable y le asigno la suma de las dos variables del constructor
                break; // termino la ejecucion del caso de comparacion
            case '-': // en caso de que la variable operador almacene un signo de resta realizo lo siguiente
                var resultado = (this.numero1 - this.numero2);// inicializo una variable y le asigno la resta de las dos variables del constructor
                break; // termino la ejecucion del caso de comparacion
            case '*':// en caso de que la variable operador almacene un signo de multiplicacion realizo lo siguiente
                    var resultado = (this.numero1 * this.numero2);// inicializo una variable y le asigno la multiplicacion de las dos variables del constructor
                    break;// termino la ejecucion del caso de comparacion
            case '/':// en caso de que la variable operador almacene un signo de division realizo lo siguiente
                        var resultado = (this.numero1 / this.numero2);// inicializo una variable y le asigno la division de las dos variables del constructor
                        break; // termino la ejecucion del caso de comparacion
            default: 
                console.log("Operador no valido"); // en caso de que el operador no se encuentre en ninguno de los casos imrpimirá por defecto este mensaje por consola
                break;
        }
        return `El resultado de la operacion es ${resultado}`; // retorno el resultado
    }
    set(operador){ // creo el metodo set y le paso unn argumento
        this.operador=operador; // llamo la variable operador existente en la clase y la igualo al valor pasado como paraametro en el set
    }
}

var operacionMatematica = new operaciones(12,5,'*'); // inicializo una viarble y creo la clase operaciones y le paso tres argumentos dos numericos y uno como cadena
var verResultado = operacionMatematica.get(); // inicializo una nueva variable y mediante la variable que almacena la clase junto con el metodo get para mostrar los datos
console.log(verResultado); // imrpimo por consola la variable verResultado que contiene la clase con el metodo get

operacionMatematica.set('+'); // llamo la clase y con el metodo set le paso un nuevo argumentos
var verResultado2 = operacionMatematica.get(); // hago la llamada a la clase junto con el metodo get
console.log(verResultado2); // imprimo por consola los resultados de la clase

// Fin del ejemplo

// Inicio del ejemplo 
class persona{ // inicializo la clase
    constructor(nombre,apellido='Gimenez'){   // creo el metodo que recibirá los parametros en la clase, en el parametro apellido en caso de que no reciba ningun vallor este tendra un valor por defecto 
        this.nombre=nombre; // igualo las variables recibidas por el constructor a una nueva variable
        this.apellido=apellido;
    }
    get(){ //creo el metodo get 
        return `Mi nombre es: ${this.nombre} y me apelldio ${this.apellido}`; // retorno un mensaje junto con el resultado de las variables
    }
    set(nNombre,nApellido){ // creo el metodo set que recibe dos parametros
        this.nombre = nNombre; // les doy un nuevo valor a las variables del metodo constructor igualandolas a las variables del metodo set que han sido pasadas como parametro
        this.apellido = nApellido;
    }

}
var resultadoPersona = new persona("Adriana",); // inicializo una variable y la igualo a la clase persona y le paso un argumento 
console.log(resultadoPersona.get()); // imprimo por consola el resultado de la clase en el metodo get

resultadoPersona.set('Pedro','Ramirez'); // llamo al metodo set mediante la clase y le paso dos argumeentos
var resltadoPersona2 = resultadoPersona.get(); // creo una variable y la igualo al metod get que me va traer los datos de la clase
console.log(resltadoPersona2); // imprimo por consola el resultado de la clase con la variable que la almacena

// Fin ejemplo

// Inicio del ejemplo
var intervalo = { // creo un nuevo objeto 
    valorMinimo: 3, // creo y asigno propiedades y valores
    valorMaximo: 7,
    get valoresContenidos() { // creo el metodo get como propiedad de objeto
      var contenidos = []; // dentro del metodo creo un array vacío
      for(var i=this.valorMinimo; i<=this.valorMaximo; i++) { // creo un ciclo que inicie el la propiedad de valorMinimo de este objeto y que valla hasta la propiedad valorMaximo de este objeto
        contenidos.push(i); // llamo al arreglo vacion y con el metodo push le ingreso valores nuevos al arreglo de acuerdo a la variable i del ciclo
      }
      return contenidos; // retorno el arreglo
    },
    set valoresContenidos(arrayValores) { // creo el metodo set y le doy un nombre, ademas recivo un parametro que en este caso es un arreglo
      arrayValores.sort(); // con el metodo .sort ordeno valores de array contenidos en el array que fue pasado como parametro anteriormente
      this.valorMinimo = arrayValores[0]; // igualo las propiedades del objeto a la primera posicion del arrayValores
      this.valorMaximo = arrayValores[arrayValores.length - 1];// igualo las propiedades del objeto a la ultima posicion del arrayValores
    }
  }

  var resultado3 = intervalo.valoresContenidos = [5, 6, 2, 9, 3]; // creo una variable y la igualo al objeto junto con el nombre del metodo set y le paso un array como parametro
  console.log(resultado3); // imprimo por consola el arreglo ordenado
// Fin del ejemplo

// Inicio del ejemplo
var aplanarArray = { // creo un nuevo objeto
    array : [[2,56,9],[123,0,22,11],[221,300]], // creo una propiedad y le asigno como valor un array que contiene otros array adentro 
    get(){ // creo el metodo get para hacer la llamada al resultado
        var aplanar= this.array.reduce((a,b) => a.concat(b),[]); //  creo una variable y con this y el array del objeto junto con el metodo reduce aplanará el objeto dejando una sola estructura [2,56,9,123,0,22,11,221,300], ademas con el metodo concat creo un nuevo array apartir del anterio que ya fué ordenado
        console.log("El array aplanado:",aplanar) // imrpimo por consola el array aplanado
    },
    set(arrayValues){ // creo el metodo set y le paso un parametro que contien un array con multiplis arrays adentro
        this.array = arrayValues; // igualo la propiedad array del objeto y la igualo al parametro que resive el metodo set
    }
};

var aplanarArray1 = aplanarArray.get(); // creo una variable y la igualo al objeto con el metodo get para hacer el llamado al resultado

var aplanarArray2 = aplanarArray.set([[2,1,78],[3,45,12],[22,4,18]]); // llamo al objeto y con el metodo set le paso un nuevo argumento en este caso un arreglo 
var aplanarArray1 = aplanarArray.get(); // llamo al objeto y al metodo get para imprimir el nuevo arreglo ordenado

// Fin del ejemplo

// Inicio del ejemplo
var contarCaracteres = { // creo un nuevo objeto
    palabra : "abracadabra", // le asigno porpiedades y valores
    letra : 'a',
    get(){ // creo el metodo get 
        	    var contador=0; // creo una variable de tipo entero inicializada en 0
				for (var i=0; i<=this.palabra.length; i++) { // creo un ciclo que va iterar sobre el valor de la proopiedad palabra
					var caracter = this.palabra.charAt(i); // Creo una variable y la igualo a la propiedad palabra y con el metodo charAt que devuelve un string recorro la cadena caracter por caracter
					if (caracter==this.letra) { // creo un condicional que compare la variable caracter para saber si el caracter en el que va el ciclo es igual a la letra contenida en la propiedad letra
					 contador= contador + 1; // en caso de que el caracter en el que va el ciclo sea igual al caracter de la propiedad letra, la variable incrementador se incrementará una vez
					}
				}
				console.log("En total hay: ",contador+ " "+ this.letra); // imprimo por consola el resultado final que indica cuantas veces existe la letra dentro de la cadena
    },
    set(string,letra){ // creo el metodo set y le paso dos parametros
        this.palabra=string; // igualo las propiedades del objeto a los parametros recibido por el metodo set
        this.letra=letra;
    }
}

var verCaracteres = contarCaracteres.get(); // creo una variable que almacene el llamado al metodo Get del objeto

var verCaracteres2 = contarCaracteres.set('esternocleidomastoideo','e'); // creo una variable que contenga el objeto con el metodo set y le paso dos parámetros
verCaracteres = contarCaracteres.get(); // realizo el llamado al metodo get del objeto en cuestion

/// Fin del ejemplo

//Inicio del ejemplo
class revertirArray{ // instancio una nueva clase  
    constructor(array1,array2){ // creo el metodo contructor que resiva los parametros de la clase
        this.array1=array1; // igualo las variables recibidas por el constructor a una nueva variable
        this.array2=array2;
    }
    get(){ // creo el metodo get
            for (var i = 0; i = this.array1.length; i++) { // creo un ciclo que inicie en 0  e itere sobre el tamaño de un arreglo 
                    let a=this.array1.shift(); // creo una variable y la igualo a la variable de esta clase y con el metodo shift elimino la posicion 0 del arreglo 
                    this.array2.unshift(a); // con el metodo unshift agregamos  el elemento contenido en la variable a al array2 del la clase
            }
            console.log("Array revertido: ",this.array2); // imprimo por consola el nuevo array
        }
    set(array,array2){ // creo el metodo set y le paso dos parametros en este caso un arreglo con Letras y un arreglo vacío
        this.array1=array;  // igualo las variables recibidas por el constructor a una nueva variable
        this.array2=array2;
    }
}
revertirArray = new revertirArray([1,2,3,4,5,6,7,8,9],[]); // creo la clase y le paso dos arreglos como parametros
console.log(revertirArray.get()); // llamo al metod get de la clase  e imprimo por consola el resultado

var revertirArray2 = revertirArray.set(['I','H','G','F','E','D','C','B','A'],[]); // llamo al metodo set de la clase revertirArray y le paso dos arreglos como parametros
console.log(revertirArray.get()); // imrpimo por consola el nuevo resultado del metodo get

// Fin del ejemplo

// Inicio del ejemplo
var imprimirFigura={ // creo un nuevo objeto
    estrucura : '+', // creo las propiedades  del objeto y asigno los valores 
    hasta : 4,
    get(){ // le asigno el metodo get como propiedad del objeto
        var a = this.estrucura; // creo una variable y la igualo a la propiedad estructura de este objeto
		for (let i=1; i <= this.hasta; i++) { // creo un ciclo for que inicia en 1 y llega hasta la propiedad hasta del objeto
			console.log(a); // Imprimo por cosnola el valor que tiene la variable a
			a +=a ; // creo un incrementador automatico de la variable a cada que el ciclo se repita
		}
    },
    set(estructura,hasta){ // // le asigno el metodo get como propiedad del objeto y le paso dos parametros
        this.estrucura=estructura; // igualo las variables recibidas por el constructor a una nueva variable
        this.hasta= hasta;
    }
}

var verFigura = imprimirFigura.get(); // Llamo al metodo get del objeto imprimirFigura

var verFigura2 = imprimirFigura.set('#',5);  // llamo al metodo set del objeto en cuestion y le paso dos argumentos
var verFigura = imprimirFigura.get(); // Llamo al metodo get del objeto imprimirFigura
// Fin del ejemplo

// Inicio del ejemplo
class automovil{ // instancio una nueva clase automivil
    constructor(motor){ // creo el metodo constructor y recibo un parametro
        this.motor=motor;  // igualo las variables recibidas por el constructor a una nueva variable
    }
    get(){ // creo el metodo get en la clase
        if (this.motor == undefined) { // condiciono la variable motor de la clase y la comparo para saber si su valor es undefined
            console.log("Comprate un motor =("); // en caso de que lo sea imprimirá este valor por consola
        }else{
            console.log("Tu coche puede andar perfectamente es un: "+this.motor); // en caso de que la variable motor de la clase tenga un valor diferente a undefined imprimirá este mensaje por consola 
        }
    }
    set(motor){ // creo el metodo set y recibo un parametro
        this.motor=motor; // igualo las variables recibidas por el constructor a una nueva variable
    }
}

var auto = new automovil('Bajaj-123'); // creo la clase automovil y le paso dos parametros addemas la igualo a la variable auto
console.log(auto.get()); // imprimo por consola el metodo get de la clase

var auto2 = auto.set(); // llamo el metodo de la clase auto
console.log(auto.get()); // imprimo por consola el metodo get de la clase para ver los resultados
// Fin del ejemplo

// Inicio del ejemplo
var cambiarFuncion = { // creo un objeto 
    retornaMensaje : ()=>{return "Hola soy una funcion dentro de un parametro de objeto ;)"}, // le defino una propiedad y le paso una funcion de flecha como valor la cual retorna un mensaje
    get(){ // creo el metodo get como parametro del objeto
        console.log(this.retornaMensaje()); // imprimo por consola la propiedad retornarMensaje del objeto
    },
    set(nuevaFuncion){ // crreo el metodo set y recibo un parametro que posteriormente modificará el valor de la propiedad retornarMensaje 
        this.retornaMensaje=nuevaFuncion; // Le asigno a la propiedad retornarMensaje el nuevo valor contenido en el parametro del metodo 
    }
}

var mostarResultadoo = cambiarFuncion.get(); // hago un llamado al metodo get del objeto cambiarFuncion
console.log(mostarResultadoo); // imprimo por consola el resultado del metodo get del objeto cambiarFuncion

var mostarResultadoo2 = cambiarFuncion.set(()=>{ // creo una funcion y la igualo al objeto  con el metodo set que tiene como parametro una funcion que retorna un mensaje
    return "Hola soy yo otra vez pero desde otro lugar :D "; // retorno del mensaje
});
cambiarFuncion.get(); // imprimo el nuevo resultado del metodo get en el objeto
// Fin del ejemplo

// Inicil del ejemplo
let gato = { // creo un objeto 
    nombre: "Oreo", // le asigno sus respectivas propiedades y valores
    color: "Negro",
    macho: true,
    edad: 3
  };

class recorreObjetos{ // inicializo una clase 
    constructor(objeto){ // creo el metodo constructor que recibe un parametro
        this.objeto=objeto; // igualo las variables recibidas por el constructor a una nueva variable
    }
    get(){ // creo el metodo get para imprimir o hacer el llamado a su contenido
        for (let dato in this.objeto){ // creo un ciclo for in para recorrer un objeto en sus valores de propiedades
            console.log("Dato: "+this.objeto[dato]); // imprimo por consola los valores de las propiedades del objeto 
          }
    }
    set(object){ // creo el metodo set que recibe un parametro
        this.objeto=object;// igualo la variable objeto de la clase a la variable object recibida por el metodo
    }
}

var llamarAnimal = new recorreObjetos({nombre : 'July',color:'Café',macho : false}); // creo la nueva clase y le paso como argumento un objeto
console.log(llamarAnimal.get()); // imprimo por consola el resultado del metodo get en la clase

var llamarAnimal2= llamarAnimal.set(gato); // realizo el llamado al metodo set de la clase y le paso un objeto como argumento
console.log(llamarAnimal.get()); // imprimo por consola el metodo get de la clase con sus nuevos valores

