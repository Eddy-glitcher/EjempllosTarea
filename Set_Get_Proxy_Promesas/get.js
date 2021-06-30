class motocicleta{ // creo una nueva clase motocicleta
    constructor(marca,color,cilindraje){ // ccreo el metodo constructor de la clase que recibe tres parametros
        this.marca=marca;  // igualo las variables recibidas por el constructor a una nueva variable
        this.color=color;
        this.cilindraje = cilindraje;

    }
    
    get(){ // creo el metodo get
        console.log(`Tengo una moto de color ${this.color} es de cilindraje ${this.cilindraje} y de la marca ${this.marca}`);
        // imprimo por consola un mensaje junto con las varaible de la clase
    }
    set(marca,color,cilindraje){ // creo el metodo set  que recibe tres parametros
        this.marca=marca  // igualo las variables del constructor a las variables recibidas por el metodo
        this.color=color
        this.cilindraje = cilindraje
    }
}

var miMoto = new motocicleta("Pulsar", "Negra", 200); // creo la clase motocicleta y le paso tres argumentos
var especificaciones = miMoto.get(); // llamo el metodo get de la clase para imprimir los resultados
console.log(especificaciones); // imprimo por consola la variable especificaciones que contiene el metodo get de la clase miMoto

miMoto.set("Suzuki", "Verde", 400); // llamo al metodo set de la clase y le paso tres parametros
var especificaciones2 = miMoto.get(); // llamo al metodo get de la clase para imprimir el respectivo mensaje
console.log(especificaciones2); // imprimo por consola el  nuevo resltado

// Fin del ejemplo

// Inicio del ejemplo
var myCar = { // creo un nuevo objeeto
    marca: 'Ford',  // defino sus porpiedades y valores
    modelo: 'Mustang',
    año: 1969,
    get mostar(){ // creo el metodo get y le doy un noombre
        return this.modelo; // retorno el la propiedad modelo de este objeto con ayuda de this
    }
};

console.log(myCar.mostar); // imrpimo por consola el metodo mostrar contednio en el objeto myCar

// Fin del ejemplo

// Inicio del ejemplo
  var objArray= { // creo un  nuevo objeto
      enteros : [12,56,23,25], // defino una propiedad y le asigno un array como parametro
      get valores(){ // creo el metodo get y le doy un nombre
        for (const i in objArray.enteros) { // creo un ciclo for in para recorrer la propiedad enteros de este objeto
                const element = this.enteros[i]; // creo una constante element que almacene el valor del array enteros en la posicion en la que valla el ciclo
                console.log(element); // imprimo por consola la variable que contine el dato
            }
        }
      }
console.log(objArray.valores); // imprimo por consola el objeto junto con el metodo get 

// Fin del ejemplo

// Incio del ejemplo
class rectangulo{ // intancio una nueva clase llamada rectangulo
    constructor(alto,ancho){ // creo el metodo contructor de la clase que recibe dos parametros
        this.alto=alto;  // igualo las variables recibidas por el constructor a una nueva variable
        this.ancho=ancho;
    }
    get resultado(){ //  creo un nuevo metodo get 
        return ()=>{ // retorno una funcion de flecha 
            console.log(`El perimetro del rectangulo es: ${this.alto * this.ancho}`); // imprimo por consola un mensaje junto con la multiplicacion de la variable alto y ancho del la clase
        }
    }
}
var perimetroRectangulo=new rectangulo(14,20); // Creo una variable y dentro de ella creo la clase rectangulo con ayuda de new
var resultado = perimetroRectangulo.resultado() //creo una variable que almacene el llamao ala clase junto con el metodo get  
console.log(resultado); // imprimo por consola el resultado de la clase dado por el metodo get

// Fin del ejemplo

// Inicio del ejemplo
class Usuario{ // declaro la clase Usuario
    constructor(userName,password){ // creo el metodo contructor de la clase que recibe dos parametros
        this.userName=userName; // igualo las variables recibidas por el constructor a una nueva variable
        this.password=password;
    }
    get validar(){   // creo el metodo get llamado validar
        if (isNaN(this.userName) && Number.isInteger(this.password)) { // condiciono que la varianle userName de la clase sea una cadenay que la variable password sea un entero
        switch (this.userName) { // en caso de que lo anterio sea verdadero, creo un switch que compara la variable userName 
            case 'luis': // en caso de que userName contenga el valor 'luis'
                console.log(`Bienvenido ${this.userName}`); // imprimira por conola un mensaje de bienvenida junto con el nombre en particular contenido en la variable userName de la clase
                break; // rompo la comparacion para que no se siga ejecutando
            case 'ricardo': // en caso de que userName contenga el valor 'ricardo'
                console.log(`Bienvenido ${this.userName}`); // imprimira por conola un mensaje de bienvenida junto con el nombre en particular contenido en la variable userName de la clase
                break;// rompo la comparacion para que no se siga ejecutando
            default: // en caso de que ninguno de los casos anteriores e cumpan se ejecutará lo siguiente por defecto
                console.log(`El usuario ${this.userName} no ha existe`); // imprimo por consola un mensaje junto con el valor de la variable userName de la clase
                break;// rompo la comparacion para que no se siga ejecutando
            }
        }else{ // en caso de que el condicional de falso como resultado ejecutará lo siguiente
            return () =>{ // retornará una funcion de flecha la cual impimirá por consola un mensaje
                console.log("No es posible ingresar alguno de los campos igresados es incorrecto");
            }
        }
    }
}
var InicioSesion = new Usuario('luis',12345); // creo la clase Usuario y le paso dos parametros 
console.log(InicioSesion.validar); // llamo el metodo validar de la clase

