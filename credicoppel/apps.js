
    function mostrarProducto() {
      var select = document.getElementById("product-select");
      var imagen = document.getElementById("product-image");
      var precio = document.getElementById("product-price");
      var opcionSeleccionada = select.options[select.selectedIndex];
      var urlImagen = opcionSeleccionada.getAttribute("data-image");
      var productPrice = opcionSeleccionada.getAttribute("data-price");
      imagen.src = urlImagen;
      precio.innerText = "Precio: $" + productPrice;
      function mostrarProducto() {
  var select = document.getElementById("product-select");
  var imagen = document.getElementById("product-image");
  var precio = document.getElementById("product-price");
  var cantidad = document.getElementById("product-quantity");
  
  var opcionSeleccionada = select.options[select.selectedIndex];
  var urlImagen = opcionSeleccionada.getAttribute("data-image");
  var productPrice = opcionSeleccionada.getAttribute("data-price");
  
  var cantidadPiezas = cantidad.value; // Obtenemos el valor del slider
  
  imagen.src = urlImagen;
  precio.innerText = "Precio: $" + (productPrice * cantidadPiezas); // Calculamos el precio total
  
  // Actualizar la cantidad de piezas mostrada
  var cantidadLabel = document.getElementById("product-quantity-label");
  cantidadLabel.innerText = "Cantidad: " + cantidadPiezas + " piezas";
}

    }
  