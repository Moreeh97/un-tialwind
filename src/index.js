    const toggleBtn = document.getElementById('toggle-theme');
    toggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      toggleBtn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
    });