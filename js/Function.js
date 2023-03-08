window.validarFormulario = function() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    
    if (nombre == "" || correo == "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false;
    }
    
    if (!validarEmail(correo)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return false;
    }
    
    // Si el formulario es válido, enviar los datos al servidor
    document.getElementById("formulario").submit();
  }

