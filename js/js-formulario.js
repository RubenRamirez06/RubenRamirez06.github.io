document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellidos = document.getElementById('apellidos').value;
    if(apellidos.length == 0) {
      alert('No has escrito nada en los apellidos');
      return;
    }
    function validarFormulario(evento) {
      var correo = document.getElementById("correo").value;
      if (!validarCorreo(correo)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return false;
      }
      return true;
    }
  
    function validarCorreo(correo) {
      // Expresión regular para validar el formato de correo electrónico
      var expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return expresion.test(correo);
    }
  


}
