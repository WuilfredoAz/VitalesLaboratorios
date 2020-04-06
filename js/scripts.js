// Capturamos los elementos que tienen datos repetidos
// Dato del telefono
const telefono = document.querySelector(".js-datoTelefono");
// Dato de la direccion abreviada
const direccionAbre = document.querySelector(".js-datoDireccionAbre");
// Dato del Facebook
const linkFacebook= document.querySelector(".js-fb");
// Dato del WhatsApp
const linkWhatsApp= document.querySelector(".js-wa");
// Dato del Instagram
const linkInstagram = document.querySelector(".js-ig");



// Asignamos los datos que mostrarán los elementos

// Datos del telefono
    // Numero que se muestra
    telefono.innerText="0281-299.27.90";
    // href que marca
    telefono.href="telf:+5802812992790";

// Datos de la direccion
    // Texto que muestra
    direccionAbre.innerText="El Tigre, Edo. Anzoátegui";
    // href que tiene
    direccionAbre.href="https://www.google.co.ve"

// Datos de los links de las redes sociales
    // facebook
    linkFacebook.href="https://facebook.com";
    // whatsapp
    linkWhatsApp.href="https://youtube.com";
    // Instagram
    linkInstagram.href="https://instagram.com";



// Capturamos el titulo de la página para el selected automático
const tituloPagina = document.title;
// Capturamos a los elementos del menu
const elementosMenu = document.querySelectorAll(".js-menuLink");

function validarMenu()
{
    // Si estoy en el index
    if(tituloPagina=="Vitales Laboratorios")
    {
        elementosMenu[0].classList.add("selected");
    }
    // Si estoy en nosotros
    else if(tituloPagina=="Nostros")
    {
        elementosMenu[1].classList.add("selected");
    }
    // Si estoy en los examenes
    else if(tituloPagina=="Exámenes")
    {
        elementosMenu[3].classList.add("selected");
    }
}

// Ejecutamos la funcion para que el menu sea dinámico
validarMenu();


// Capturamos las flechas del carrusel de Servicios
// Flecha "atras"
const atras = document.querySelector(".js-atras");
// Flecha de "Adelante"
const adelante = document.querySelector(".js-adelante");
// Indicadores (circulos)
const indicador = document.querySelectorAll(".js-indicador");

// Añadimos un escuchador de eventos para cuando haga clic en el boton de adelante
// y le asiganamos la función pertinente
adelante.addEventListener("click", moverveArrows)

// Añado un escuchador de eventos para cuando haga clic en el boton de atras
// y le asigno la funcion pertinente
atras.addEventListener("click", moverveArrows)

// guardo en una variable la posición actual en la que me encuentro
var actual = 0;
//guardo en una variable la cantidad de circulos que hay
var cantidad = indicador.length;
// guardaro en una variable la posicion del  ultimo en los nodos
var ultimo = cantidad - 1;

function moverveArrows(event)
{
    // Si le di a avanzar
    if(event.target===adelante)
    {
        // Habilito el boton para ir hacia atras
        atras.classList.remove("disable");
        // Ciclo para recorrer todos los elementos
        for(i=0; i<cantidad; i++)
        {
            // Condición para buscar al elemento que esta seleccionado
            if(indicador[i].classList.contains("active"))
            {
                // Condicion para saber si NO ES el ultimo
                if(i<ultimo)
                {
                    // Retiramos el active del indicador donde estamos
                    indicador[i].classList.remove("active");
                    // Añadimos el active al indicador siguiente
                    indicador[i+1].classList.add("active");
                    // Guardo la posición actual del elemento
                    actual = i +1;
                    // Condición para desabilitar el botón "visualmente" si me muevo al ultimo elemento
                    actualizarFlechas();
                    // Despues de moverme y actualizar me salgo del ciclo
                    break;
                }
            }
        }
    }
    // Si le di a retroceder
    else if(event.target===atras)
    {
        // compruebo si ya me he movido anteriormente
        if(actual>0)
        {
            // Ciclo para recorrer todos los elementos
            for(i=0; i<cantidad; i++)
            {
                // Condicion para saber cual es el elemento seleccionado
                if(indicador[i].classList.contains("active"))
                {
                    // Condicion para saber si NO ES el primero
                    if(actual > 0)
                    {
                        // Le quito el estado de active al elemento actual
                        indicador[i].classList.remove("active");
                        // Le añado el estado de active al elemento anterior
                        indicador[i-1].classList.add("active");
                        // Condicion para habilitar el boton "visualmente" el ultimo elemento tras haberme movido
                        if(actual===ultimo)
                        {
                            adelante.classList.remove("disable");
                        }
                        // Guardo la posicion actual del elemento
                        actual = i -1;
                        // Condicion para deshabilitar el boton "visualmente" si me muevo al primer elemento
                        actualizarFlechas();
                        // Despues de moverme y actualizar me salgo del ciclo
                        break;
                    }
                }
            }
        }
    }
}

// Declaro en una variable al contendor de los circulos para manejarlo mejor
const contenedorIndicadores = document.querySelector(".js-contenedorIndicadores");

// Le asigno un escuchador de eventos al contendor de indicadores para cuando haga click en el
contenedorIndicadores.addEventListener("click", moverveManual);

// Creo la funcion que usare en el contenedor de indicadores
function moverveManual (event)
{
    // Depuramos que solo capte a los elementos que son los indicadores
    if(event.target.classList.contains("circulo"))
    {
        // Depuramos que no este seleccionando el elemento que esta activo
        if(event.target!=indicador[actual])
        {
            // Le quito el active al indicador actual
            indicador[actual].classList.remove("active");
            // Le añado el active al indicador desaro
            event.target.classList.add("active");
            // Acualizo la posicion actual
            // Primero hago un ciclo para buscar al nuevo elemento seleccionado
            for(i=0; i<cantidad; i++)
            {
                // Condición para seleccionar al elemento seleccionado
                if(indicador[i].classList.contains("active"))
                {
                    // Condicion para saber si me muevo hacia adelante
                    if(actual<i)
                    {
                        // Actualizo la posicion actual
                        actual= i;
                        // Actualizo las flechas
                        actualizarFlechas();
                        // Salgo del ciclo
                        break;
                    }
                    else if(actual>i)
                    {
                        // Actualizo la posicion actual
                        actual = i;
                        // Actualizo las flechas
                        actualizarFlechas();
                        // Salgo del ciclo
                        break;
                    }
                }
            }
        }
    }
}


// Funcion complementaria para actualizar las flechas cuando llego a los extremos
function actualizarFlechas()
{
    // Deshabilito la flecha de atras
    if(actual===0)
    {
        atras.classList.add("disable");
        adelante.classList.remove("disable");
    }
    // Deshabilito la flecha de adelante
    else if(actual===ultimo)
    {
        adelante.classList.add("disable");
        atras.classList.remove("disable");
    }
    // Si no estoy en el primero ni el ultimo
    else if(actual!=0 && actual!=ultimo)
    {
        adelante.classList.remove("disable");
        atras.classList.remove("disable");
    }
}