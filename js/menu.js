document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (toggleButton && navLinks) {
        // Abrir/cerrar con el botón hamburguesa
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar al hacer click en una opción
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error("No se encontró el botón o el menú");
    }
});
