let discotecaActiva = false;
let intervaloLuces;

document.getElementById("modo-discoteca").addEventListener("click", () => {
  discotecaActiva = !discotecaActiva;

  if (discotecaActiva) {
    document.getElementById("modo-discoteca").textContent = "Desactivar modo discoteca 🛑";
    intervaloLuces = setInterval(() => {
      const colorFondo = `hsl(${Math.floor(Math.random() * 360)}, 100%, 15%)`;
      const colorTexto = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
      document.body.style.backgroundColor = colorFondo;
      document.body.style.color = colorTexto;
    }, 500); // Cambia cada medio segundo
  } else {
    clearInterval(intervaloLuces);
    document.getElementById("modo-discoteca").textContent = "Activar modo discoteca 🪩";
    document.body.style.backgroundColor = "#0f0f0f";
    document.body.style.color = "#fff";
  }
});
