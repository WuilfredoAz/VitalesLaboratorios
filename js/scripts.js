// ============= * COMIENZAN LOS DATOS ASIGNABLES * =============\\
// Direccion Abreviada
const direccionAbreviada = "El Tigre, Edo. Anzoátegui";
// Direccion Completa
const direccionCompleta = "Calle 22 sur,  Edif. Romanzo,  piso 1 local 01, Pueblo nuevo sur, El Tigre, edo. Anzoátegui.";
// Link de googleMaps
const googleMaps = "https://www.google.co.ve";
// Telefono
const numeroTelefono = "0281-299.27.90";
// telefono para llamar (sin formato)
const numeroTelefonoLlamar = "5802812992790";
// Link de WhastApp
const whatsApp= "https://youtube.com";
// Link de Instagram
const instagram = "https://www.instagram.com/vitaleslaboratorios/";
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
const copyright = "Vitales Laboratorios, Copyright 2021. Todos los derechos reservados."
// Para el horario Semanal (lunes-viernes)
const horarioSemanal = "8:00am - 6:00pm";
// Para el horario del fin de semana (sabado)
const horarioWeekend = "8:00am - 12:00pm";
// ============= * TERMINAN LOS DATOS ASIGNABLES * =============\\



// ============= * COMIENZAN LAS DECLARACIONES GENERALES DE VARIABLES * =============\\

    // ===== Variables usadas para la asignacion de datos dinamicos de la página

        // Variables del Header
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
            // Texto del telefono
            const txtTelefonoHeader = document.querySelector(".js-txtdatoTelefono");
            // Texto de la direccion
            const txtDireccionAbreHeader = document.querySelector(".js-txtDireccionAbre");

        // Variables del MID y seccion de Contacto
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

        // Variables del footer
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

    // ===== Termina Variables usadas para la asignacion de datos dinamicos de la página

    // ===== Empieza variables usadas para mostrar en el NAV la página seleccionada (active)

        // Capturamos el titulo de la página para el selected automático
        const tituloPagina = document.title;
        // Capturamos a los elementos del menu
        const elementosMenu = document.querySelectorAll(".js-menuLink");

    // ===== Terminan variables usadas para mostrar en el NAV la página seleccionada (active)

    // ===== Empiezan las variables usadas en el Carrusel

        // Capturamos las variables que involucran las flechas del carrusel de Servicios
            // Flecha "atras"
            const atras = document.querySelector(".js-atras");
            // Flecha de "Adelante"
            const adelante = document.querySelector(".js-adelante");
            // Declaramos una varible para quitar la animacion al hacer click por primera vez en "adelante"
            const pulseAnimation = document.querySelector(".js-pulse");

        // Catpuramos las variables que involucran a los indicadores
            // Indicadores (circulos)
            const indicador = document.querySelectorAll(".js-indicador");

        // Capturamos las variables que tienen que ver con el contenido del carrusel
            // Añadimos en una variable al contenedor del carrusel
            const fila = document.querySelector(".js-filaCarrusel");
            // Añadimos en una varible a las cards del carrusel
            const cardServicios = document.querySelectorAll(".js-serviciosCard");

            // Añadimos una variable para saber la cantidad de indicadores que necesitamos
            // La cantidad de indicadores sera igual a la cantidad de tarjetas existentes / numero de tarjetas que se muestran
            // Redondeo hacia arriba por si la division devuelve decimal cree un indicador para la card que sobra
            // La constante debe de cambiar dependiendo del tamaño de panatalla o elementos que se quieran mostrar
            const numeroDeIndicadores = Math.ceil(cardServicios.length / 3);

    // ===== Terminan  las variables usadas en el Carrusel

    // ===== Empiezan  las variables usadas en el filtro de las faqs

        // Capturo en variables al padre de los filtros
        const padreFiltros = document.querySelector(".js-padreFiltro")
        // Capturo en  variables a todos los elementos que hacen de filtro en las FAQS
        const filtro = document.querySelectorAll(".js-filtro");
        // Creo una variable para saber la cantidad de filtros que hay
        const cFiltros = filtro.length;
        // Creo una variable para guardar todos los bloques que contienen las preguntas
        const faqs = document.querySelectorAll(".js-faqs");

    // ===== Terminan  las variables usadas en el filtro de las faqs

    // ===== Empiezan  las variables usadas en el modal
        // Capturo en una variable al overlay
        const overlay = document.querySelector(".js-overlay");
        // Capturo en una variable al boton para cerrrar el modal
        const cerraModal = document.querySelector(".js-btnModal");
    // ===== Terminan  las variables usadas en el modal

// ============= * TERMINAN LAS DECLARACIONES GENERALES DE VARIABLES * =============\\


// ============= * Empieza el proceso de asignacion de los datos dinamicos de la pagina * =============\\
    // ===== Empieza el telefono
        // Numero que se muestra
        txtTelefonoHeader.innerText= numeroTelefono;
        // href que marca
        telefono.href="tel:+" + numeroTelefonoLlamar;
    // ===== Termina el telefono

    // ===== Empieza la direccion
        // Texto que muestra
        txtDireccionAbreHeader.innerText= direccionAbreviada;
        // href que tiene
        direccionAbre.href= googleMaps
    // ===== Termina la direccion

    // ===== Empieza las Redes sociales
        // facebook
        linkFacebook.href= facebook;
        // whatsapp
        linkWhatsApp.href= whatsApp;
        // Instagram
        linkInstagram.href= instagram;
    // ===== Termina las Redes sociales

    // ===== Empieza Datos del Footer
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
        linkTelefonoFooter.href = "tel:+" + numeroTelefonoLlamar;
        linkTelefonoFooter.innerText = numeroTelefono;
        // Datos de la direccion
        linkDireccionFooter.href= googleMaps;
        linkDireccionFooter.innerText = direccionCompleta;
        // Asignamos las horarios del footer
        asignarHoras();
    // ===== Termina Datos del Footer
