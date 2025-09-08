var MarkerOptionsSMN= {
    radius: 8,
    fillColor: "#f8f80c",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSMN(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
        "<b> Número : </b>" + feature.properties.NRO + "<br>" +
        "<b> Altura : </b>" + feature.properties.ALT + " m.s.n.m."+ "<br>" +
        "<b> Latitud : </b>" + feature.properties.lat + "<br>" +
        "<b> Longitud: </b>" + feature.properties.long + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSMN() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Estaciones Meteorologicas', color: '' },
            { label: 'SMN', color: '#f8f80c' },
                    
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
        if (map.hasLayer(EstacionesSMN)) {
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

var SMN = 
{
    "type": "FeatureCollection",
    "name": "smn",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "lat": "-26 12", "long": "-58 14", "ALT": 60, "NRO": 87162, "PROVINCIA": "FORMOSA", "NOMBRE_ECO": "Chaco H�medo", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -58.233333333333334, -26.2 ] } },
    { "type": "Feature", "properties": { "lat": "-24 42", "long": "-60 35", "ALT": 130, "NRO": 87078, "PROVINCIA": "FORMOSA", "NOMBRE_ECO": "Chaco Seco", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -60.583333333333336, -24.7 ] } },
    { "type": "Feature", "properties": { "lat": "-26 45", "long": "-60 24", "ALT": 93, "NRO": 87148, "PROVINCIA": "CHACO", "NOMBRE_ECO": "Chaco Seco", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -60.4, -26.75 ] } },
    { "type": "Feature", "properties": { "lat": "-27 27", "long": "-59 3", "ALT": 52, "NRO": 87155, "PROVINCIA": "CHACO", "NOMBRE_ECO": "Chaco H�medo", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -59.05, -27.45 ] } },
    { "type": "Feature", "properties": { "lat": "-26 15", "long": "-53 39", "ALT": 815, "NRO": 87163, "PROVINCIA": "MISIONES", "NOMBRE_ECO": "Selva Paranense", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -53.65, -26.25 ] } },
    { "type": "Feature", "properties": { "lat": "-25 44", "long": "-54 28", "ALT": 270, "NRO": 87097, "PROVINCIA": "MISIONES", "NOMBRE_ECO": "Selva Paranense", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -54.466666666666669, -25.733333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-27 29", "long": "-55 8", "ALT": 303, "NRO": 87187, "PROVINCIA": "MISIONES", "NOMBRE_ECO": "Selva Paranense", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -55.133333333333333, -27.483333333333334 ] } },
    { "type": "Feature", "properties": { "lat": "-27 22", "long": "-55 58", "ALT": 125, "NRO": 87178, "PROVINCIA": "MISIONES", "NOMBRE_ECO": "Campos y Malezales", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -55.966666666666669, -27.366666666666667 ] } },
    { "type": "Feature", "properties": { "lat": "-27 27", "long": "-58 46", "ALT": 62, "NRO": 87166, "PROVINCIA": "CORRIENTES", "NOMBRE_ECO": "Delta e Islas del Paran�", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -58.766666666666666, -27.45 ] } },
    { "type": "Feature", "properties": { "lat": "-27 35", "long": "-56 40", "ALT": 72, "NRO": 87173, "PROVINCIA": "CORRIENTES", "NOMBRE_ECO": "Esteros del Iber�", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -56.666666666666664, -27.583333333333332 ] } },
    { "type": "Feature", "properties": { "lat": "-29 13", "long": "-58 6", "ALT": 107, "NRO": 87281, "PROVINCIA": "CORRIENTES", "NOMBRE_ECO": "Espinal", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -58.1, -29.216666666666665 ] } },
    { "type": "Feature", "properties": { "lat": "-30 16", "long": "-57 39", "ALT": 54, "NRO": 87393, "PROVINCIA": "CORRIENTES", "NOMBRE_ECO": "Espinal", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -57.65, -30.266666666666666 ] } },
    { "type": "Feature", "properties": { "lat": "-29 41", "long": "-57 9", "ALT": 70, "NRO": 87289, "PROVINCIA": "CORRIENTES", "NOMBRE_ECO": "Campos y Malezales", "region": "NEA" }, "geometry": { "type": "Point", "coordinates": [ -57.15, -29.683333333333334 ] } }
    ]
    }
    

