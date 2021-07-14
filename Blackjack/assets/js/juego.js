
let deck         = []; // declaro un array vacio
const tipos      = ['C','D','H','S'];//creo una constante otro array  con los tipos de carta , corazones, treboles, pica,,diamante 
const especiales = ['J','Q','K','A'];// creo una constante que me almacene las cartas especiales

// Puntos 
var puntosJugador = 0; // declaro una variable de tipo entero inicializada en 0
var puntosComputadora=0; // declaro una dvariable de tipo entero inicializada en 0

// Referencias Del HTML
const btnPedir = document.querySelector('#btnPedir'); // almaceno en una constante el ID btnDetener del documento html
const puntos = document.querySelectorAll('small');  // almaceno en una constante el elemento small del documento html

// capturo en constantes el valor 
const divCartasJugador = document.querySelector('#jugador-cartas'); // almaceno en una constante el ID jugador-cartas del documento html
const divCartasComputador = document.querySelector('#computadora-cartas'); // almaceno en una constante del ID computadoras-cartas del documento html
const detenerTurno = document.querySelector('#btnDetener'); // almaceno en una constante del ID del boton detener del documento html
const nuevoJuego = document.querySelector('#btnNuevo'); // almaceno en una constante el ID del boton nuevo del documento html

// creo la funcion que creará el deck con las cartas
let crearDeck = ()=>{    //una variable que alamacene una funcion de de flecha 
    for (let i = 2; i <=10; i++) { // creo un ciclo inicilizado en 2 que va hasta 10 de forma ascendente
       for (const tipo of tipos) { // creo un ciclo for of para recorrer el arreglo tipos que contine los tipos de cartas
           deck.push(i+tipo); // mediante el metodo push añado al final del array la concatenacion del valor de i con los tipos de cartas
           for (const especial
             of especiales) { // creo un ciclo que recorra las cartas especiales 
            deck.push(especial + tipo); //  mediante el metodo push añado al final de arreglo deck la concatenacion de las cartas especiales con los tipos de cartas
        }
        }
    }
    deck = _.shuffle(deck); // reasigno el valor del deck y con el metodo _.shuffle de la libreria underscore devuelvo el arreglo desordenado
    // console.log(deck);
    return deck; // retorno el arreglo deck 
};
crearDeck(); // llamo la funcion crearDeck

// esta funcion me permite pedir una carta de la baraja

const pedirCarta= ()=>{ // creo una constante que resive como valor una funcion de flecha
    if (deck.length === 0) { // si el deck se queda sin cartas ejecuta lo siguiente
        alert('No hay cartas en el Deck'); // creo un alert que imprima un mensaje mediante una ventana emergente
    }
    const carta = deck.pop();  // mediante el metodo pop devuelvo la ultima carta del arreglo deck y la almaceno dentro  de la constante carta
    return carta; // retorno la carta
}

// funcion para determinar el valor de cada carta

const valorCarta = (carta) => { // creo una constante que tiene una funcion de flecha que resive un parametro
    const valor = carta.substring(0, carta.length-1); // creo una constante que recorra la carta mediante el metodo substring utilizado para recorrer cadenas  y le doy como parametros un valor de inicio y un valor de final
    return (isNaN(valor)) ? // retorno el resultado de validar la constante valor para saber si es cadena o entero
                (valor === 'A') ?  11 : 10 // recondiciono para saber si el valor del parametro equivale al string A entonces devolvera el valor 11 sino devolverá el valor 10
            : valor * 1;  // en caso de que no sea una cadena el valor se multiplicará por 1 para pasarlo de cadena a entero, tambien se puede usar la funcion parseInt
}

// Eventos

// Pedir Carta Jugador
btnPedir.addEventListener('click', () => { // a la constante btnPedir le agregamos el metodo de escucha para que cuando se presione un click en este ejecute la siguiente funcion de flecha
    const carta = pedirCarta(); // creamos una constante carta que haga un llamado a la funcion pedirCarta
    puntosJugador = puntosJugador + valorCarta(carta); // a la variable puntosJugador le asignamos el valor de esta y la sumamos con el resultado de la funcion valorCarta y le enviamos la constante carta como parámetro
    puntos[0].innerText = puntosJugador; // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas del jugador
    const imgCarta = document.createElement('img'); // creo una constante que mediante la funcion document cree un elemento con el metodo createElement que sea igual a una imagen
    imgCarta.src= `assets/cartas/${carta}.png`; // a la constante imgCarta le añadimos un ruta o enlace que corresponde al css
    imgCarta.classList = 'carta'; // a la constante imgCarta le añadimos una clase que corresponde al css
    divCartasJugador.append(imgCarta); // a la constante divCartasJugador mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta

    setTimeout(()=>{
    if (puntosJugador > 21) { // validamos los puntos del jugador para que cuando sean mayor a 21 ejecute lo siguente
        alert('Has perdido'); // a través de una ventana emergente mostramos un mensaje con la funcion alert
        btnPedir.disabled = true; // desahabilitamos el boton pedir carta para que no se pueda presionar en caso de que le jugador saque 21
        detenerTurno.disabled=true; // desahabilitamos el boton  detener turno para que no se pueda presionar en caso de que le jugador saque 21
        turnoComputadora(puntosJugador); // llamamos a la funcion turnoComputadora y le pasamos como parametro los puntos del jugador 
    } else if(puntosJugador === 21){ // ejecutamos esta condicion en caso de que no se cumpla la anterior condicion y en caso de que los puntos del jugador sean iguales a 21 ejecutará lo siguiente
        alert('Ha ganado'); // mediante una ventana emergente imprimimos un mensaje 
        btnPedir.disabled = true; // deshabilitamos el boton de pedir carta
        detenerTurno.disabled=true; // deshabilitamos el boton detenerturno
    }
    },400)
    
});

