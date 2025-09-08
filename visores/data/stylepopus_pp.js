
// Contenido del popup para cada feature para PREcipitaciones
function popupContentPPM(feature) {
    return (
        "<div id='Estilo1'><h3>Valores proyectados por Escenario y Periodo</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Periodo </b>" + feature.properties.periodo + "<br>" +
        "<b> Escenario    </b>" + feature.properties.escenario + " de CC <br>" +
        "<b> Valor Proyectado   : </b>" + feature.properties.val + " mm <br>" +
                
        "</div>"
    );
}

function getColorPrecipitacion(val) {
if (val >= -400 && val <= -300) return "#dd1b34";
if (val >= -300 && val <= -200) return "#dd465a";
    if (val >= -200 && val <= -100) return "#b95664";
    if (val >= -100 && val <= -28) return "#da9fa7";
    if (val > -28 && val <= -0) return "#fcfcfc";
    if (val > -0 && val <= 3) return "#049afc";
    if (val > 3 && val <= 21) return "#0484fc";
    if (val > 21 && val <= 52) return "#0462fc";
    if (val > 52 && val <= 214) return "#041afc";
    return "#000000"; // Color por defecto si no coincide
}

function filtrarYAplicarColor(features, escenario, periodo) {
    return features
        .filter(feature => 
            feature.properties.escenario === escenario && 
            feature.properties.periodo === periodo
        )
        .map(feature => {
            const color = getColorPrecipitacion(feature.properties.val);
            return {
                ...feature,
                properties: {
                    ...feature.properties,
                    color: color
                }
            };
        });
}

const resultadoPpm45Actual = filtrarYAplicarColor(ppm.features, "45", "actual");
const resultadoPpm45FC = filtrarYAplicarColor(ppm.features, "45", "Futuro cercano");
const resultadoPpm45FL = filtrarYAplicarColor(ppm.features, "45", "Futuro lejano");

const resultadoPpm85Actual = filtrarYAplicarColor(ppm.features, "85", "actual");
const resultadoPpm85FC = filtrarYAplicarColor(ppm.features, "85", "Futuro cercano");
const resultadoPpm85FL = filtrarYAplicarColor(ppm.features, "85", "Futuro lejano");

// Función para generar la leyenda
function createLegendPPM() {
    var legend = L.control({ position: 'bottomright' });

legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];

        var styles = [
            { label: 'Variación PPM', color: '' },
            { label: '-700 - -500', color: '#990418' },
          { label: '-501 - -400', color: '#dd1b34' },
            { label: '-401 - -300', color: '#dd465a' },
              { label: '-301 - -201', color: '#b95664' },
               { label: '-201 - -101', color: '#da9fa7' },
               { label: '-101 - -26', color: '#fcfcfc'},
            { label: '-27 - -3', color: '#049afc' },
            { label: '-3 - 21', color: '#0484fc' },
            { label: '21 - 52', color: '#0462fc' },
            { label: '52 - 214', color: '#041afc' },
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

        
    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(Ppm45FC)) {
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

 