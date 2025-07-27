// Espera hasta que el DOM esté completamente cargado antes de ejecutar el código
window.addEventListener('DOMContentLoaded', function () {
  // Obtiene los elementos del DOM necesarios para el menú
  var menuToggle = document.getElementById('menuToggle');
  var navLinks = document.getElementById('navLinks');

  // Si ambos elementos existen, agrega la funcionalidad para mostrar/ocultar el menú
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active'); // Alterna la clase 'active' para mostrar u ocultar los enlaces
    });
  }

  // Selecciona todos los enlaces que comienzan con '#' (enlaces internos)
  var links = document.querySelectorAll('a[href^=\"#\"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault(); // Previene el comportamiento predeterminado de anclaje
      var targetId = this.getAttribute('href').substring(1); // Obtiene el ID del destino sin '#'
      var target = document.getElementById(targetId); // Busca el elemento destino por su ID
      if (target) {
        // Hace scroll suave hacia el elemento destino
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Obtiene el formulario por su ID
  var form = document.getElementById('registroForm');
  if (form) {
    // Agrega un manejador de evento para el envío del formulario
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Previene el envío estándar del formulario

      // Obtiene los valores ingresados en los campos
      var nombre = document.getElementById('nombre').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('mensaje').value;

      // Verifica que todos los campos estén llenos
      if (nombre !== '' && email !== '' && mensaje !== '') {
        alert('Gracias por registrarte, ' + nombre + '!'); // Muestra un mensaje de agradecimiento
        form.reset(); // Reinicia el formulario
      } else {
        alert('Por favor, completá todos los campos.'); // Advierte al usuario si hay campos vacíos
      }
    });
  }
});
