// =========================================
// TEMPORIZADOR DE PROMOCIÓN (30 SEG)
// =========================================

// "let" se usa para variables que sí van a cambiar su valor
let tiempoRestante = 30;

// "const" para elementos del DOM que NO cambian de referencia
const spanSegundos = document.getElementById("promoSegundos");

// Función que se ejecuta cada segundo
function actualizarTemporizador() {
    // Restamos 1 segundo
    tiempoRestante--;

    // Actualizamos el texto en el <span>
    spanSegundos.textContent = tiempoRestante;

    // Cuando llega a 0, cambiamos mensaje y reiniciamos
    if (tiempoRestante === 0) {
        spanSegundos.textContent = "0";

        // Mensaje cuando termina la promo
        alert("La promoción ha terminado... pero viene una nueva ronda");

        // Reiniciamos a 30
        tiempoRestante = 30;
        spanSegundos.textContent = tiempoRestante;
    }
}

// Ejecuta la función cada 1 segundo
setInterval(actualizarTemporizador, 1000);


// =========================================
// BANNER PROMOCIONAL CON BOTÓN CERRAR
// =========================================

// Referencias del DOM
const bannerPromo = document.getElementById("bannerPromo");
const cerrarBanner = document.getElementById("cerrarBanner");

// Evento para cerrar banner
cerrarBanner.addEventListener("click", function () {
    bannerPromo.style.display = "none";
});
