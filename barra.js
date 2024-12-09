document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
            // Desplazamiento hacia abajo
            navbar.classList.add('navbar-hidden');
        } else if (currentScrollTop < lastScrollTop) {
            // Desplazamiento hacia arriba
            navbar.classList.remove('navbar-hidden');
        }
        
        lastScrollTop = currentScrollTop;
    });
});