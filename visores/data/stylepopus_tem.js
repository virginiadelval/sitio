
////////////////////Temperatura///////////////////////7
// Contenido del popup para cada feature para Temperatura
function popupContentTEM(feature) {
    return (
        "<div id='Estilo1'><h3>Valores proyectados por Escenario y Periodo</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Periodo </b>" + feature.properties.proyeccion + "<br>" +
        "<b> Escenario    </b>" + feature.properties.esc + " de CC <br>" +
        "<b> Valor Proyectado   : </b>" + feature.properties.val + " °C <br>" +
                
        "</div>"
    );
}

function getColorTem(val) {
    if (val >= -0.47 && val <= -0.5) return "#ffffff";
    if (val > -0.5 && val <= 1) return "#f6ebbe";
    if (val > 1 && val <= 1.5) return "#f9d88b";
    if (val > 1.5 && val <= 2) return "#f6b65e";
    if (val > 2 && val <= 2.5) return "#fd9b43";
    if (val > 2.5 && val <= 3) return "#fa7b36";
    if (val > 3 && val <= 4) return "#f45629";
    if (val > 4 && val <= 5) return "#ea3421";
    if (val > 5 && val <= 6) return "#d41a23";
    if (val > 6 && val <= 7) return "#bd0026";
    if (val > 7 ) return "#bd0026";
    return "#000000"; // Color por defecto si no coincide
}

function filtrarYAplicarColor(features, esc, proyeccion) {
    return features
        .filter(feature => 
            feature.properties.esc === esc && 
            feature.properties.proyeccion === proyeccion
        )
        .map(feature => {
            const color = getColorTem(feature.properties.val);
            return {
                ...feature,
                properties: {
                    ...feature.properties,
                    color: color
                }
            };
        });
}

const resultadotemMedia45Actual = filtrarYAplicarColor(temMedia.features, "45", "actual");
const resultadotemMedia45FC = filtrarYAplicarColor(temMedia.features, "45", "Futuro cercano");
const resultadotemMedia45FL = filtrarYAplicarColor(temMedia.features, "45", "Futuro lejano");

const resultadotemMedia85Actual = filtrarYAplicarColor(temMedia.features, "85", "actual");
const resultadotemMedia85FC = filtrarYAplicarColor(temMedia.features, "85", "Futuro cercano");
const resultadotemMedia85FL = filtrarYAplicarColor(temMedia.features, "85", "Futuro lejano");

// Función para generar la leyenda
function createLegendTEM() {
    var legend = L.control({ position: 'bottomright' });

 legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
         div.innerHTML += '<h5>Variación de Temperatura Media</h5><img src="./images/style_temp.JPG" alt="legend" width="50%" height="10%">';
        return div;
    };

        
    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(temMedia45Actual)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}

 