// ============= * Termina el proceso de asignacion de los datos dinamicos de la pagina * =============\\



// ============= * Empieza funcion para asignar las horas en el footer* =============\\
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
// ============= *Termina funcion para asignar las horas en el footer* =============\\

// ============= * Empieza funcion para hacer el menu dinamico* =============\\
function validarMenu()
{
    // Si estoy en el index
    if(tituloPagina=="Inicio — Vitales Laboratorios")
    {
        elementosMenu[0].classList.add("selected");
        // Cargamos todo el index
        datosIndex();
    }
    // Si estoy en nosotros
    else if(tituloPagina=="Nosotros — Vitales Laboratorios")
    {
        elementosMenu[1].classList.add("selected");

        // Texto que marca el widget
        textoTelefono.innerText = numeroTelefono
        // href que marca el widget
        linkTelefono.href="tel:+" + numeroTelefonoLlamar;
    }
    // Si estoy en los examenes
    else if(tituloPagina=="Examanes — Vitales Laboratorios")
    {
        elementosMenu[3].classList.add("selected");
    }
    // Si estoy en la página de las hematologias
    else if(tituloPagina=="Hematologías — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarHematologias();
    }
    // Si estoy en la pagina de serologías
    else if(tituloPagina=="Serologías — Exámenes")
    {
       // Cargo los datos de los examenes
       cargarSerologias();
    }
    // Si estoy en la pagina de la quimica sanguinea
    else if(tituloPagina=="Química sanguínea — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarQSanguinea();
    }
    // Si estoy en la página de marcadores tumorales
    else if(tituloPagina=="Marcadores tumorales — Exámenes")
    {
        // cargo los datos de los examenes
        cargarMTumorales();
    }
    // Si estoy en la pagina de hormonas
    else if(tituloPagina=="Hormonas — Exámenes")
    {
        // cargo los datos de los examanes
        cargarHormonas();
    }
    // Si estoy en la pagina de inmunologia
    else if(tituloPagina=="Inmunología — Exámenes")
    {
        // cargo los datos de los examenes
        cargarInmunologia();
    }
    // Si estoy en la pagina de uroanalisis
    else if(tituloPagina=="Uroanálisis — Exámenes")
    {
        // cargo los datos de los examenes
        cargarUroanalisis();
    }
    // Si estoy en la pagina de coprologia
    else if(tituloPagina=="Coprología — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarCoprologia();
    }
    // Si estoy en la pagina de la orina casual
    else if(tituloPagina=="Química urinaria (Casual) — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarQUCasual();
    }
    // Si estoy en la pagina de todo el dia
    else if(tituloPagina=="Química urinaria (24H) — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarQUDia();
    }
    // si estoy en la pagina de los espermatogramas
    else if(tituloPagina=="Espermatograma — Exámenes")
    {
        // cargo los datos de los examenes
        cargarEspermatograma();
        // Ejecuto la funcion para poder mostrar las condiciones para los examenes
        mostrarCondiciones();
    }
    // Si estoy en la pagina de gasometria
    else if(tituloPagina=="Gasometría — Exámenes")
    {
        // Cargo los datos de los examenes
        cargarGasometria();
    }
}

// Ejecutamos la funcion para que el menu sea dinámico
validarMenu();
// ============= * Termina funcion para hacer el menu dinamico* =============\\


function datosIndex()
{
    // ===== Empieza otros datos
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

        // Texto que muestra en contacto
        textoDireccionContacto.innerText = direccionCompleta;
        // href que tiene en contacto
        linkDireccionContacto.href= googleMaps;

        // Texto que muestra en contacto
        textoTelefonoContacto.innerText= numeroTelefono;
        // href que tiene en contacto
        linkTelefonoContacto.href= "tel:+" + numeroTelefonoLlamar;

        // Texto que marca el widget
        textoTelefono.innerText = numeroTelefono
        // href que marca el widget
        linkTelefono.href="tel:+" + numeroTelefonoLlamar;

    // ===== Termina otros datos

    // Configuracion para el Smooth Scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // Guardamos en una variable al CTA del hero en el index
    const ctaHeroAnimation = document.querySelector(".btn-cta");
    // Creamos un escuchador de eventos para solucionar el bug que se produce al terminar la animacion
    // que hace que el hover no funcione
    ctaHeroAnimation.addEventListener("animationend", ()=>{
        ctaHeroAnimation.classList.remove("animado");
    });

    // ============= *Empieza la lista de los escuchadores de eventos* =============\\
        // ===== Empiezan escuchadores pertenecientes al carrusel
            // Añadimos un escuchador de eventos para cuando haga clic en el boton de adelante
            // y le asiganamos la función pertinente
            adelante.addEventListener("click", moverveArrows)

            // Añado un escuchador de eventos para cuando haga clic en el boton de atras
            // y le asigno la funcion pertinente
            atras.addEventListener("click", moverveArrows)
        // ===== Terminan escuchadores pertenecientes al carrusel

        // ===== Empieza escuchadores pertenecientes al filtro de FAQs
            // Asigno un escuchador de eventos al padre de los filtros para mayor comodidad
            padreFiltros.addEventListener("click", filtrandoFaqs);
        // ===== Termina escuchadores pertenecientes al filtro de FAQs
    // ============= *Termina la lista de los escuchadores de eventos* =============\\


    // ============= * Empieza funcion para moverme en el carrusel con las flechas* =============\\
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
    // ============= * Termina funcion para moverme en el carrusel con las flechas* =============\\


    // ============= * Empieza funcion para actualizar el estado de las flechas en el carrusel* =============\\
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
    // ============= * Termina funcion para actualizar el estado de las flechas en el carrusel* =============\\

    // ============= * Empieza el ciclo para crear los indicadores de paginacion del carrusel* =============\\
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
    // ============= * Termina el ciclo para crear los indicadores de paginacion del carrusel* =============\\

    // ============= * Empieza la funcion usada por el filtro de las FAQs* =============\\
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
    // ============= * Termina la funcion usada por el filtro de las FAQs* =============\\
}

