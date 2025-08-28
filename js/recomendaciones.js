document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recomendacionForm");
  const lista = document.getElementById("listaRecomendaciones");

  // Recomendaciones ficticias iniciales
  const recomendaciones = [
    { empresa: "TechSolutions Ltda.", texto: "Soft Tech QA nos ayudó a mejorar nuestros procesos de QA en un 40% con sus estrategias de automatización." },
    { empresa: "InnovaWeb SpA", texto: "Gracias a su experiencia en pruebas automatizadas, logramos reducir errores en producción y optimizar nuestras entregas." },
    { empresa: "Global Apps Corp.", texto: "Su equipo fue clave en el diseño y validación de nuestras aplicaciones de escritorio. Profesionales altamente recomendados." }
  ];

  // Renderizar recomendaciones
  function renderizarRecomendaciones() {
    lista.innerHTML = "<h2>Recomendaciones Recibidas:</h2>";
    recomendaciones.forEach(rec => {
      const div = document.createElement("div");
      div.classList.add("recomendacion");
      div.innerHTML = `
        <h3>${rec.empresa}</h3>
        <p>${rec.texto}</p>
      `;
      lista.appendChild(div);
    });
  }

  // Evento para agregar nuevas recomendaciones
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const empresa = document.getElementById("empresa").value.trim();
    const texto = document.getElementById("recomendacion").value.trim();

    if (empresa && texto) {
      recomendaciones.push({ empresa, texto });
      renderizarRecomendaciones();
      form.reset();
    }
  });

  // Render inicial
  renderizarRecomendaciones();
});