// Pedir carta Turno de la computadora

const turnoComputadora = (puntosMinimos)=>{ // creamos una constante que resive como valor una funcion de flecha que a su vez contien un parametro
        do { // con el ciclo do ejecutamos el codigo minimo una vez
            const carta = pedirCarta(); // creamos una constante carta que haga un llamado a la funcion pedirCarta
    puntosComputadora = puntosComputadora + valorCarta(carta); // a la variable puntosComputador le concatenamos su valor junto con el resultado de la funcion valorCarta
    puntos[1].innerText = puntosComputadora; // a la constante puntos le añadimos un texto que va ser igual a los puntos de las cartas de la computadora
    const imgCarta = document.createElement('img'); // creo una constante que mediante la funcion document cree un elemento con el metodo createElement que sea igual a una imagen
    imgCarta.src= `assets/cartas/${carta}.png`; // a la constante imgCarta le añadimos un ruta o enlace que corresponde al css
    imgCarta.classList = 'carta'; // a la constante imgCarta le añadimos una clase que corresponde al css
    divCartasComputador.append(imgCarta); // a la constante divCartasJugador mediante el metodo append le añadimos en su contenido los valores previamente establecidos en la constante  imgCarta
    if (puntosMinimos > 21) { // creo una validacion para que en caso de que los puntosMinimos sean mayores a 21 ejecute lo siguiente
        break; // detengo la ejecucion del ciclo
    }
    } while (puntosComputadora<=puntosMinimos && (puntosMinimos<=21)); // creo una validacion para que la computadora trate de igualar los puntos del jugador o en su defecto le gane
    setTimeout(() => { // creo una funcion que retrase el siguiente proceso de validacion
        if (puntosComputadora === puntosMinimos) { // si ambos puntajes son iguales ejecuta lo sieguiete
            alert("Es un empate"); // mediante una ventana emergente imprimo el mensaje
        }else if( puntosMinimos > 21){ // si los puntosMinimos son mayores a 21 ejecuta lo siguinte
            alert("Computadora Gana"); // mediante una ventana emergente imprimo el mensaje
        }else if(puntosComputadora > 21){ // si los puntos de la computadora son mayores a 21 ejecuta lo siguiente
            alert("El jugador Gana"); // mediante una ventana emergente imprimo el mensaje
        }else if(puntosComputadora === 21){ // si los puntos de la computadora son iguales a 21 ejecuta lo siguiente
            alert("La computadora Gana"); // mediante una ventana emergente imprimo el mensaje
        }else if(puntosComputadora > puntosJugador){ // si los puntos de la computadora son mayores que los del jugador ejecuta lo siguiente
            alert("La computadora Gana"); // mediante una ventana emergente imprimo el mensaje
        }
    }, 400); // determino el tiempo de retraso del proceso
}

// evento para el boton detener
detenerTurno.addEventListener('click', ()=>{
    btnPedir.disabled = true;  // Deshabilita el boton perdir carta
    detenerTurno.disabled=true; // Deshabilita el boton detener
    turnoComputadora(puntosJugador); // ejecuto el turno de la computadora y le paso los puntos del jugador como parametro
});

// turnoComputadora;


// Nuevo Juego
nuevoJuego.addEventListener('click',()=>{ // al elemento nuevoJuego le agrego un evento de escucha de click que ejecutará la siguiente funcion de flecha
    deck= []; // reiniciamos el deck
    deck = crearDeck(); // añado las cartas al deck nuevamente
    btnPedir.disabled=false; // habilito el boton pedirCarta
    detenerTurno.disabled=false; // habilito el boton detenerTurno
    divCartasJugador.innerHTML= ''; // limpio el contenido del div que contiene las cartas del jugador
    divCartasComputador.innerHTML=''; // limpio el contenido del div que contiene las cartas de la computadora
    puntos[0].innerText=''; // limpio el elemento del html puntos en su primera posicion para que sea igual al valor por defecto 0
    puntos[1].innerText='';// limpio el elemento del html puntos en su segunda posicion para que sea igual al valor por defecto 0
    puntosJugador=0; // reinicio los puuntos del jugador inicializando la variable en 0
    puntosComputadora=0; // reinicio los puuntos de la computadora inicializando la variable en 0
});