// Fin del ejemplo

// Inicio del ejemplo
var deportes= { // creo un nuevo objeto 
    deporte : { // defino una propiedad que contiene un objeto como valor
        contacto : 'Futbol', // asigno propiedades y valores al objeto
        precision : 'Tiro con Arco'
    }
};
class sport{ // declaro una clase llamada sport
    constructor(deportes){ // creo el metodo constructor el cual recibe un parametro de la clase
        this.deportes=deportes; // igualo las variables recibidas por el constructor a una nueva variable
    }
    get mostrar(){ // creo el metodo get y le asigno un nombre
        return ()=>{ // retorno una funcion de flecha
            console.log(`Mi deporte favorito es el ${this.deportes.deporte.contacto}`); 
        // imprimo por consola un mensaje junto con la variable de la clase recibida en el constructor, en donde accedo a la propiedad del objeto en el interior
        }
    }
} 
var nuevoDeporte = new sport(deportes); // creo la clase con ayuda de new y le paso un objeto como parametro
console.log(nuevoDeporte.mostrar()); // imprimo por consola el resultado del metodo en la clase nuevoDeporte
// Fin del ejemplo

// Nuevo ejemplo
var entero = 10; // creo una variable que contiene un entero como valor

class verMultiplicacion{ // declaro una clase 
    constructor(entero,multiplicador){ // creo el metodo constructor que recibe dos parametros
        this.entero=entero; // igualo las variables recibidas por el constructor a una nueva variable
        this.multiplicador=multiplicador;
    }
    get resultado(){ // creo el metodo get y lo llamo resultado
        console.log(`Valor Actual: ${this.entero}`); // imprimo por consola el valor contenido en la variable entero de la clase
       console.log(`El nuevo valor es: ${this.entero * this.multiplicador}`);
       // imprimo por consola el nuevo valor dado de la multiplicacion entre  la variable entero de la clase y el multiplicador de la clase
    }
}
var verMult = new verMultiplicacion(entero,5); // creo una variable que contiene la creacion de la clase verMultiplicacion y le paso dos parametros 
console.log(verMult.resultado); // imprimo el resultado contenido en el metodo resultado de la clase verMult


// Fin del ejemplo

// Incio de la clase 
var ingeniero = 'German'; // creo una variable ingeniero que contiene una cadena como valor
var arquitecto = 'Alan';  // creo una variable arquitecto que contiene una cadena como valor

class comparacionCadenas{ // declaro una nueva clase 
    constructor(ingeniero,arquitecto){ // creo el metodo contrsutor y recibo dos parametros
        this.ingeniero=ingeniero;  // igualo las variables recibidas por el constructor a una nueva variable
        this.arquitecto=arquitecto;
    }
    get comparar(){ // creo el metodo get llamado comparar 
        console.log(` EN MAYUSCULA: ${this.ingeniero.toUpperCase()}`); // imprimo por consola la variable de la clase en mayusculas con el metodo toUppperCase
        console.log(` en minuscula: ${this.arquitecto.toLowerCase()}`); // imprimo por consola la variable de la clase en mayusculas con el metodo toLowerCase
    }
}

var resultadoComparacion= new comparacionCadenas('German','ALAN'); // creo una variable que contiene la creacion de la clase comparacionCadenas y le paso dos parametros
console.log(resultadoComparacion.comparar); // imprimo por consola el resultado del metodo comparar de la clase 

// Fin del ejemplo

//Inicio del ejemplo
var teléfono = { // creo un objeto telefono
    marca : "Samsung", // defino sus propiedades y valores del objeto
    modelo : 'Galaxy Note 10',
    estado : 'Nuevo',
    mostrarMarca : function(){ // creo una propiedad y le asigno una funcion anonima como valor
        return this.marca; // retorno la propiedad marca de este objeto con this
    },
    get verDato(){ // creo el metodo get y lo llamo verDato
        return `La marca de mi teléfono es: ${this.mostrarMarca()}`; // retorno un mensaje junto con la propiedad del objeto verMarca 
    }
};

console.log(teléfono.verDato); // imprimo por conol el resultado de acceder al objeto telefono junto al metodo verDato
 // Fin del ejemplo

 var deObjArray ={ // creo un nuevo objeto
     cadena : "hola me llamo luis y quiero ser un programador senior", // defino una propiedad con su respectivo valor
     get splitt(){ // creo el metodo get y lo llamo resultado
        var resultado  = this.cadena.split(" "); // creo una variable que me almacena la propiedad cadena del objeto y con el metodo split separamos cada una de las palabras contenidas
        console.log(resultado); // imprimo por consola la variable resultado
     }
 };

 function imprimir(objeto) { // creo una funcion imprimir y le paso el objeto comp parametro 
 console.log(objeto); // imprimo por consola el metodo splitt del objeto 
 }
 imprimir(deObjArray.splitt); // llamo la funcion imprimir y le paso el objeto deObjArray con el metodo splitt 
 // Fin del Ejemplo