# Página web de Vitales Laboratorios
Esta página web fue desarrollada por <a href="https://github.com/WuilfredoAz">@WuilfredoAz</a> utilizando como herramientas:

- HTML
- CSS
- Vanilla JavaScript

Cabe destacar que para la implementación de las funciones de "Lazy Loading" (Carga diferedida), y las animaciones al hacer Scroll se usaron las siguientes librerias:

- <a href="https://scrollrevealjs.org/">Scroll Reveal (Animaciones)</a>
- <a href="// https://github.com/tuupola/lazyload">Lazy Loading (Carga diferida)</a>

## Requisitos para despliegue en servidor
El sitio web a sido desarrollado de tal forma que solo sea necesario hacer un `pull` de los archivos que se encuentran en el presente repositorio en el servidor para su correcta visualización.

<div style="background:#f9fdc0;border-radius:5px;padding:10px 20px;color:#000">

### Advertencia
Si solo se va a visualizar el sitio web en local, debe tener en cuenta que:

- Todas los archivos HTML cuentan con la etiqueta:
    ```html
    <base href="https://vitaleslaboratorios.com/">
    ```
    Por tanto todas las rutas de: recursos (imágenes, iconos, logos, etc), HTML, CSS y JavaScript son relativas a él. Entonces; de presentarse el caso de un cambio de dominio o de visualizar la página en un servidor local habria que tener esto en consideración y modificar dicha etiqueta o comentarla.


- Los plugins agregados (ScrollReveal y Lazy Load) fueron implementados través de un CDN para mejorar la velocidad de carga del sitio. Si se a de necesitar la visualización de la página en un entorno offline es posible que no se muestre correctamente al 100%. Habría que descargar los plugins y modificar las rutas de ambos plugins en todas las páginas HTML.

</div>

## Configurar los datos de la empresa en la página web
Entre todos los datos mostrados en el sitio web, existen un conjunto de ellos que están desplegados por todas las páginas, a través de JavaScript, los cuales son:

- Dirección.
- Link a Google Maps.
- Número de teléfono.
- Link a WhastApp.
- Link a Instagram.
- Link a Facebook.
- Correo electrónico
- Link para CTA de cotizaciones.
- Link para CTA de reactivos.
- Link para CTA de encuestas.
- Copyright.
- Horario de trabajo.

Estos datos se encuentran en el archivo "`scripts.js`" (en su versión normal o minificada). Y por defecto cuentan con los siguientes datos de prueba:

```javascript
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
```

### Pasos para cambiar los datos de la página

1. Situarse en el archivo "`scripts.js`" ubicado en la carpeta "js" del proyecto.

2. Ubicar los datos mostrados anteriormente en el archivo "`scripts.js`".

3. Cambiar los datos necesarios.

4. Minificar el archivo y sustituir el minificado existente.
    >Nota: El proyecto usa el archivo minificado. El normal esta incluido en la carpeta por si se necesita modificar algo o seguir desarrollando en el sitio.

5. Comprobar que los cambios surtieron efecto.
    >Nota: Es posible que los cambios no se visualicen al instante si el proyecto ya se encuentra en el servidor, esto por la configuración que tiene del caché. Por ende se recomienda desactivar el caché o visualizar la página en modo incógnito para testar si los cambios se implementaron correctamente.

## Temas de colores
El sitio web cuenta con 2 temas de colores:

- Azul (Por defecto)
- Morado

El azul es el que está implementado por defecto. Sin embargo de querer revisar el morado habría que:

1. Situarse en la carpeta "css" del proyecto.

2. Ubicar el archivo "styles.morado.css"

3. Minificar dicho archivo.

4. Cambiarle nombre al archivo minificado a "styles.min.css"

5. Copiar y pegar el archivo en la carpeta CSS.

## ¿Cómo gestionar las card de la seccion de "servicios"?
En la sección "Servicios" del index se encuentra un carrusel (slider) con todos los servicios que ofrece la empresa. De ser necesario gestinar dicha sección para Elinar, agregar o editar los valores se debe:

