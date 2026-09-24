document.addEventListener('DOMContentLoaded', () => {
  // 1. Agregar el botón 'Contáctame' dinámicamente a la navegación si no existe
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !document.querySelector('.btn-contact-nav')) {
    const contactBtn = document.createElement('a');
    contactBtn.href = 'contacto.html';
    contactBtn.className = 'social-btn btn-contact-nav';
    contactBtn.textContent = 'Contáctame ✉️';
    contactBtn.style.marginLeft = '1rem';
    navLinks.appendChild(contactBtn);
  }

  // 2. Envío de datos a la API de Google Apps Script
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
      event.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando... ⏳';

      // Reemplaza esta URL con la URL de despliegue que te dio Google Apps Script
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzdDvddeNn8ObviUQ5AxgsLzfzT9VYPRpfqUBHKmOlz4KeMnfZ3Xvj7ifGkAANfjdh5qg/exec';

      const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        asunto: document.getElementById('asunto').value,
        mensaje: document.getElementById('mensaje').value
      };

      try {
        // Se utiliza mode: 'no-cors' para permitir llamadas locales a Google Apps Script sin bloqueos CORS
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        alert('¡Mensaje enviado correctamente! Tus datos han sido registrados.');
        contactForm.reset();
      } catch (error) {
        alert('Hubo un error al intentar enviar el formulario.');
        console.error('Error:', error);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});