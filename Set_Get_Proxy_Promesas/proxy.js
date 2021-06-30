//Inicio del ejemplo
var mascota = { // Creo un objeto mascota 
    nombre : 'Oreo',  // defino sus propiedades y valores
    edad : 4,
    tipo : 'Gato',
    raza : 'Persa',
    dueño : 'luis'
};  

var nuevaMascota = {  // creo un nuevo objeto 
    set(target,property,valor){ // le asigno el metodo get y resivo tres parametros: el objeto, propiedad y el valor del objeto que es mandado por el proxi
       target[property]=valor // igualo el objeto recibido a la propiedad y valor corrspondiente en el momento de ser recibido 
    } 
};

var proxyMascota = new Proxy(mascota,nuevaMascota); // creo mi proxy con new y le paso como argumentos el objeto a comparar y el objeto que contiene el metodo get
proxyMascota.nombre = 'Tobby';  // declaro nuevas propiedades y valores al nuevo objeto
proxyMascota.edad = 2;
proxyMascota.tipo = 'perro',
proxyMascota.raza = 'Criollo',
proxyMascota.dueño = 'Ana'

console.log(proxyMascota); // imprimo por consola los nevos valores del objeto proxyMascot

// fin del ejemplo

// Inicio del ejemplo
var superHeroe = { // creo un nuevo objeto
    nombre : 'Batman',  // le asigno propiedades y valores al objeto
    edad : 34,
    localizacion: 'Ciudad Gótica'
};

const heroe = new Proxy(superHeroe,{ // creo un nevo proxy y le paso el objeto superHero como primer argumento y en su contenido el metodo Get
    get(target,property){ // le paso dos argumentos como parametros que en este caso son el objeto y su valor en la propiedad
        return target[property]; // retorno el valor del objeto en su respectiva propiedad
    }
})
console.log(heroe.nombre); // llamo al Proxy pidiendole la propiedad nombre

// fin del ejemplo

// Inicio del ejemplo
var mascota = { // Creo un objeto mascota 
    nombre : 'Oreo',  // defino sus propiedades y valores
    edad : 4,
    tipo : 'Gato',
    raza : 'Persa',
    dueño : 'luis'
};  

var nuevaMascota = {  // creo un nuevo objeto 
    set(target,property,valor){ // le asigno el metodo get y resivo tres parametros: el objeto, propiedad y el valor del objeto que es mandado por el proxi
       target[property]=valor // igualo el objeto recibido a la propiedad y valor corrspondiente en el momento de ser recibido 
    } 
};

var proxyMascota = new Proxy(mascota,nuevaMascota); // creo mi proxy con new y le paso como argumentos el objeto a comparar y el objeto que contiene el metodo get
proxyMascota.nombre = 'Tobby';  // declaro nuevas propiedades y valores al nuevo objeto
 
////// Fin Del Ejemplo

// Inicio del ejemplo
var oficios ={ // creo un objeto
    carpinteria : 'Trabajas con madera', // defino sus propiedades y valores en este caso cadenas
    programador : 'Amante a los nuevos conocimientos',
    medico : 'Ayudas a los enfermos',
    profesor : 'Impartes conocimiento'
};

const nuevoOficio = new Proxy (oficios,{ // creo mi proxy y le paso el objeto oficios como argumento y ell metodo get
    get(target,prototype){ // creo el metodo get y le paso dos argumentos, el objeto y el valor del la propiedad
        if (prototype in target) { // creo un condicional que evalua si la propiedad existe dentro del objeto
            return ` Eres un ${prototype} y ${target[prototype]}`; // si existe imprime un mensaje con la propiedad y el valor de esa propiedad en cuestion
        } else { 
            console.log(`El oficio ${prototype} no existe`); // en caso de que la propiedad no exista imprpimirá este mensaje
        }
    }
});
console.log(nuevoOficio.medico); // imprimo por consola mi proxy junto con su propiedad

// Fin del ejemplo

// Inicio del ejemplo
const cliente = { // Creo un objeto y le declaro sus propiedades y valores en este caso uso una cadena y un entero
    nombre : 'cristina',
    edad : 19
};

const verificarEdad= new Proxy(cliente,{ //Creo un proxy que recibe el opbjeto cliente como argumento y ademas el metodo get
    get(target,property){ // creo el metodo get que recibe dos argumentos target recibe el objeto cliente y property sus propiedades
        if (Number.isInteger(target[property])){ // valido si la propiedad del objeto recibida es un entero 
            console.log("Es entero perfecto!"); // en caso de ser entero umprimo este mensaje por consola
        }else{ 
            console.log("Error Es una Cadena"); // en caso de ser una cadena imprime el siguiete mensaje por consola
        }
    }
});

console.log(verificarEdad.edad); // llamo al proxy y le paso una propiedad a comparar

