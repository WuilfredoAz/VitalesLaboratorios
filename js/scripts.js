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
// Añadimos en una variable al contenedor del carrusel
const fila = document.querySelector(".js-filaCarrusel");
// Añadimos en una varible a las cards del carrusel
const cardServicios = document.querySelectorAll(".js-serviciosCard");

// Añadimos una variable para saber la cantidad de indicadores que necesitamos
// La cantidad de indicadores sera igual a la cantidad de tarjetas existentes / numero de tarjetas que se muestran
// Redondeo hacia arriba por si la division devuelve decimal cree un indicador para la card que sobra
// La constante debe de cambiar dependiendo del tamaño de panatalla o elementos que se quieran mostrar
const numeroDeIndicadores = Math.ceil(cardServicios.length / 3);


// Añadimos un escuchador de eventos para cuando haga clic en el boton de adelante
// y le asiganamos la función pertinente
adelante.addEventListener("click", moverveArrows)

// Añado un escuchador de eventos para cuando haga clic en el boton de atras
// y le asigno la funcion pertinente
atras.addEventListener("click", moverveArrows)


function moverveArrows(event)
{
    // Si le di a avanzar
    if(event.target===adelante)
    {
        // -----Efectos visuales-----\\
        // Quito la animacion del elemento
        pulseAnimation.classList.remove("pulse");
        // Habilito el boton para ir hacia atras
        atras.classList.remove("disable");

        // -----Muevo el Scroll----\\
        // El scroll left sera igual a = la posicion donde este + el ancho
        fila.scrollLeft = fila.scrollLeft + fila.offsetWidth;

        // Guardo en una variable al indicador activo en ese momento
        const indicadorActivo = document.querySelector(".js-contenedorIndicadores .active");

        // Condicion para saber si tengo un elemento adelante
        if(indicadorActivo.nextSibling)
        {
            // Añado la clase active al elemento que esta adelante
            indicadorActivo.nextSibling.classList.add("active");
            // Le quito la clase active al elemento anterior
            indicadorActivo.classList.remove("active");

            actualizarFlecha();
        }
    }
    // Si le di a retroceder
    else if(event.target===atras)
    {
        // -----Muevo el Scroll----\\
        // El scroll left sera igual a = la posicion donde este - el ancho
        fila.scrollLeft = fila.scrollLeft - fila.offsetWidth;

        // Guardo en una variable al indicador activo en ese momento
        const indicadorActivo = document.querySelector(".js-contenedorIndicadores .active");


        // Condicion para saber si tengo un elemento atras
        if(indicadorActivo.previousElementSibling)
        {
            // Añado la clase active al elemento que esta atras
            indicadorActivo.previousSibling.classList.add("active");
            // Le quito la clase active al elemento de anterior (el que estaba antes)
            indicadorActivo.classList.remove("active");

            actualizarFlecha();
        }
    }
}


function actualizarFlecha()
{
    // Guardo en una variable la posicion del ultimo elemento
    var ultimo = (document.querySelectorAll(".js-indicador").length) - 1;

    // Condicion para saber si estoy en el ultimo y deshabilitar la flecha de adelante
    if(document.querySelectorAll(".js-indicador")[ultimo].classList.contains("active"))
    {
        // Deshabilito el boton de avanzar
        adelante.classList.add("disable");
        // En caso de que me este moviendo de un extremo a otro habilito la de atras
        atras.classList.remove("disable");
    }
    // Condicion para saber si estoy en el primreo
    else if(document.querySelectorAll(".js-indicador")[0].classList.contains("active"))
    {
        // Deshabilito el boton de retroceder
        atras.classList.add("disable");
        // En caso de que me este moviendo de un extremo a otro habilito la de adelante
        adelante.classList.remove("disable");
    }
    // Condicion por defecto
    else
    {
        atras.classList.remove("disable");
        adelante.classList.remove("disable");
    }
}


// -----Crear los indicadores-----\\
// Creo un ciclo para crear los indicadores
for(let a=0; a< numeroDeIndicadores; a++)
{
    // Creo una constante que sera el indicador que se va a crear
    const indicadorCarrusel = document.createElement("div")

    // le damos clases que usaran los indicadores
    indicadorCarrusel.classList.add("js-indicador");
    indicadorCarrusel.classList.add("circulo");

    // Condicional para darle la clase active al primer elemento en la primera ejecucion
    if(a===0)
    {
        indicadorCarrusel.classList.add("active");
    }

    // Introduzco el indicador creado en su contenedor en el HTML
    document.querySelector(".js-contenedorIndicadores").appendChild(indicadorCarrusel);

    // Creo un escuchador de eventos para cada indicador
    indicadorCarrusel.addEventListener("click", movermeManual);

    // Creo la funcion que usaran cada indicador cuando me mueva haciendo uso de ellos
    function movermeManual(event)
    {
        // Muevo el scroll \
        // El scroll sera: numero de posicion del inidcador * ancho total del contenedor del carrusel
        fila.scrollLeft = a * fila.offsetWidth;

        // Actualizamos la posicion del indicador active\\
        // Busco al elemento que este dentro del contenedor de los indicadores y tenga la clase active y se la quito
        document.querySelector(".js-contenedorIndicadores .active").classList.remove("active");
        // Le doy la clase active al elemento clicleado
        event.target.classList.add("active");

        // Actualizo las flechas
        actualizarFlecha();
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