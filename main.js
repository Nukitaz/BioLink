document.addEventListener('DOMContentLoaded', () => {
  // 1. Agregar el botón 'Contáctame' dinámicamente a la navegación principal si no existe
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !document.querySelector('.btn-contact-nav')) {
    const contactBtn = document.createElement('a');
    contactBtn.href = 'contacto.html';
    contactBtn.className = 'social-btn btn-contact-nav';
    contactBtn.textContent = 'Contáctame ✉️';
    contactBtn.style.marginLeft = '1rem';
    navLinks.appendChild(contactBtn);
  }

  // 2. Manejo de envío e interacciones del formulario
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando... ⏳';
      }
    });
  }
});