// ============= * Empieza funcion que carga los datos de las Hematologias* =============\\
function cargarHematologias()
{
    // Figura literaria para el primer examen
    var hema0=
    {
        titulo: "Hematología completa",
        categoria: "Hematología",
        listo: "4 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el segundo examen
    var hema1=
    {
        titulo: "PT",
        categoria: "Hematología",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (plasma)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el tercer examen
    var hema2=
    {
        titulo: "PTT",
        categoria: "Hematología",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (plasma)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el cuarto examen
    var hema3=
    {
        titulo: "Velocidad de Sedimentación globular (VSG)",
        categoria: "Hematología",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el quinto examen
    var hema4=
    {
        titulo: "Grupo sanguíneo",
        categoria: "Hematología",
        listo: "4 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el sexto examen
    var hema5=
    {
        titulo: "Drepanocitos",
        categoria: "Hematología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el septimo examen
    var hema6=
    {
        titulo: "Frotis de sangre periférica",
        categoria: "Hematología",
        listo: "4 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el octavo examen
    var hema7=
    {
        titulo: "Fibrinógeno",
        categoria: "Hematología",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (plasma)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el noveno examen
    var hema8=
    {
        titulo: "Reticulocitos",
        categoria: "Hematología",
        listo: "4 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el decimo examen
    var hema9=
    {
        titulo: "Gota gruesa",
        categoria: "Hematología",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre total",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [hema0, hema1, hema2, hema3, hema4, hema5, hema6, hema7, hema8, hema9];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de las Hematologias* =============\\


// ============= * Empieza funcion que carga los datos de las Serologias* =============\\
function cargarSerologias()
{
    // Figura literaria para el primer examen
    var sero0=
    {
        titulo: "ASTO",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el segundo examen
    var sero1=
    {
        titulo: "RA Test",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el tercer examen
    var sero2=
    {
        titulo: "Monotest",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el cuarto examen
    var sero3=
    {
        titulo: "PCR Cualitativo",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el quinto examen
    var sero4=
    {
        titulo: "PCR  Cuantificado",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el sexto examen
    var sero5=
    {
        titulo: "Antígenos febriles",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el septimo examen
    var sero6=
    {
        titulo: "Helicobacter Pilory",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el octavo examen
    var sero7=
    {
        titulo: "Dengue Test",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el noveno examen
    var sero8=
    {
        titulo: "HIV prueba rápida",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el decimo examen
    var sero9=
    {
        titulo: "Prueba de embarazo",
        categoria: "Serologías",
        listo: "1 hora",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el decimo primero examen
    var sero10=
    {
        titulo: "LE Test",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el decimo segundo examen
    var sero11=
    {
        titulo: "Malaria",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Figura literaria para el decimo tercero examen
    var sero12=
    {
        titulo: "VDRL",
        categoria: "Serologías",
        listo: "4-6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:30 p.m."
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        sero0, sero1, sero2, sero3, sero4, sero5,
                        sero6, sero7, sero8, sero9, sero10, sero11,
                        sero12
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de las Serologias* =============\\


// ============= * Empieza funcion que carga los datos de las Quimica Sanguinea * =============\\
function cargarQSanguinea()
{
    // Figura literaria para el primer examen
    var qsanguinea0=
    {
        titulo: "Glicemia basal",
        categoria: "Química sanguínea",
        listo: " 1 día",
        condicion: "El paciente debe haber desayunado o ingerir carga de glucosa según solicitud de su médico",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "8:00 a.m. a 10:30 a.m."
    }

    // Figura literaria para el segundo examen
    var qsanguinea1=
    {
        titulo: "Glicemia post prandial",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el tercer examen
    var qsanguinea2=
    {
        titulo: "Urea",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el cuarto examen
    var qsanguinea3=
    {
        titulo: "Creatinina",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el quinto examen
    var qsanguinea4=
    {
        titulo: "Colesterol total",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el sexto examen
    var qsanguinea5=
    {
        titulo: "Colesterol fraccionado (HDL , LDL , VLDL)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el septimo examen
    var qsanguinea6=
    {
        titulo: "Triglicéridos",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el octavo examen
    var qsanguinea7=
    {
        titulo: "Ácido úrico",
        categoria: "Química sanguínea",
        listo: "7 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el noveno examen
    var qsanguinea8=
    {
        titulo: "TGO (AST)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo examen
    var qsanguinea9=
    {
        titulo: "TGP (ALT)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo primero examen
    var qsanguinea10=
    {
        titulo: "Gamma Glutamil Transferasa (GGT)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo segundo examen
    var qsanguinea11=
    {
        titulo: "Amilasa",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo tercero examen
    var qsanguinea12=
    {
        titulo: "Lipasa",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo cuarto examen
    var qsanguinea13=
    {
        titulo: "Deshidrogenasa Láctica (LDH)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo quinto examen
    var qsanguinea14=
    {
        titulo: "Fosfatasa Ácida Total",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo sexto examen
    var qsanguinea15=
    {
        titulo: "Fosfatasa Alcalina (ALP)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el decimo septo examen
    var qsanguinea16=
    {
        titulo: "Fosfatasa Ácida Prostática",
        categoria: "Química sanguínea",
        listo: "falta",
        condicion: "falta",
        tipoMuestra: "falta",
        horarioMuestra: "falta"
    }

    // Figura literaria para el decimo octavo examen
    var qsanguinea17=
    {
        titulo: "Calcio",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo noveno examen
    var qsanguinea18=
    {
        titulo: "Fósforo",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo examen
    var qsanguinea19=
    {
        titulo: "Hierro",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el vigesimo primero examen
    var qsanguinea20=
    {
        titulo: "Magnesio",
        categoria: "Química sanguínea",
        listo: "3 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo segundo examen
    var qsanguinea21=
    {
        titulo: "CK Total (CPK Total)",
        categoria: "Química sanguínea",
        listo: "3 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo tercer examen
    var qsanguinea22=
    {
        titulo: "CK-MB",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo cuarto examen
    var qsanguinea23=
    {
        titulo: "Cloro",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo quinto examen
    var qsanguinea24=
    {
        titulo: "Sodio",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo sexto examen
    var qsanguinea25=
    {
        titulo: "Potasio",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo septimo examen
    var qsanguinea26=
    {
        titulo: "Proteínas totales y fraccionadas",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo octavo examen
    var qsanguinea27=
    {
        titulo: "Bilirrubina total y fraccionada",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Ayuno. El paciente deberá permanecer en el laboratorio por un lapso de 2 a 3 horas aproximadamente.",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el vigesimo noveno examen
    var qsanguinea28=
    {
        titulo: "PTOG 3 muestras (Prueba de tolerancia oral a la glucosa)",
        categoria: "Química sanguínea",
        listo: "6 horas",
        condicion: "Ayuno. El paciente deberá permanecer en el laboratorio por un lapso de 2 a 3 horas aproximadamente.",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 5:00 p.m."
    }

    // Figura literaria para el trigesimo  examen
    var qsanguinea29=
    {
        titulo: "PTOG 4 muestras",
        categoria: "Química sanguínea",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 p.m."
    }



    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        qsanguinea0, qsanguinea1, qsanguinea2, qsanguinea3, qsanguinea4, qsanguinea5,
                        qsanguinea6, qsanguinea7, qsanguinea8, qsanguinea9, qsanguinea10, qsanguinea11,
                        qsanguinea12, qsanguinea13, qsanguinea14, qsanguinea15, qsanguinea16, qsanguinea17,
                        qsanguinea18, qsanguinea19, qsanguinea20, qsanguinea21, qsanguinea22, qsanguinea23,
                        qsanguinea24, qsanguinea25, qsanguinea26, qsanguinea27, qsanguinea28, qsanguinea29
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de las Quimica Sanguinea * =============\\


// ============= * Empieza funcion que carga los datos de los marcadores Tumorales * =============\\
function cargarMTumorales()
{
    // Figura literaria para el primer examen
    var mt0=
    {
        titulo: "CEA",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el segundo examen
    var mt1=
    {
        titulo: "AFP",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el tercer examen
    var mt2=
    {
        titulo: "CA 125",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el cuarto examen
    var mt3=
    {
        titulo: "CA 19-9",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el quinto examen
    var mt4=
    {
        titulo: "CA15-3",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el sexto examen
    var mt5=
    {
        titulo: "PSA total",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el septimo examen
    var mt6=
    {
        titulo: "PSA libre",
        categoria: "Marcadores tumorales",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [mt0, mt1, mt2, mt3, mt4, mt5, mt6];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de los marcadores Tumorales* =============\\


// ============= * Empieza funcion que carga los datos de las hormonas* =============\\
function cargarHormonas()
{
    // Figura literaria para el primer examen
    var horm0=
    {
        titulo: "T3 Total",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el segundo examen
    var horm1=
    {
        titulo: "T3 Libre",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el tercer examen
    var horm2=
    {
        titulo: "T4 Total",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el cuarto examen
    var horm3=
    {
        titulo: "T4 Libre",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el quinto examen
    var horm4=
    {
        titulo: "TSH",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el sexto examen
    var horm5=
    {
        titulo: "LH",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el septimo examen
    var horm6=
    {
        titulo: "FSH",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el octavo examen
    var horm7=
    {
        titulo: "Progesterona",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el noveno examen
    var horm8=
    {
        titulo: "Estradiol",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo examen
    var horm9=
    {
        titulo: "Prolactina",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo primero examen
    var horm10=
    {
        titulo: "Insulina Basal",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo segundo examen
    var horm11=
    {
        titulo: "Testosterona Total",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo tercero examen
    var horm12=
    {
        titulo: "Testosterona Libre",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo cuarto examen
    var horm13=
    {
        titulo: "17 OHP",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo quinto examen
    var horm14=
    {
        titulo: "DHEA-S",
        categoria: "A consultar",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el decimo sexto examen
    var horm15=
    {
        titulo: "Cortisol",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo septimo examen
    var horm16=
    {
        titulo: "βHCG",
        categoria: "Hormonas",
        listo: "6 Horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 a.m."
    }

    // Figura literaria para el decimo octavo examen
    var horm17=
    {
        titulo: "PTH (Parathormona)",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el decimo noveno examen
    var horm18=
    {
        titulo: "ACTH",
        categoria: "Hormonas",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el vigesimo examen
    var horm19=
    {
        titulo: "HGH (Hormana de crecimiento)",
        categoria: "Hormonas",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el vigesimo primer examen
    var horm20=
    {
        titulo: "Aldosterona",
        categoria: "Hormonas",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        horm0, horm1, horm2, horm3, horm4, horm5, horm6, horm7, horm8, horm9,
                        horm10, horm11, horm12, horm13, horm14, horm15, horm16, horm17, horm18,
                        horm19, horm20
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de las hormonas* =============\\


// ============= * Empieza funcion que carga los datos de Inmunologia* =============\\
function cargarInmunologia()
{
    // Figura literaria para el 1 examen
    var inmu0=
    {
        titulo: "Inmunoglobulina A (IgA)",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:30 a.m."
    }

    // Figura literaria para el 2 examen
    var inmu1=
    {
        titulo: "Inmunoglobulina G (IgG)",
        categoria: "Inmunología",
        listo: " 2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:30 a.m."
    }

    // Figura literaria para el 3 examen
    var inmu2=
    {
        titulo: "Inmunoglobulina M (IgM)",
        categoria: "Inmunología",
        listo: " 2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:30 a.m."
    }

    // Figura literaria para el 4 examen
    var inmu3=
    {
        titulo: "Inmunoglobulina E (IgE)",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 5 examen
    var inmu4=
    {
        titulo: "Mycoplasma Pneumoniae IgG",
        categoria: "Inmunología",
        listo: " 2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:30 a.m."
    }

    // Figura literaria para el 6 examen
    var inmu5=
    {
        titulo: "Mycoplasma Pneumoniae IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 7 examen
    var inmu6=
    {
        titulo: "Chlamydia Pneumoniae IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 8 examen
    var inmu7=
    {
        titulo: "Chlamydia Pneumoniae IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 9 examen
    var inmu8=
    {
        titulo: "Chlamydia Trachomatis IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 10 examen
    var inmu9=
    {
        titulo: "Chlamydia Trachomatis IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el  11 examen
    var inmu10=
    {
        titulo: "Toxoplasma IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 12 examen
    var inmu11=
    {
        titulo: "Toxoplasma IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 13 examen
    var inmu12=
    {
        titulo: "Epstein Barr IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 14 examen
    var inmu13=
    {
        titulo: "Epstein Barr IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 15 examen
    var inmu14=
    {
        titulo: "Citomegalovirus IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 16 examen
    var inmu15=
    {
        titulo: "Citomegalovirus IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 17 examen
    var inmu16=
    {
        titulo: "Helicobacter Pilory IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 18 examen
    var inmu17=
    {
        titulo: "Helicobacter Pilory IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 19 examen
    var inmu18=
    {
        titulo: "HSV I IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 20 examen
    var inmu19=
    {
        titulo: "HSV II IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 21 examen
    var inmu20=
    {
        titulo: "HSV II IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 22 examen
    var inmu21=
    {
        titulo: "Troponina I",
        categoria: "Inmunología",
        listo: "2-4 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }

    // Figura literaria para el 23 examen
    var inmu22=
    {
        titulo: "Procalcitonina",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 24 examen
    var inmu23=
    {
        titulo: "NT pro BNP",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 25 examen
    var inmu24=
    {
        titulo: "ANA",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 26 examen
    var inmu25=
    {
        titulo: "Anti-DNA",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 27 examen
    var inmu26=
    {
        titulo: "Complemento C3",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 28 examen
    var inmu27=
    {
        titulo: "Complemento C4",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 29 examen
    var inmu28=
    {
        titulo: "Complemento CH50",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 30 examen
    var inmu29=
    {
        titulo: "Hepatitis A IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 31 examen
    var inmu30=
    {
        titulo: "Hepatitis A IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 32 examen
    var inmu31=
    {
        titulo: "Hepatitis B HBsAg",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 33 examen
    var inmu32=
    {
        titulo: "Hepatitis B anti HBs",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 34 examen
    var inmu33=
    {
        titulo: "Hepatitis B anti HBc",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 35 examen
    var inmu34=
    {
        titulo: "Hepatitis C",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 36 examen
    var inmu35=
    {
        titulo: "Rubéola IgG",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 37 examen
    var inmu36=
    {
        titulo: "Rubéola IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 38 examen
    var inmu37=
    {
        titulo: "HIV (Elisa)",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 39 examen
    var inmu38=
    {
        titulo: "Vitamina B12",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 40 examen
    var inmu39=
    {
        titulo: "Vitamina D",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 41 examen
    var inmu40=
    {
        titulo: "Anti cardiolipinas IgG",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 42 examen
    var inmu41=
    {
        titulo: "Anti cardiolipinas IgM",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 43 examen
    var inmu42=
    {
        titulo: "Anticuerpos anti tiroglobulina (Anti TG)",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 44 examen
    var inmu43=
    {
        titulo: "Anticuerpos anti microsomales (Anti TPO)",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 45 examen
    var inmu44=
    {
        titulo: "Tiroglobulina",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 46 examen
    var inmu45=
    {
        titulo: "Ferritina",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 47 examen
    var inmu46=
    {
        titulo: "Transferritina",
        categoria: "Inmunología",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 48 examen
    var inmu47=
    {
        titulo: "Hemoglobina glicosilada (HbA1c)",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 49 examen
    var inmu48=
    {
        titulo: "Peptido C",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 50 examen
    var inmu49=
    {
        titulo: "Dímero D",
        categoria: "Inmunología",
        listo: "2 días",
        condicion: "Requiere ayuno",
        tipoMuestra: "sangre (suero)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Figura literaria para el 50 examen
    var inmu50=
    {
        titulo: "HSV I IgM",
        categoria: "Inmunología",
        listo: "1 día",
        condicion: "No requiere ayuno",
        tipoMuestra: "Sangre (suero)",
        horarioMuestra: "7:00 a.m a 4:00 p.m."
    }



    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        inmu0, inmu1, inmu2, inmu3, inmu4, inmu5, inmu6, inmu7, inmu8, inmu9,
                        inmu10, inmu11, inmu12, inmu13, inmu14, inmu15, inmu16, inmu17, inmu18,
                        inmu19, inmu20,inmu21, inmu22, inmu23, inmu24, inmu25, inmu26, inmu27,
                        inmu28, inmu29, inmu30, inmu31, inmu32, inmu33, inmu34, inmu35, inmu36,
                        inmu37, inmu38, inmu39, inmu40, inmu41, inmu42, inmu43, inmu44, inmu45,
                        inmu46, inmu47, inmu48,inmu49, inmu50
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Inmunologia* =============\\


// ============= * Empieza funcion que carga los datos de Uroanalisis* =============\\
function cargarUroanalisis()
{
    // Figura literaria para el primer examen
    var uro0=
    {
        titulo: "Examen general de orina",
        categoria: "Uroanálisis",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (primera orina de la mañana)",
        horarioMuestra: "7:00 a.m. a 9:00 a.m."
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [uro0];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Uroanalisis* =============\\


// ============= * Empieza funcion que carga los datos de Coprologia* =============\\
function cargarCoprologia()
{
    // Figura literaria para el 1 examen
    var copro0=
    {
        titulo: "Coproanálisis",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 2 examen
    var copro1=
    {
        titulo: "PH",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 3 examen
    var copro2=
    {
        titulo: "Azúcares reductores",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 4 examen
    var copro3=
    {
        titulo: "Leucograma fecal",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 5 examen
    var copro4=
    {
        titulo: "Sangre oculta en heces",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }

    // Figura literaria para el 6 examen
    var copro5=
    {
        titulo: "Helicobacter Pilory",
        categoria: "Coprología",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "heces",
        horarioMuestra: "7:00 a.m. a 4:00 p.m."
    }


    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [copro0, copro1, copro2, copro3, copro4, copro5];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Coprologia* =============\\


// ============= * Empieza funcion que carga los datos de Quimica Urinaria (Casual)* =============\\
function cargarQUCasual()
{
    // Figura literaria para el 1 examen
    var casual0=
    {
        titulo: "Calcio",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 2 examen
    var casual1=
    {
        titulo: "Creatinina",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 3 examen
    var casual2=
    {
        titulo: "Ácido Úrico",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 4 examen
    var casual3=
    {
        titulo: "Fósforo",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 5 examen
    var casual4=
    {
        titulo: "Proteínas",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 6 examen
    var casual5=
    {
        titulo: "Relación calcio/creatinina",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 7 examen
    var casual6=
    {
        titulo: "Relación ácido úrico/creatinina",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 8 examen
    var casual7=
    {
        titulo: "Relación proteínas/creatinina",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 9 examen
    var casual8=
    {
        titulo: "Relación fósforo/creatinina",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 10 examen
    var casual9=
    {
        titulo: "Electrolitos (sodio, potasio, cloro)",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }

    // Figura literaria para el 11 examen
    var casual10=
    {
        titulo: "Microalbuminuria",
        categoria: "Química urinaria (Orina Casual)",
        listo: "6 horas",
        condicion: "No requiere ayuno",
        tipoMuestra: "Orina (segunda micción de la mañana)",
        horarioMuestra: "8:00 a.m. a 11:30 a.m."
    }


    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        casual0, casual1, casual2, casual3, casual4, casual5, casual6,
                        casual7, casual8, casual9, casual10
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Quimica Urinaria (Casual)* =============\\


// ============= * Empieza funcion que carga los datos de Quimica Urinaria (24H)* =============\\
function cargarQUDia()
{
    // Figura literaria para el 1 examen
    var quDia0=
    {
        titulo: "Depuración de creatinina",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 2 examen
    var quDia1=
    {
        titulo: "Proteinuria 24 horas",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 3 examen
    var quDia2=
    {
        titulo: "Calcio",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 4 examen
    var quDia3=
    {
        titulo: "Creatinina",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 5 examen
    var quDia4=
    {
        titulo: "Ácido Úrico",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 6 examen
    var quDia5=
    {
        titulo: "Fósforo",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 7 examen
    var quDia6=
    {
        titulo: "Electrolitos orina  (sodio, potasio, cloro)",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 8 examen
    var quDia7=
    {
        titulo: "Microalbuminuria",
        categoria: "Química urinaria (Orina de 24 horas)",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [
                        quDia0, quDia1, quDia2, quDia3, quDia4, quDia5, quDia6,
                        quDia7
                    ];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Quimica Urinaria (24H)* =============\\


// ============= * Empieza funcion que carga los datos de Espermatograma* =============\\
function cargarEspermatograma()
{
    // Figura literaria para el 1 examen
    var esperma0=
    {
        titulo: "Espermatograma",
        categoria: "Espermatograma",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [esperma0];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Espermatograma* =============\\


// ============= * Empieza funcion que carga los datos de Gasometria* =============\\
function cargarGasometria()
{
    // Figura literaria para el 1 examen
    var gaso0=
    {
        titulo: "Gasometría venosa",
        categoria: "Gasometría",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Figura literaria para el 2 examen
    var gaso1=
    {
        titulo: "Gasometría arterial",
        categoria: "Gasometría",
        listo: "A consultar",
        condicion: "A consultar",
        tipoMuestra: "A consultar",
        horarioMuestra: "A consultar"
    }

    // Creo un arreglo para guardar todos las figuras literarias con los datos de los examenes
    var todosLosDatos = [];
    // Le asigno al arreglo las figuras literarias para recorrerlas despues (MANUAL OJO)
    todosLosDatos = [gaso0, gaso1];
    // Creo una variable para saber la cantidad de examenes
    const cantidadDeExamenes= todosLosDatos.length;
    // Ejecuto la funcion para mostrar los examenes con los datos de dicha categoria
    mostrarExamenes(todosLosDatos, cantidadDeExamenes)
}
// ============= * Termina funcion que carga los datos de Gasometria* =============\\


// ============= * Empieza  la funcion que se REUTILIZA para MOSTRAR los EXAMENES y SUS DETALLES* =============\\
function mostrarExamenes(todosLosDatos, cantidadDeExamenes)
{
    //Asigno la cantidad total de examenes al contador
    var totalExamenes = document.querySelector(".js-cantidad");
    totalExamenes.innerText= cantidadDeExamenes;

    // Creo la forma para cerrar el overlay
    cerraModal.addEventListener("click", ()=>{
        overlay.classList.toggle("active");
    });

    // Datos necesarios para actualizar el breadcrumps y el titulo
    // Capturo el breadcrumps
    const breadcrumps = document.querySelector(".js-breadcrumps");
    // Capturo el titulo de la categoria
    const tituloCategoria = document.querySelector(".js-titulo");
    // Asigno los datos al breadcrumps
    breadcrumps.innerText = todosLosDatos[0].categoria;
    // Asigno el titutlo
    tituloCategoria.innerText = breadcrumps.textContent;

    // Creo un ciclo  para crear cada elemento del examen (DEBO SABER CUANTOS SON)
    for(i=0; i<cantidadDeExamenes; i++)
    {
        // Creo Las constantes que seran los elementos a crearse mediante JS
            // Creo una constante que sera el el article del examen
            const examen = document.createElement("article")
            // Creo la columna donde irá el titulo del examen
            const colTitulo = document.createElement("div");
            // Creo la columna donde irá el tiempo de entrega del examen
            const colTiempo = document.createElement("div");
            // Creo la columna donde irá el horario de recoleccion del examen
            const colHorario = document.createElement("div");
            // Creo la columna donde irá el boton para activar el modal
            const colBoton = document.createElement("div");

            // Creo una constante que sera el titulo del examen
            const examenTitulo = document.createElement("h2");
            // Creo una constante que sera el tiempo de entrega del examen
            const examenTiempo =document.createElement("p");
            // Creo una constate que sera el horario de recoleccion para el examen
            const examenHorario = document.createElement("p");
            // Creo una constante que sera el boton de detalles
            const examenBoton = document.createElement("span");


        // Les doy clases a los elementos que se crearan
            // Le doy las clases necesarias  para los estilos de la card
            examen.classList.add("examenEspecifico");
            // Le doy las clases necesarias  para la animacion
            examen.classList.add("js-animado-e");
            // Le doy la clase necesaria a la columna donde irá el titulo
            colTitulo.classList.add("examenEspecifico-ColTitulo");
            // Le doy la clase necesaria a la columna donde irá el tiempo
            colTiempo.classList.add("examenEspecifico-ColTiempo");
            // Le doy la clase necesaria a la columna donde irá el horario
            colHorario.classList.add("examenEspecifico-ColHorario");
            // Le doy la clase necesaria a la columna donde irá el boton
            colBoton.classList.add("examenEspecifico-ColCta");
            // Le doy las clases necesaria para Cargar el titulo
            examenTitulo.classList.add("js-titulo-examen");
            // Le doy la clase necesaria para el estilo del titulo
            examenTitulo.classList.add("titulosCard");
            // Le doy la clase necesaria para cargar el tiempo de entrega
            examenTiempo.classList.add("js-tiempo-examen");
            // Le doy la clase necesaria para el estilo del tiempo de entrega
            examenTiempo.classList.add("parrafo");
            // Le doy la clase necesaria para cargar el horario de entrega
            examenHorario.classList.add("js-horario-examen");
            // Le doy la clase necesaria para cargar los estilos al tiempo de entrega
            examenHorario.classList.add("parrafo");
            // le doy la clase necesearia al boton de detalles para el escuchar de eventos
            examenBoton.classList.add("js-btn-detallesExamen");
            // Le doy la clase necesaria al boton para los detalles esteticos
            examenBoton.classList.add("btn-detallesExamen");


        // Introduzco el elemento en su respectivo contenedor HTML
            // Introduzco el examen creado en su contenedor en el HTML
            document.querySelector(".js-listadoDeExamenes-Contenedor").appendChild(examen);
            // guardo en una variable a los examenes
            var arreExamanesCard = document.querySelectorAll(".examenEspecifico");

            // Introduzco la columna  donde irá el titulo del examen en su contenedor HTML
            arreExamanesCard[i].appendChild(colTitulo);
            // Introduzco la columna donde irá el tiempo de entrega del examen en su contenedor HTML
            arreExamanesCard[i].appendChild(colTiempo);
            // Introduzco la columna donde irá el horario de entrega en su contenedor HTMl
            arreExamanesCard[i].appendChild(colHorario);
            // Introduzco la columna donde irá el boton en su contenedor HTML
            arreExamanesCard[i].appendChild(colBoton);

            // Guardo en una variable a las columnas de los titulos
            var arreColTitulo = document.querySelectorAll(".examenEspecifico-ColTitulo");
            // Guardo en una variable a las columnas de los tiempos de entrega
            var arreColTiempo = document.querySelectorAll(".examenEspecifico-ColTiempo");
            // Guardo en una variable a las columnas donde iras los horarios
            var arreColHorario = document.querySelectorAll(".examenEspecifico-ColHorario");
            // Guardo en una variable a las columnas donde ira el boton
            var arreColBoton = document.querySelectorAll(".examenEspecifico-ColCta");


            // Intrododuzco el titulo en su contenedor HTML
            arreColTitulo[i].appendChild(examenTitulo);
            // Introduzco el tiempo de entrega en su contenedor HTML
            arreColTiempo[i].appendChild(examenTiempo);
            // Introduzco el horario en su contenedor HTML
            arreColHorario[i].appendChild(examenHorario);
            // Introduzco el boton en su contenedor HTML
            arreColBoton[i].appendChild(examenBoton);



            // Creo una variable donde guardare todos los titulos de los examenes
            var arreTituloExamen = document.querySelectorAll(".js-titulo-examen");
            // Creo una variable donde guardare todos los tiempos de entrega de los examenes
            var arreTiempoExamen = document.querySelectorAll(".js-tiempo-examen");
            // Creo una variable donde guardare todos los horarios de los examenes
            var arreHorarioExamen = document.querySelectorAll(".js-horario-examen");
            // Creo una variable donde guardare todos los botoenes de los examenes
            var arreBotonExamen = document.querySelectorAll(".js-btn-detallesExamen");


        // Asigno los datos de los examenes
            // Asigno el titulo
            arreTituloExamen[i].innerText = todosLosDatos[i].titulo;
            // Asigno el tiempo de entrega
            arreTiempoExamen[i].innerText = todosLosDatos[i].listo;
            // asigno el horario de recoleccion
            arreHorarioExamen[i].innerText = todosLosDatos[i].horarioMuestra;
            // Asigno el texto del boton
            arreBotonExamen[i].innerText = "Ver detalles";

        // // Creo los escuchadores de eventos para los botones
        examenBoton.addEventListener("click", (event)=>{
            // Capturo en una variable a el titulo
            var tituloExamenModal= document.querySelector(".js-titulo-examen-modal");
            // Capturo en una variable a la categoria
            var categoriaExamenModal = document.querySelector(".js-categoria-examen-modal");
            // Capturo en una variable al tiempo de entrega
            var tiempoExamenModal = document.querySelector(".js-tiempo-examen-modal");
            // Capturo en una variable a la condicion del examen
            var condicionExamenModal= document.querySelector(".js-condicion-examen-modal");
            // Capturo en una variable a la muestra requerida
            var muestraExamenModal = document.querySelector(".js-muestra-examen-modal");
            // capturo en una variable al horario de extraccion
            var horarioExamenModal= document.querySelector(".js-horario-examen-modal");

            for(i=0; i<arreBotonExamen.length; i++)
            {
                if(event.target===arreBotonExamen[i])
                {
                    // Asigno los datos correspondientes
                    tituloExamenModal.innerText = todosLosDatos[i].titulo;
                    categoriaExamenModal.innerText = todosLosDatos[i].categoria;
                    tiempoExamenModal.innerText= todosLosDatos[i].listo;
                    condicionExamenModal.innerText= todosLosDatos[i].condicion;
                    muestraExamenModal.innerText = todosLosDatos[i].tipoMuestra;
                    horarioExamenModal.innerText = todosLosDatos[i].horarioMuestra;
                    // Muestro el overlay
                    overlay.classList.add("active");
                    // Salgo del ciclo
                    break;
                }
            }
        });
    }
}
// ============= * termina  la funcion que se REUTILIZA para MOSTRAR los EXAMENES y SUS DETALLES* =============\\

// Configuracion del ScrollReveal
// Configuracion general (los elementos se revelaran cuando  el 20% (0.2) aparezca en pantalla)
ScrollReveal().reveal('.js-animado', {interval: 80, delay: 300, scale: 0.85, viewFactor: 0.2, cleanup: true});

// Animacion para los examenes
ScrollReveal().reveal('.js-animado-e', {interval: 80, delay: 150, scale: 0.85, viewFactor: 0.2, cleanup: true});

// Configuracion solo para el carrusel
ScrollReveal().reveal('.js-animado-r', {interval: 80, delay: 300, scale: 0.85, viewFactor: 0.1, reset:true});
ScrollReveal().reveal('#carrusel .js-animado-r', {container: '#carrusel' });


// Guardo el icono del burguer menu en una variable
const burguerMenu = document.querySelector(".js-burguerMenu");
// Guardo en una variable a la barra inferior (contenido) del header
const downHeader = document.querySelector(".js-headerDown");
// Guardo en una variable al menu
const menu = document.querySelector(".js-menu");

// Creo la funcion que mostrará el menu
function hideShowMenu()
{
    // Estiramos/achicamos el background (MenuDown)
    downHeader.classList.toggle("active");
    // activamos/desactivamos animacion del burguer
    burguerMenu.classList.toggle("active");
    // mostramos/ocultamos los elementos del menu
    menu.classList.toggle("active");
}

// Funcion para mostrar el modal de las condiciones para los examenes (espermatograma, Orina 24H)
function mostrarCondiciones()
{
    // Guardo en una variable al overlay
    const overlayCondiciones = document.querySelector(".js-overlay-condiciones");
    // Guardo en una variable al boton que muestra el overlay
    const btnCondicionesAbrir = document.querySelector(".js-instrucciones");
    // Guardo en una variable al boton que cierra el overlay
    const btnCondicionesCerrar = document.querySelector(".js-btnModal-condiciones");

    // Escuchador de eventos para mostrar el modal
    btnCondicionesAbrir.addEventListener("click", ()=>{
        overlayCondiciones.classList.toggle("active");
    });
    // Escuchador de eventos para cerrar el modal
    btnCondicionesCerrar.addEventListener("click",()=>{
        overlayCondiciones.classList.toggle("active");
    });
}

// Configurando el Lazy Loading
// https://github.com/tuupola/lazyload
let imagesLazy = document.querySelectorAll(".js-lazy");
lazyload(imagesLazy);

// Optmizacion JS para que el menu hamburguesa se active solo en las resolucion que aparece
// Catpuramos la resolucion
const mobile = window.matchMedia("screen and (max-width: 767px)");


// Creamos un escuchador de eventos que estara pendiente de cuando la resolucion cambie
// Y le pasamos la funcion que ejecutará
mobile.addListener(optimizacionJS);

// Creamos la funcion necesaria
function optimizacionJS()
{
    // Pregunto si es la resolucion necesaria para activar el burguer button
    if(mobile.matches==true)
    {
        // Añado el escuchador de eventos al icono del menu hamburguesa
        burguerMenu.addEventListener("click", hideShowMenu)
    }
    // Si no es la resolucion necesitada
    else
    {
        // quito el escuchador de eventos
        burguerMenu.removeEventListener("click", hideShowMenu);
    }
}

// Ejecuto la funcion y le paso por parametros la resolucion deseada
optimizacionJS(mobile);