// Fin del ejemplo

// Inicio del ejemplo
var personaje = {
    nombre :'Richar Stallman',
    edad : 68,
    oficio : 'Programador',
    logro : 'Fundador del movimiento del software libre'  
};

var validando = {
    set : function(objeto,propiedad,valor){
        if (propiedad === 'oficio') {
            if (valor === 'Programador') {
                console.log('Es programador')
            }else{
                console.log(`Eres ${valor}`)
            }
        }else{
            objeto[propiedad]=valor
            return true;
        }
    }
};

const resultadoValidacion= new Proxy({},validando);
resultadoValidacion.nombre = 'Eric Raymond';
resultadoValidacion.oficio = 'Historiador cultura hacker';

// Fin del ejemplo

//Inicio del ejemplo
var empleado = { // creo un objeto 
    nombre : 'Armando', // defino sus propiedades y valores
    apellido : 'Bustamante',
    cargo : 'Supervisor',
    edad : 21
};

var handler = { // creo un objeto, defino una propiedad get y le asigno una funcion como valor
    get: function(empleado,nombre) { // le paso dos parametros ala funcion anonima creada
      return nombre in empleado ? empleado[nombre] : 'No existe esta propiedad ' + nombre; 
      // retorno la validacion de que en caso de que la propiedad a la que estoy accediendo no exista me arroje un error y en caso de que exista solo imprima el valor de esa propiedad  
    }
};

var proxy = new Proxy(empleado,handler); // creo el proxy y le paso el objeto empleado y el objeto handler que contiene el comparador
console.log(proxy.nombre); // imprimo el valor de la propiedad nombre 
console.log(proxy.edad); // imprimo el valor de la propiedad nombre 

// Fin del ejemplo

// Inicio del ejemplo

var obj = {a: 1, b: 2}; // creo un nuevo objeto y defino sus propiedades y valores
 
var obj2 = new Proxy( // creo el proxy
    obj, // le paso el objeto obj como propiedad
    {
        deleteProperty: function(target, property) { // creo una funcion que recibe dos prametros
            console.log('deteleProperty:', property); // imprimo por consola la propiedad eliminda en caso de que se detecte
            return Reflect.deleteProperty(target, property); // retorno la propiedad que ha sido eliminada con el metodo deleteProperty pasandole dos objetos como parametros 
        }
    }
);
 
// Borrado de una propiedad del objeto original
delete obj.a;
 
// Borrado de una propiedad del objeto supervisado
delete obj2.a;         // deteleProperty: a
 
// Borrado de una propiedad no existente
delete obj2.no_exist;   // deteleProperty: no_exist
// Fin del ejemplo

// Inicio del ejemplo

var superHeroee = {}; //  creo un objeto vacío

var superhero = new Proxy(superHeroee, { // creo una variable y le doy por valor la cracion del proxy que resive el objeto superHeroee como propiedad
   get: function(propiedad, valor) { // creo una propiedad get y le asigno una funcion como valor que tiene dos propiedades para tabajar el objeto por defecto
       console.log('ejecutado "get" para propiedad: ', valor); // imprimo por consola el mensaje junto con el valor de la propiedad del objeto
       return propiedad[valor]; // retorno el valor de la propiedad
   }
});

superHeroee.poder = 'Rayos X'; // defino una nueva propiedad y le asigno un valor en el objeto superHeroee
console.log(superHeroee.poder); // imprimo la propiedad anteriormente creada

// Fin del ejemplo

// Inicio del ejemplo

var validadorNacimiento = { // creo un objeto
    set: function(obj, prop, valor) { // le defino una funcion como valor a la propiedad set
      if (prop === 'Año') { // condiciono que prop en el objeto sea igaul en valor y tipo a la cadena Año
        if (!Number.isInteger(valor)) { // si lo anterior es verdadero, ahora  condiciono que el valor del la propiedad en el objeto sea un entero
          console.log('no es un número entero'); // Imprimo el error por consola
        }
  
        if (valor > 3000) { // si el valor de la propiedad es mayor a 3000 hará lo siguiente
          console.log('tu Año de nacimiento no es válido =('); // imprimo el error por cosnola
        }
      }
      obj[prop] = valor;  // operación original para guardar el valor en la propiedad
    }
  };
  
  var persona = new Proxy({}, validadorNacimiento); // creo el proxy y le paso un objeto vacío y ell objeto que contiene el metodo comparativo
  
  persona.Año = 1986; // llamo al objeto y creo la propiedad Año y le asigno un entero como valor 
  console.log(persona.Año); // Imprimo el valor de la propiedad Año en el objeto persona
//   persona.Año = 'noventas'; // lanza el error
  persona.Año = 3030;       // lanza el error
  // Fin del ejemplo