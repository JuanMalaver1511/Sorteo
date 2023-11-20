document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      if (username === 'juanmalaver1511@gmail.com' && password === '1234') {
        alert('Inicio de sesión exitoso');
        window.location.href = 'sorteo.html';
      } else {
        alert('Nombre de usuario o contraseña incorrectos');
      }
    });
  });
  