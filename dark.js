document.addEventListener('DOMContentLoaded', function () {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
  
    // Recuperar la preferencia guardada
    const savedMode = localStorage.getItem('dark-mode');
  
    if (savedMode === 'enabled') {
      enableDarkMode();
      darkModeSwitch.checked = true; // Asegurar que el interruptor esté activo
    }
  
    darkModeSwitch.addEventListener('change', function () {
      if (darkModeSwitch.checked) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    function enableDarkMode() {
      body.classList.add('dark-mode');
      document.querySelector('.navbar').classList.add('dark-mode');
      document.querySelectorAll('.carousel-controls button').forEach(btn => btn.classList.add('dark-mode'));
      document.querySelectorAll('.carousel-title').forEach(title => title.classList.add('dark-mode'));
      document.querySelector('footer').classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    }
  
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      document.querySelector('.navbar').classList.remove('dark-mode');
      document.querySelectorAll('.carousel-controls button').forEach(btn => btn.classList.remove('dark-mode'));
      document.querySelectorAll('.carousel-title').forEach(title => title.classList.remove('dark-mode'));
      document.querySelector('footer').classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
  