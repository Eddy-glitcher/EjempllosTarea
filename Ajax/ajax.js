// Inicio del ejemplo
var abrirAlert = document.querySelector('.ventana'); // obtengo el objeto del documento con la clase ventana y lo guardo en una variable

abrirAlert.addEventListener('click',()=>{ // le añado un evento para que cuando se de click ejecute una funcion
    alert("Hola =)"); // la funcion ejecuta una ventana emergente con un alert
})
// fin del ejemplo

// Inicio del ejemplo
var evento = function() { // creo una variable y le asigno una funcion
    enfocar.innerHTML = "Subeme la Nota =)"; // llamo al nodo y con el metodo innerHTML reemplazo el texto anterior por este
}
var enfocar = document.querySelector('#enfocar'); // guardo en una variable el nodo con el id enfocar 
enfocar.addEventListener('click',evento); // le añado un evento en este caso click y hago un llamado a la funcion evento
// Fin del ejemplo

//Inicio del ejemplo

color = document.querySelector('#cambiarTexto'); // obtengo el nodo html mediante su ID

color.addEventListener('click',()=>{ // cuando el nodo resiva un click se ejecutará el escuchador que en este caso es una funcion de flecha
    var colorNuevo= document.querySelector('#cambiarColor'); // Obtengo el ID del nodo alque quiero cambiarle el color
    colorNuevo.className = 'btn-primary'; // le añado una nueva clase al nodo que cambia su color mediante bootstrap
});
// Fin del ejemplo

//Inicio del ejemplo

var fondo= document.querySelector("#verde"); // creo una variable y almaceno en ella el ID verde del cocumento html
var fondoB = document.querySelector("#fondo"); // creo una variable y almaceno en ella el ID fondo del cocumento html
fondo.addEventListener('click',function(){ // creo el evento de escucha para que cuando se le de click al nodo contenido el la variable fondo se ejecute la funcion de flecha
    if (fondo.checked) { // creo un condicional que verifique que el nodo fondo que es un input de tipo ckeckbox esté seleccionado
        fondoB.style.background = '#2cbb40'; // cambio las propiedades del fondo de pantalla por medio de su ID
        titulo.style.color= 'black'; // cambio el color del titulo por medio del id
    }
});
var fondo2= document.querySelector("#morado"); // creo una variable y almaceno en ella el ID morado del cocumento html
fondo2.addEventListener('click',function(){ // creo el evento de escucha para que cuando se le de click al nodo contenido el la variable fondo se ejecute la funcion de flecha
    if (fondo2.checked) { // creo un condicional que verifique que el nodo fondo que es un input de tipo ckeckbox esté seleccionado
        fondoB.style.background = '#563D7C'; // cambio las propiedades del fondo de pantalla por medio de su ID
        titulo.style.color= 'white'; // cambio el color del titulo por medio del id
    }
});
// fin del ejhemplo

window.onload = function() { // con el evento window.onload la funcion seguida se ejecutará apenas la pantalla esté cargada
    var pos = 0; // declaro una variable de tipo entero en 0
    var caja = document.querySelector('.caja'); // obtengo el nodo del html por su clase y lo almaceno en una variable box
    var t = setInterval(mover,10); //  creo una funcion que acturá como temporizador a travez de la funcion setInterval que llamara cada 10 milisegundos la funcion move
    function mover(){ // creo una funcion llamada mover 
        if (pos>=150) { // consiciono la posicion para que enn caso de que sea mayor o igual a 50 ejecute lo siguiente
            clearInterval(t); // detenemos el setInterval para que se detenga su ejecucion
        }else{
            pos = pos +1; // aumentamos la variable pos de manera ascendente y con paso 1
            caja.style.left = pos + 'px'; // le damos el movimiento al nodo previamente llamado en el html y le damos una nueva posicion 
        }
    }
};
// Fin del ejemplo
const list = document.querySelector(".lista"); // creo una constante y le asigno como valor el nodo del dom que tiene lista como clase

const rellenarConArray= ['Julian','Jhon','Bryan','German']; // creo una constante y le asigno un array como valor

const dobleclick = document.querySelector('.dobleclick'); // creo una constante que almacena la clase dobleclick del nod en el dom

dobleclick.addEventListener('click',()=>{ // creo un evento de escucha que ejecutará una funcion cuando se de click 
    rellenarConArray.forEach(element => { // creo un ciclo forEach para recorrer el arreglo rellenarConArray
        const li = document.createElement('li'); // creo una constante que almacena la creacion de un nodo o elemento li
        li.textContent = element; // con textContent le asigno al elemento li el valor contenido en el iterador del ciclo
        list.appendChild(li); // le agrego el contenido nuevo a la nodo obtenido por la clase
        });
});
// Fin del ejemplo

//Inicio del ejemplo

const link = document.querySelector("#ir"); // creo una variable y le asigno el nodo que es consultado a travéz de su ID

link.addEventListener('click',()=>{ // le añado un evento de escucha que ejecuta una funcion cuando se presiona click sobre el nodo
    window.open('https://getbootstrap.com/'); // con objeto global window y el metodo open abro una nueva pestaña que me redirecciona a la pagina de Botstrap en este caso
})
// Fin del ejemplo

// Inicio del ejemplo

const multicolor =  document.querySelector(".multicolor"); // obtenfo el elemento por la clase y lo almaceno en una variable 

const colores = ['rgb(83, 5, 185)','rgb(211, 2, 30)','rgb(83, 5, 185)']; // creo un array con colores en formato css 
multicolor.addEventListener('click',()=>{ // creo el evento de escucha que ejecute una funcion de flecha cuando se haga click sobre el elemento
    colores.forEach(element => { // creo un ciclo forEach que recorra el array con los colores 
        setInterval(() => { //  creo un retrasador del proceso 
        multicolor.style.background = element; // le asigno el color de fondo que tenga el iterador en determinado momento 
    }, 1000); // determino el tiempo de retraso
    });
});
// Fin del ejemplo

// Inicio del ejemplo
var btnCrear = document.querySelector('#boton'); // Obtengo el elemento que posee el ID boton y lo almaceno en una variable

btnCrear.addEventListener('click',crearCaja); // llamo al elemento anterioeemete obtenido y le agrego un evento de escucha de tipi click y le paso una funcion a ejecutar

function crearCaja() { // creo una funcion que será llamada por el evento de eescucha
    var caja = document.createElement('div'); // creo un elemento div en el documento y lo guardo en una variable
    caja.className = 'caja'; // le agrego una clase al elemento caja
    var container = document.querySelector('#container'); // adquiero del dom el elemento con el ID container y lo guardo en una variable
    container.appendChild(caja); // le paso la creacion de las cajas al elemento div en este caso para que contenga las cajas
}

// Fin del ejemplo

// Inicio del ejemplo

var colorr = document.querySelector('#cajaPadre'); // obtengo el elemento con el ID cajaPadre y lo almaceno en una variable
colorr.addEventListener('mouseenter',()=>{ // le aplico el evento de escucha para que se ejecute una funion de flecha al elemento  colorr cuando el mouse entre en la caja
    colorr.style.background = 'green'; // le aplico un nuevo color de fondo a la caja
});
colorr.addEventListener('mouseleave',()=>{ // creo una nueva evento de escucha que ejecute una funcion de flecha cuando el mouse salga de la caja 
    colorr.style.background = 'orange'; // le aplico un nuevo color de fondo a la caja 
});
// Fin del ejemplo

    