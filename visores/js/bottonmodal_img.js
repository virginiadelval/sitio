
// JavaScript para manejar el modal
function openModal() {
    document.getElementById('imageModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Función para habilitar el zoom y navegación dentro de la imagen
function enableZoom() {
    const image = document.getElementById('zoomImage');
    const modal = image.parentElement;

    if (image.style.transform === 'scale(2)') {
        // Restablecer imagen al tamaño normal
        image.style.transform = 'scale(1)';
        image.style.cursor = 'zoom-in';
        modal.style.cursor = 'default';
        image.removeEventListener('mousedown', startDragging);
        image.removeEventListener('mousemove', dragImage);
        image.removeEventListener('mouseup', stopDragging);
    } else {
        // Activar zoom
        image.style.transform = 'scale(2)';
        image.style.cursor = 'move';
        modal.style.cursor = 'grab';

        // Variables para arrastrar
        let isDragging = false;
        let startX = 0;
        let startY = 0;

        function startDragging(e) {
            isDragging = true;
            startX = e.clientX - image.offsetLeft;
            startY = e.clientY - image.offsetTop;
            modal.style.cursor = 'grabbing';
        }

        function dragImage(e) {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.clientX - startX;
            const y = e.clientY - startY;
            image.style.transform = `translate(${x}px, ${y}px) scale(2)`;
        }

        function stopDragging() {
            isDragging = false;
            modal.style.cursor = 'grab';
        }

        // Agregar eventos para arrastrar
        image.addEventListener('mousedown', startDragging);
        image.addEventListener('mousemove', dragImage);
        image.addEventListener('mouseup', stopDragging);
    }

    // Agregar transición para suavizar el zoom
    image.style.transition = 'transform 0.3s ease';
}

// Función para alternar pantalla completa
function toggleFullscreen() {
    const modal = document.getElementById('imageModal');
    if (!document.fullscreenElement) {
        // Entrar en modo fullscreen
        if (modal.requestFullscreen) {
            modal.requestFullscreen();
        } else if (modal.webkitRequestFullscreen) {
            modal.webkitRequestFullscreen(); // Safari
        } else if (modal.msRequestFullscreen) {
            modal.msRequestFullscreen(); // IE/Edge
        }
    } else {
        // Salir de fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen(); // Safari
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen(); // IE/Edge
        }
    }
}


// Ejemplo de donde va el Modal

// function popupContentESN(feature) {
//     return (
//         "<div id='Estilo1'><h3>Modelo de Cosecha con <br> Excedentes en Suelos Naturales</h3> </div>" +
//         "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
//         "<div id='Estilo3a'>" +
//         "<b> Precipitación media : </b>" + feature.properties.precipitac + " mm" + "<br>" + "<br>" +

//         "<b> Precipitación calculada :</b>" + feature.properties.ppm75 + " mm" + "<br>" +
//         "<i> Precipitación con el 75% de probabilidad de ocurrencia</i>" +
//         "<hr class='hrx' align='left' noshade='noshade' size='1' width='100%' />" +
//         "<b> Volumen Consumo : </b>" + feature.properties.ECSN_VolDe + " m3" + "<br>" +
//         "<i> Volumen total consumido para uso doméstico al año </i>" + "<br>" + "<br>" +

//         " <b> VCU : </b>" + feature.properties.ECSN_VCU + " Litros/m2.año" + "<br>" +
//         "<i> Volumen captado unitario por cada metro cuadrado de superficie impermeable</i>" + "<br>" + "<br>" +

//         "<b> Superficie de Captación : </b>" + feature.properties.ECSN_SupCa + " m2" + "<br>" +
//         "<i> Superficie de captación total </i>" + "<br>" + "<br>" +

//         " <b> Volumen Reservorio : </b>" + feature.properties.ECSN_VolRe + " m3" + "<br>" +
//         "<i> Volumen adoptado del reservorio </i>" + "<br>" + "<br>" +

//         "<button onclick='openModal()'>Ver Imagen</button>" + // Botón para abrir el modal
//         "</div>" +
//         "<div id='imageModal' style='display:flex; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); justify-content:center; align-items:center;'>" +
//         "  <div style='position:relative; text-align:center;'>" +
//         "<div style='overflow:hidden; width:90%; max-height:80%; margin:auto; position:relative;'>" +
//         "    <img src='./images/exedentes_suelonatural.png' alt='Imagen' id='zoomImage' style='max-width:100%; cursor:zoom-in;' onclick='enableZoom()'/>" +
//         "    <br><button onclick='closeModal()' style='margin-top:10px;'>Cerrar</button>" +
//         "<button onclick='toggleFullscreen()' style='margin-top:10px; '>Pantalla Completa</button>" +
//         "  </div>" +
//         " <br>" +

//         "</div>" +
//         "</div>"
//     )
// };