### Agregar elemento
1. Ubicarse en el archivo "`index.html`".

2. Situarse en la línea 205 en adelante o dentro del siguiente contenedor:
    ```html
    <div id="carrusel" class="js-filaCarrusel serviciosContenido-carrusel-container">
        <!-- Tarjetas -->
    </div>
    ```
3. Agregar una tarjeta con la siguiente estructura dentro del contenedor anteriormente nombrado:

    ```html
    <article class="js-animado-r js-serviciosCard serviciosCard">
        <picture class="serviciosIcono">
            <img class="js-lazy" src="img/pixel.gif" data-src="img/icons/serv_4.png" alt="Exámenes médicos" />
        </picture>
        <div class="serviciosTexto">
            <h2 class="titulosCard">Exámenes médicos</h2>
            <p class="parrafo">
                Tenemos para ti una amplia lista de análisis de sangre, orina y heces.
            </p>
        </div>
    </article>
    ```

    Donde se modificará:
    - El atributo "`data-src`" de la imágenen con la ruta del icono a utilizar
    - El valor del atributo "`alt`" con un nombre que identifique a la imágen.
    - El contenido de la etiqueta `<h2>` con la clase `titulosCard` con el título a usar.
    - El contenido de la etiqueta `<p>` con la clase `parrafo` con la descripción del servicio.
4. Guardar los cambios realizados
5. Comprobar los cambios.

### Eliminar un elemento
1. Ubicarse en el archivo "`index.html`".

2. Situarse en la línea 205 en adelante o dentro del siguiente contenedor:
    ```html
    <div id="carrusel" class="js-filaCarrusel serviciosContenido-carrusel-container">
        <!-- Tarjetas -->
    </div>
    ```
3. Ubicar la tarjeta que posee la siguiente estructura con el servicio a eliminar:

    ```html
    <article class="js-animado-r js-serviciosCard serviciosCard">
        <picture class="serviciosIcono">
            <img class="js-lazy" src="img/pixel.gif" data-src="img/icons/serv_4.png" alt="Exámenes médicos" />
        </picture>
        <div class="serviciosTexto">
            <h2 class="titulosCard">Exámenes médicos</h2>
            <p class="parrafo">
                Tenemos para ti una amplia lista de análisis de sangre, orina y heces.
            </p>
        </div>
    </article>
    ```

4. Eliminar la tarjeta (etiqueta html `article`) con todo su contenido.
5. Guardar los cambios realizados
6. Comprobar los cambios.

### Editar un elemento
1. Ubicarse en el archivo "`index.html`".

2. Situarse en la línea 205 en adelante o dentro del siguiente contenedor:
    ```html
    <div id="carrusel" class="js-filaCarrusel serviciosContenido-carrusel-container">
        <!-- Tarjetas -->
    </div>
    ```
3. Ubicar la tarjeta que posee la siguiente estructura con el servicio a editar:

    ```html
    <article class="js-animado-r js-serviciosCard serviciosCard">
        <picture class="serviciosIcono">
            <img class="js-lazy" src="img/pixel.gif" data-src="img/icons/serv_4.png" alt="Exámenes médicos" />
        </picture>
        <div class="serviciosTexto">
            <h2 class="titulosCard">Exámenes médicos</h2>
            <p class="parrafo">
                Tenemos para ti una amplia lista de análisis de sangre, orina y heces.
            </p>
        </div>
    </article>
    ```

4. Editar el contenido o atributos (de tratarse de la imagen) necesarios.
5. Guardar los cambios realizados
6. Comprobar los cambios.

## ¿Cómo gestionar las preguntas de la seccion de "Preguntas frecuentes"?
Existen 4 categorias para las preguntas frecuentes, las cuales son:
- Sangre
- Consejos
- Muestras
- Resultados

Y dentro del HTML existen 4 elementos contenedores:

```html
<div class="js-faqs faqs-Bloque">
    <!-- FAQS -->
</div>
```

Estos elementos estan enlazados por JavaScript con los filtros implementados de forma que: el primer contenedor esta referenciado con JavaScript con el primer botón (Sangre), el segundo contenedor esta relacionado con el segundo botón (Consejos) y asi sucesivamente.

