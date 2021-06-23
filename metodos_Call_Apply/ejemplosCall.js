
this.iva = "0.9%"; // llamo la variable iva y la igualo a una cadena
function producto(producto,costo){// creo una funcion producto con dos parametros recibidos
    console.log(`El producto ${this.producto} tiene un valor de ${this.costo} con el iva de ${this.iva}`); // imrpimo un mensaje junto con algunas propiedades de objetos que se reciben como parametros
}// cierro mi funcion

var art = {// creo un objeto art y defino algunas propiedades y valores
    producto : "carne",
    costo: "29.000",
    iva : "10%"
};
producto.call(art); //llamo la funcion producto y con el metodo call lñe paso el objeto art


var saludando = { // creo un objeto y defino algunas propiedades y  valores
    nombre : "Carlos",
    saludar: function() { // creo una funcion como valor y se la paso a una propiedad del objeto
        console.log(`Hola me llamo ${this.nombre}`); // imprimo por consola un mensaje junto con la propiedad nombre del objeto
    }// cierro mi funcion
}

var pers = { // creo un objeto y defino una propiedad y valor
    nombre : "Ricardo"
};
saludando.saludar.call(pers);// llamo el objeto saludando y accedo a la propiedad saludar y con call le paso el objeto pers 


let objetoUno = {// creo un objeto 
    listaUno : [],
    pushLista: function(...args) { // defino una funcion como valor de propiedad en objeto y recibo todos los parametros con el operador spread
        this.listaUno.push(...args); // accedo a la propiedad listaUno y le concateno el arreglo almacenado en listaDos
    }// cierro funcion
};
let objetoDos = { // creo un objeto y le asigno parametros y arreglos como valores
    listaUno : [1,2,3],
    listaDos : [4,5,6]
};
objetoUno.pushLista.call(objetoDos, objetoDos.listaDos);// llamo al objetoUno y la funcion pushLista y con call le paso el objeto ObjetosDos
console.log(objetoDos.listaUno); // imprimo por consola el arreglo concatenado

var calorias = { // creo un nuevo objeto
    datos: function () { // cfeo una funcion 
        console.log(`Has ingerido ${this.Bebida} la cual tiene ${this.calorias} calorias`); // imprimo por consola un mensaje junto con propiedades de objetos
    }// cierro funcion
};  

var consumidor = {// creo un objeto y le asigno tres ropiedades y valores
    nombre:"Diana",
    Bebida : "Poni Malta",
    calorias : 4000
};
calorias.datos.call(consumidor); // llamo al objeto calorias con la funcion datos y call como metodo para pasarle el objeto consumidor 

var obj = { // creo un nuevo objeto obj
    ciclo:function ciclo() { // creo una funcion ciclo como valor de propiedad en objeto
        this.arreglo.forEach(i => { // uso el ciclo for each para recorrer el arreglo y le añado una funcion de flecha
            console.log(i); // imprimo por consola el resultado del arreglo
        });// cierro mi funcion de flecha
    }
};

var arreglo2 = {// creo un nuevo objeto 
    arreglo : [90,80,60,40,20,10] // le asigno un arreglo como valor de propiedad
};
obj.ciclo.call(arreglo2);// llamo al objeto obj y a la funcion ciclo para que con el metodo call le pueda pasar el objeto

var validar={ // creo un nuevo objeto validar
    val: function() { // asigno una funcion como valor de propiedad en objeto 
        if (this.edad<18) { // valido que la propiedad edad tenga como valor un numero menor de 18
            console.log(`No puedes ingresar tienes ${this.edad} años, eres menor de edad`);// en caso de ser verdadero me imprime por onsola el mensaje junto con la edad
        }else{ // accion por falso
            console.log(`Bienvenid@ ${this.nombre}`);// imprime por consola este mensaje en caso de que la edad se a mayor de 18
        }// cierro mi funcion
    }
};

var persona={ // creo un nuevo objeto y defino dos propiedades y valores dentro de el
    nombre : "Paula",
    edad: 18
};

