// Obtenemos el botón por su ID
const btn = document.getElementById("agregarItem");

// Definimos una función para añadir un nuevo elemento de lista
function agregarItem() {
    // Obtenemos la lista por su ID
    const lista = document.getElementById("listaCompras");

    // Creamos un nuevo elemento de lista
    const nuevoItem = document.createElement("li");

    // Le asignamos un texto al nuevo elemento
    nuevoItem.innerText = "Pan";

    // Añadimos el nuevo elemento al final de la lista utilizando el método "appendChild()"
    lista.appendChild(nuevoItem);
}

// Añadimos un evento "click" al botón para que llame a la función "agregarItem"
btn.addEventListener("click", agregarItem);1    