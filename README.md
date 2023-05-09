# Domjs

Breve explicacion del dom js con unos ejemplos basicos.

-Clonar este repositorio con Git clone <url>
-Abrir el archivo index.html
-Probar como funciona el dom
-Si estas interesado en hacer algun cambio puedes hacer un pull request.




    El DOM (Document Object Model) es una representación en memoria de la estructura de un documento HTML (o XML) en forma de árbol de objetos. Cada elemento HTML del documento se representa en el árbol como un objeto, y los objetos están organizados de tal manera que los elementos contenidos dentro de otros elementos se representan como hijos de sus padres.

Por ejemplo, si tenemos un documento HTML que contiene una etiqueta div que contiene un h1 y un p, el árbol de objetos DOM resultante sería así:

Document
└── html
    └── body
        └── div
            ├── h1
            └── p
El objeto Document es el nodo raíz del árbol, y cada etiqueta HTML del documento se representa como un objeto que es un hijo directo de otro objeto. En este caso, html es un hijo directo de Document, body es un hijo directo de html, y así sucesivamente.

El DOM es importante porque permite a los desarrolladores web manipular la estructura, contenido y estilo de una página HTML utilizando JavaScript. Los desarrolladores pueden acceder a los objetos DOM para leer o cambiar los valores de las propiedades de los elementos HTML, o para agregar, eliminar o modificar elementos HTML en la página.

En resumen, el DOM es una representación estructurada en forma de árbol de objetos de un documento HTML (o XML), que permite a los desarrolladores web manipular la página en tiempo de ejecución utilizando JavaScript.


**document.getElementById()**: Este método permite obtener un elemento del DOM a través de su ID.

**document.querySelector():** Este método permite obtener el primer elemento que coincida con un selector CSS.

**document.querySelectorAll()**: Este método permite obtener todos los elementos que coincidan con un selector CSS.

**element.innerHTML**: Esta propiedad permite obtener o establecer el contenido HTML de un elemento.

**element.textContent:** Esta propiedad permite obtener o establecer el contenido de texto de un elemento.

**element.getAttribute():** Este método permite obtener el valor de un atributo de un elemento.

**element.setAttribute():** Este método permite establecer el valor de un atributo de un elemento.

**element.classList:** Esta propiedad permite acceder a la lista de clases de un elemento y manipularla.

**element.style:** Esta propiedad permite acceder a los estilos CSS de un elemento y manipularlos.

**element.appendChild():** Este método permite agregar un nodo hijo al final de la lista de hijos de un elemento.
**
**element.removeChild():** **Este método permite eliminar un nodo hijo de un elemento.

**element.addEventListener():** Este método permite agregar un evento a un elemento y especificar una función para manejar el evento.


# EVENTOS:



click: Este evento se dispara cuando el usuario hace clic en un elemento.

mouseover: Este evento se dispara cuando el usuario mueve el cursor sobre un elemento.

mouseout: Este evento se dispara cuando el cursor del usuario sale de un elemento.

keydown: Este evento se dispara cuando el usuario presiona una tecla en el teclado.

keyup: Este evento se dispara cuando el usuario suelta una tecla en el teclado.

submit: Este evento se dispara cuando el usuario envía un formulario.

load: Este evento se dispara cuando el documento y todos sus recursos asociados (imágenes, hojas de estilo, scripts, etc.) han terminado de cargarse.

unload: Este evento se dispara cuando el usuario abandona la página.

resize: Este evento se dispara cuando la ventana del navegador se redimensiona.

scroll: Este evento se dispara cuando el usuario desplaza la página hacia arriba o hacia abajo.

focus: Este evento se dispara cuando un elemento recibe el foco.

blur: Este evento se dispara cuando un elemento pierde el foco.

change: Este evento se dispara cuando el valor de un elemento de formulario (como un input, select o textarea) cambia.

input: Este evento se dispara cuando el valor de un elemento de formulario (como un input, select o textarea) cambia, pero se dispara más frecuentemente que el evento change.

Estos son solo algunos de los eventos DOM más comunes en JavaScript. Hay muchos otros eventos disponibles, dependiendo del tipo de elemento y la acción que deseas realizar.