// ============= Datos asignables =============
// Direccion Abreviada
const direccionAbreviada = "El Tigre, Edo. Anzoátegui";
// Direccion Completa
const direccionCompleta = "Calle 22 sur,  Edif. Remanzo,  piso 1 local 01, Pueblo nuevo sur, El Tigre, edo. Anzoátegui.";
// Link de googleMaps
const googleMaps = "https://www.google.co.ve";
// Telefono
const numeroTelefono = "0281-299.27.90";
// Link de WhastApp
const whatsApp= "https://youtube.com";
// Link de Instagram
const instagram = "https://instagram.com";
// Link de facebook
const facebook = "https://facebook.com";
// Correo
const correo = "info@vitaleslaboratorios.com";
// Para cotizaciones
const cotizaciones = "https://spotify.com";
// Para venta de reactivos
const reactivos ="https://amazon.com";
// Para encuentas
const encuestas ="https://gmail.com";
// Para el copyright
const copyright ="Vitales Laboratorios, Copyright 2020. Todos los derechos reservados"
// Para el horario Semanal (lunes-viernes)
const horarioSemanal = "8:00am - 6:00pm";
// Para el horario del fin de semana (sabado)
const horarioWeekend = "8:00am - 12:00pm";

// ============= Capturamos los elementos que se le asignaran los datos =============
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

// Capturamos el elemento de telefono de la seccion de MID (FAQS - Contacto) para modificar su href
const linkTelefono = document.querySelector(".js-telefonoLink");
// Capturamos el elemento de telefono de la seccion de MID (FAQS - Contacto) para modificar su texto
const textoTelefono = document.querySelector(".js-telefonoLink .numeroTelefono");
// Capturamos el elemento de direccion de la seccion de contacto para modificar su href
const linkDireccionContacto = document.querySelector(".js-datoDireccion");
// Capturamos el elemento de direccion de la seccion de contacto para modificar su texto
const textoDireccionContacto = document.querySelector(".js-datoDireccion .parrafo");
// Capturamos el elemento de telefono de la seccion de contacto para modificar su href
const linkTelefonoContacto = document.querySelector(".js-datoTelefonoContacto");
// Capturamos el elemento de telefono de la seccion de contacto para modificar su texto
const textoTelefonoContacto = document.querySelector(".js-datoTelefonoContacto .parrafo");
// Capturamos el elemento de correo de la seccion de contacto para modificar su href
const linkCorreoContacto = document.querySelector(".js-datoCorreo");
// Capturamos el elemento de correo de la seccion de contacto para modificar su texto
const textoCorreoContacto = document.querySelector(".js-datoCorreo .parrafo");
// Capturamos el elemento de cotizaciones de la seccion de contacto para modificar su href
const linkCotizacionesContacto = document.querySelector(".js-datoCotizaciones");
// Capturamoes el elemento de reactivos de la seccion de contacto para modificar su href
const linkReactivosContacto = document.querySelector(".js-datoVentaReactivo");
// Capturamos el elemento de encuestas de la seccion de contacto para modificar su href
const linkEncuestaContacto = document.querySelector(".js-datoEncuesta");

// Capturamos el elemento que muestra el texto del copyright en el footer para modificar su texto
const textoCopyright = document.querySelector(".js-copyright");
// Capturamos el elemento de ancla para el facebook en el Footer para modificar su href
const linkFacebookFooter = document.querySelector(".js-fbFooter");
// Capturamos el elemento de ancla para el whatsapp en el Footer para modificar su href
const linkWhatsAppFooter = document.querySelector(".js-waFooter");
// Capturamos el elemento de ancla para el instagram en el footer para modificar su href
const linkInstagramFooter = document.querySelector(".js-igFooter");
// Capturamos el elemento de ancla para el correo en el Footer para moficar su Href y texto
const linkCorreoFooter = document.querySelector(".js-correoFooter");
// Capturamos ele elemento de ancla para el telefono en el Footer para modificar su href y texto
const linkTelefonoFooter = document.querySelector(".js-telefonoFooter");
// Capturamos el elemento de ancla para la direccion en el footer para modificar su href y texto
const linkDireccionFooter = document.querySelector(".js-direccionFooter");
// Capturamos todos los elementos a los cuales se eles adjunta la hora
const horas = document.querySelectorAll(".js-horario");

// ============= Asignamos los datos que mostrarán los elementos =============
// Datos del telefono
    // Numero que se muestra
    telefono.innerText= numeroTelefono;
    // href que marca
    telefono.href="telf:+" + numeroTelefono;

    // Texto que marca el widget
    textoTelefono.innerText = numeroTelefono
    // href que marca el widget
    linkTelefono.href="telf:+" + numeroTelefono;

    // Texto que muestra en contacto
    textoTelefonoContacto.innerText= numeroTelefono;
    // href que tiene en contacto
    linkTelefonoContacto.href= "telf:+" + numeroTelefono;

// Datos de la direccion
    // Texto que muestra
    direccionAbre.innerText= direccionAbreviada;
    // href que tiene
    direccionAbre.href= googleMaps

    // Texto que muestra en contacto
    textoDireccionContacto.innerText = direccionCompleta;
    // href que tiene en contacto
    linkDireccionContacto.href= googleMaps;