De darse el caso que Agregar una nueva categoria, eliminarla o agregar una nueva pregunta habria que:

### Agregar una nueva pregunta

1. Ubicarse en el archivo "`index.html`".

2. Situarse en la línea 380 en adelante o dentro del siguiente contenedor:
    ```html
    <div class="js-faqs faqs-Bloque">
        <!-- FAQS -->
    </div>
3. Agregar la nueva card que contendrá la nueva "pregunta frecuente" con la siguiente estructura":
    >Nota: El orden en el que se coloque será el orden en el que se mostrará.

```html
<article class="js-animado faqsCard">
    <h2 class="tituloPregunta">TITULO DE LA PREGUNTA</h2>
    <p class="parrafo">
        RESPUESTA A LA PREGUNTA
    </p>
</article>
```

4. Reemplazar los valores de correspondiente a la "pregunta frecuente".
5. Guardar los cambios realizados
6. Comprobar los cambios.

### Eliminar una pregunta

1. Ubicarse en el archivo "`index.html`".

2. Situarse en la línea 380 en adelante o dentro del siguiente contenedor:
    ```html
    <div class="js-faqs faqs-Bloque">
        <!-- FAQS -->
    </div>
3. Ubicar la siguiente card (con la siguiente estructura HTML) que contiene la pregunta a eliminar.

```html
<article class="js-animado faqsCard">
    <h2 class="tituloPregunta">TITULO DE LA PREGUNTA</h2>
    <p class="parrafo">
        RESPUESTA A LA PREGUNTA
    </p>
</article>
```

4. Eliminar la card.
5. Guardar los cambios realizados
6. Comprobar los cambios.

### Agregar una nueva categoría de preguntas

1. Ubicarse en el archivo "`index.html`".

2. Ubicarse en en el contenedor ubicado en la linea 373.
    ```html
    <div class="js-padreFiltro faqsFiltros">
        <!-- filtros -->
    </div>
    ```

3. Crear el boton para el filtro necesario con la siguiente estructura:

    ```html
    <span  class="js-animado js-filtro faqsFiltros-btn active">TITULO</span>

    ```

4. Crear el contenedor necesario que tendrá a todas las preguntas dentro de él.
    >Nota: Para estar vinculado con el botón creado anteriormente debe tener el mismo orden del boton generado con anterioridad. Ex: Si el botón en el último, el contenedor deberá ser también el último.

    ```html
    <div class="js-faqs faqs-Bloque active">
    </div>
    ```

5. Agregar la nueva card que contendrá la nueva "pregunta frecuente" con la siguiente estructura":
    >Nota: El orden en el que se coloque será el orden en el que se mostrará.

    ```html
    <article class="js-animado faqsCard">
        <h2 class="tituloPregunta">TITULO DE LA PREGUNTA</h2>
        <p class="parrafo">
            RESPUESTA A LA PREGUNTA
        </p>
    </article>
    ```
5. Guardar los cambios realizados
6. Comprobar los cambios.

### Eliminar una categoría de preguntas

1. Ubicarse en el archivo "`index.html`".

2. Ubicarse en en el contenedor ubicado en la linea 373.
    ```html
    <div class="js-padreFiltro faqsFiltros">
        <!-- filtros -->
    </div>
    ```

3. Eliminar el boton del filtro necesario con la siguiente estructura:

    ```html
    <span  class="js-animado js-filtro faqsFiltros-btn active">TITULO</span>

    ```

4. Eliminar el contenedor necesario que tendrá a todas las preguntas dentro de él.
    >Nota: Para estar vinculado con el botón creado anteriormente debe tener el mismo orden del boton generado con anterioridad. Ex: Si el botón en el último, el contenedor deberá ser también el último.

    ```html
    <div class="js-faqs faqs-Bloque active">
        <!-- Preguntas a eliminar -->
    </div>
    ```

5. Guardar los cambios realizados
6. Comprobar los cambios.