validar.val.call(persona); // llamo el objeto con la funcion como propiedad y con call le paso el objeto persona

var tienda = { // creo un nuevo objeto tienda
    seleccion : function () { // asigno una funcion como valor de propiedad en objeto
        this.valor = this.precio * this.cantidad; // le asigno a la variable valor el resultado de la multiplicacion de la propiedad precio y valor para obtener un nuevo resultado
    switch (this.nombre) { // inicio mi switch para comprar el resultado con los casos
        case 'Mango': // en caso de que this.nombre del objeto sea igual mango hara lo siguiente 
            console.log(`La cantidad de ${this.cantidad} de ${this.nombre} cuesta ${this.valor} `); // imprimirá por consola el mensaje junto con algunas propiedades del objeto fruta
            break; // fin del caso
            case 'Pera':// en caso de que this.nombre del objeto sea igual pera hara lo siguiente 
                console.log(` la cantidad de ${this.cantidad} de  ${this.nombre} cuesta ${this.valor} `);
                break;// fin de comparacion
        default: // en caso de no cumplir lo anterior sehará lo siqguiente
            console.log("No pusiste una fruta :("); // imprimirá por consola el mensaje
            break;// fin del default
    }// cierro mi switch
} // cierro mi funcion
};

var fruta = { // creo un nuevo objeto fruta y defino sus propiedades y valores
    nombre : 'Mango',
    precio : 1200,
    cantidad : 2,
};

var fruta2 = {// creo un nuevo objeto fruta2 y defino sus propiedades y valores
    nombre : 'Pera',
    precio : 3500,
    cantidad : 7,
};
tienda.seleccion.call(fruta);// llamo el objeto y la propiedad que contien la funcion y le paso el objeto fruta con call


var alerta = { // creo un nuevo objeto alerta
    alert : ()=>{this.metodo} // defino una propiedad que me ejecuta una funcion de flecha como valor que a su vez ejecuta una propiedad de objeto
};

var metodoo={ // creo el objeto metodoo
    metodo: alert("Hola Que más :)") // defino la propiedad metodo que contiene un alert con un mensaje
};

var arca = { // creo un objeto arca
    especies : function () { // creo una funcion como valor de parametro
    switch (this.animal) { // ceo un switch que me hace la comparacion del animal
        case 'Vaca': 
        case 'Jirafa':
        case 'Perro':
        case 'Cerdo':
        case 'Leon':
        case 'Elefante': // en caso de que el animal sea uno de los anteriores procede a lo siguiente
            console.log(`El/La ${this.animal} subirá al Arca de Noé.`); // imprime por consola el mensaje junto con el nombre del animal
            break; // fin del caso
        case 'Dinosaurio': // en caso de que el animal sea igual a Dinosuario realiza lo siguiente
        console.log(`El ${this.animal} no lo hará. Ya esta extinto =(`); // imprime por consola
        break; // Fin del caso
    }// cierro mi switch
    }// cierro mi funcion
};

var animales = { // creo el objeto animales
    animal: 'Vaca'
};

arca.especies.call(animales); // llamo al objeto y a la funcion especies junto con el metodo call le paso el objeto animales

var hipotenusa = { // creo un objeto hipotenusa
    triangulo: function () { // creo una funcion como valor de parametro en objeto
        this.ecuacion=Math.sqrt(this.cateto1 + this.cateto2); // le asigno a la propiedad ecuacion el resultado de la raiz cuadrada de la suma del cateto1 mas el cateto2 
        console.log(`La hipotenusa del triangulo es de ${this.ecuacion}`); // imprimo por consola un mensaje junto con la propiedad ecuacion 
    }// cierro mi funcion
};

var triangulo ={// creo el objeto triangulo y defino dos propiedades y valores dentro de el
    cateto1: 7,
    cateto2: 9,
};

hipotenusa.triangulo.call(triangulo); // llamo el objeto hipotenusa y la funcion triangulo para paserle el objeto triangulo con el metodo call