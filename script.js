/* =========================================
   Efecto Máquina de Escribir
   ========================================= */

// Esperamos a que todo el contenido HTML esté cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos el elemento del HTML mediante su ID
    const elementoTexto = document.getElementById("efecto-maquina");
    
    // Guardamos el texto original que escribiste en el HTML
    const textoCompleto = elementoTexto.textContent;
    
    // Vaciamos el texto del HTML para que empiece vacío
    elementoTexto.textContent = "";
    
    let iterador = 0;
    const velocidad = 50; // Velocidad en milisegundos por letra

    // Función que añade una letra cada vez
    function escribir() {
        if (iterador < textoCompleto.length) {
            // Añade el siguiente carácter al contenido actual
            elementoTexto.textContent += textoCompleto.charAt(iterador);
            iterador++;
            // Llama a la función otra vez después de un pequeño retraso
            setTimeout(escribir, velocidad);
        }
    }

    // Iniciamos la animación
    escribir();
});