const btn = document.getElementById("cambiarColor");

		// Definimos una función para cambiar el color de fondo
		function cambiarColor() {
			// Generamos un número aleatorio entre 0 y 255 para cada uno de los colores RGB
			const red = Math.floor(Math.random() * 256);
			const green = Math.floor(Math.random() * 256);
			const blue = Math.floor(Math.random() * 256);

			// Cambiamos el color de fondo de la página utilizando el estilo CSS
			document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
		}

		// Añadimos un evento "click" al botón para que llame a la función "cambiarColor"
		btn.addEventListener("click", cambiarColor);  



  //Prueba ACCEDER A UN ELEMENTO DEL DOM EN HTML//

