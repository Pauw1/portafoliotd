// Espera a que el documento esté listo (sintaxis de jQuery)
$(document).ready(function(){

    // --- REQUISITO JQUERY: Manejo de eventos del DOM ---
    // Smooth scroll para los enlaces del navbar
    $('.navbar-nav .nav-link').on('click', function(event) {
        
        // Asegúrate de que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Prevenir el comportamiento de clic predeterminado
            event.preventDefault();

            // Guardar el hash
            var hash = this.hash;

            // Animar el scroll (800 milisegundos)
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 // Ajuste de 70px por el navbar fijo
            }, 800);
        }
    });

    // Activar el "SpyScroll" de Bootstrap para resaltar el enlace del menú
    // según la sección en la que te encuentras.
    // (Esto es de Bootstrap, pero se inicializa aquí)
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-principal',
        offset: 75 // Ajustar offset
    });

});


// --- REQUISITO JAVASCRIPT: Eventos sencillos ---
// Validación del formulario de contacto (JavaScript Puro)

// 1. Seleccionar el formulario y el campo de feedback
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// 2. Añadir un "event listener" para el evento 'submit'
contactForm.addEventListener('submit', function(event) {
    
    // Prevenir el envío real del formulario (para este ejemplo)
    event.preventDefault(); 
    
    // 3. Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 4. Validación simple
    if (name === "" || email === "" || message === "") {
        // Mostrar mensaje de error
        formFeedback.textContent = "Por favor completa todos los campos.";
        formFeedback.className = "error"; // Aplica la clase CSS 'error'
    } else {
        // Mostrar mensaje de éxito
        formFeedback.textContent = "¡Mensaje enviado con éxito! (Simulación)";
        formFeedback.className = "success"; // Aplica la clase CSS 'success'
        
        // Limpiar el formulario
        contactForm.reset();
    }
});