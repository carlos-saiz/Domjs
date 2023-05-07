  // Accediendo a elementos del DOM
  const title = document.getElementById("title");
  const para = document.querySelector("p");

  // Manipulando el contenido del DOM
  title.textContent = "Hola, Raul!";
  // Creando nuevos elementos
  const newPara = document.createElement("p");
  newPara.textContent = "Este es un nuevo párrafo.";            
  document.body.appendChild(newPara);


  // Eliminando elementos existentes
  const oldPara = document.querySelector(".old");
  document.body.removeChild(oldPara);




  //Prueba ACCEDER A UN ELEMENTO DEL DOM EN HTML//