## ¿Cómo gestionar los exámenes mostrados?
Los exámenes mostrados son los disponibles a la fecha de 6/MAY/2020. Para gestionarlos hay que tener en cuenta que los mismos son mostrados dinámicamente a través de JavaScript donde por cada categoria existe una función que carga dichos exámenes, y los mismos (los exámenes) estan representados por objetos literales.

Las funciones están identificadas como:

`cargarHematologias()` = Exámenes de Hematologias</br>
`cargarSerologias()` = Exámenes de Serologias</br>
`cargarQSanguinea()` = Exámenes de Química Sanguinea</br>
`cargarMTumorales()` = Exámenes de Marcadores Tumorales</br>
`cargarHormonas()` = Exámenes de Hormonas</br>
`cargarInmunologia()` = Exámenes de Inmunologia</br>
`cargarUroanalisis()` = Exámenes de Uroanalisis</br>
`cargarCoprologia()` = Exámenes de Coprologia</br>
`cargarQUCasual()` = Exámenes de Quimica urinaria (casual)</br>
`cargarQUDia()` = Exámenes de Quimica urinaria (24H)</br>
`cargarEspermatograma()` = Exámenes de Espermatograma</br>
`cargarGasometria()` = Exámenes de Gasometria</br>




### Agregar un nuevo examen
1. Ubicar el archivo "`script.js`" dentro de la carpeta "js".
2. Ubicar las función necesaria correspondiente al tipo exámen a agregar.
3. Crear un nuevo objeto literario **DE ULTIMO** con la siguiente estructura:
    ```javascript
    var nombre[numero]=
    {
        titulo: "datos",
        categoria: "datos",
        listo: "datos",
        condicion: "datos",
        tipoMuestra: "datos",
        horarioMuestra: "datos"
    }

    // Donde
    // nombre => Corresponde al nombre que llevan todos los elementos de dicha categoria
    // [numero] => Corresponde a la númeración u orden que tienen los examenes

    // Ejemplo de un 2 examen de espermatograma

    var esperma1=
    {
        titulo: "datos",
        categoria: "datos",
        listo: "datos",
        condicion: "datos",
        tipoMuestra: "datos",
        horarioMuestra: "datos"

    // En este caso seria erperma1 porque se empieza a contar desde el 0 (cero)
    ```
4. Ubicar la variable  "`todosLosDatos`" dentro de la misma función y agregar dicho objeto literario al arreglo de la siguiente manera (sin borrar ni modificar los anteriores o la estructura):

    ```javascript
    todosLosDatos = [esperma0, esperma1];
    ```

5. Guardar los cambios realizados
6. Comprobar los cambios.

### Editar un examen
1. Ubicar el archivo "`script.js`" dentro de la carpeta "js".
2. Ubicar las función necesaria correspondiente al tipo exámen a agregar.
3. Ubicar el objeto literario **que contiene** los datos a modificar. Ex:
    ```javascript
    var esperma1=
    {
        titulo: "datos",
        categoria: "datos",
        listo: "datos",
        condicion: "datos",
        tipoMuestra: "datos",
        horarioMuestra: "datos"

    ```
4. Modificar los datos necesarios.
5. Guardar los cambios realizados.
6. Comprobar los cambios.

### Eliminar un examen
1. Ubicar el archivo "`script.js`" dentro de la carpeta "js".
2. Ubicar las función necesaria correspondiente al tipo exámen a agregar.
3. Ubicar  el objeto literario **que se va a eliminar** con la siguiente estructura:
    ```javascript
    var esperma1=
    {
        titulo: "datos",
        categoria: "datos",
        listo: "datos",
        condicion: "datos",
        tipoMuestra: "datos",
        horarioMuestra: "datos"
    ```
4. Eliminar todo el objeto literario con sus datos.
5. Ubicar la variable  "`todosLosDatos`" dentro de la misma función y **eliminar** dicho objeto literario al arreglo de la siguiente manera (sin borrar ni modificar los anteriores o la estructura):

    ```javascript
    todosLosDatos = [esperma0];
    ```

6. Guardar los cambios realizados
7. Comprobar los cambios.