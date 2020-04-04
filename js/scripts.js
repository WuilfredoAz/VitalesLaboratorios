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