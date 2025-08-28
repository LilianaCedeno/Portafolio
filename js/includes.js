// Cargar banner
fetch('includes/banner.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('banner').innerHTML = data;
  })
  .catch(err => console.error('Error cargando banner:', err));

// Cargar footer
fetch('includes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(err => console.error('Error cargando footer:', err));