// Datos de los links de las redes sociales
    // facebook
    linkFacebook.href= facebook;
    // whatsapp
    linkWhatsApp.href= whatsApp;
    // Instagram
    linkInstagram.href= instagram;

// Otros datos
    // correo link
    linkCorreoContacto.href= "mailto:" + correo;
    // Correo texto
    textoCorreoContacto.innerText = correo;

    // cotizaciones link
    linkCotizacionesContacto.href= cotizaciones;

    // reactivos link
    linkReactivosContacto.href= reactivos;

    // encuestas link
    linkEncuestaContacto.href= encuestas;


// Datos del footer
    // Copyright
    textoCopyright.innerText= copyright;
    // link de facebook
    linkFacebookFooter.href= facebook;
    // link de whatsapp
    linkWhatsAppFooter.href= whatsApp;
    // link de instagram
    linkInstagramFooter.href = instagram;
    // Datos del correo
    linkCorreoFooter.href= "mailto:" + correo;
    linkCorreoFooter.innerText = correo;
    // Datos del telefono
    linkTelefonoFooter.href = "telf:+" + numeroTelefono;
    linkTelefonoFooter.innerText = numeroTelefono;
    // Datos de la direccion
    linkDireccionFooter.href= googleMaps;
    linkDireccionFooter.innerText = direccionCompleta;
    // Asignamos las horarios del footer
    asignarHoras();


function asignarHoras()
{
    // Ciclo para buscar todos los elementos de hora
    for(i=0; i<horas.length; i++)
    {
        // asigno los horarios samanales (LU,MA,MI,JU,VI)
        if(i <=4)
        {
            horas[i].innerText= horarioSemanal;
        }
        // Si es para el fin de semana
        else
        {
            horas[i].innerText= horarioWeekend;
        }
    }
}


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
// Declaramos una varible para quitar la animacion al hacer click por primera vez en "adelante"
const pulseAnimation = document.querySelector(".js-pulse");


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
        // Quito la animacion del elemento
        pulseAnimation.classList.remove("pulse");
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
            // Quito la animacion del elemento
            pulseAnimation.classList.remove("pulse");
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
    // Condicion para saber si estoy en el principio
    if(actual===0)
    {
        // Deshabilito la flecha de atras
        atras.classList.add("disable");
        // En caso de que me este moviendo de un extremo a otro habilito la de adelante
        adelante.classList.remove("disable");
    }
    // Condicion para saber si estoy en el ultimo
    else if(actual===ultimo)
    {
        // Deshabilito la flecha de adelante
        adelante.classList.add("disable");
        // En caso de que me este moviendo de un extremo a otro habilito la de atras
        atras.classList.remove("disable");
    }
    // Si no estoy en el primero ni el ultimo
    else if(actual!=0 && actual!=ultimo)
    {
        adelante.classList.remove("disable");
        atras.classList.remove("disable");
    }
}

// Capturo en variables al padre de los filtros
const padreFiltros = document.querySelector(".js-padreFiltro")
// Capturo en  variables a todos los elementos que hacen de filtro en las FAQS
const filtro = document.querySelectorAll(".js-filtro");
// Creo una variable para saber la cantidad de filtros que hay
const cFiltros = filtro.length;
// Creo una variable para guardar todos los bloques que contienen las preguntas
const faqs = document.querySelectorAll(".js-faqs");

// Asigno un escuchador de eventos al padre de los filtros para mayor comodidad
padreFiltros.addEventListener("click", filtrandoFaqs);

// creo la funcion que usa el padre de los filtros
function filtrandoFaqs(event)
{
    // Pregunto si hice clic en elemento válido
    if(event.target.classList.contains("js-filtro"))
    {
        // ciclo para recorrer todos los filtros
        for(i=0; i<cFiltros; i++)
        {
            // Condicion para saber cual filtro fue el que toque y si este filtro NO ESTA activo
            if(event.target===filtro[i] && (event.target.classList.contains("active"))==false)
            {
                // Ciclo para buscar el filtro activo anteriormente
                for(antiguo=0;antiguo<cFiltros;antiguo++)
                {
                    // Condicion para saber cual filtro estaba activo
                    if(filtro[antiguo].classList.contains("active"))
                    {
                        // le quito le quito el active a ese filtro
                        filtro[antiguo].classList.remove("active");
                        // cierro el ciclo
                        break;
                    }
                }
                // Activo el filtro deseado
                filtro[i].classList.add("active");

                // Ciclo para recorrer todos los contenedores de  preguntas
                for(indice=0; indice<cFiltros; indice++)
                {
                    // Si el contenedor tiene el mismo indice que el seleccionado y NO ESTA activo
                    if(i===indice && (faqs[i].classList.contains("active"))==false)
                    {
                        // Muestro el bloque de preguntas
                        faqs[i].classList.add("active");
                    }
                    // Si no es el contenedor deseado
                    else
                    {
                        // Quito el active de dicho contenedor
                        faqs[indice].classList.remove("active");
                    }
                }
                // Detengo el ciclo
                break;
            }
        }
    }
}