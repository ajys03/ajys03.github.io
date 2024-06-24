const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  // Add this line to store user preference (optional)
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Optional: Check for existing preference on page load
const isDarkMode = localStorage.getItem('darkMode') === 'true';
body.classList.toggle('dark-mode', isDarkMode);