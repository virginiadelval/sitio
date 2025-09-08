
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        "<div id='Estilo1'><h3>Descripción</h3></div>" +
        "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='1' width='100%' />" +
        "<div id='Estilo3a'>" +
       // "<b> Número de identificación: </b>" + feature.properties.id + "<br>" +
      //  "<b> Provincia: </b>" + feature.properties.nom_pcia + "<br>" +
        "<b> Departamento: </b>" + feature.properties.name + "<br>" +
        "<b> Localidad: </b>" + feature.properties.loc + "<br>" +
        //"<b> Ecorregión: </b>" + feature.properties.ecoregion + "<br>" +
        "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
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
        if (map.hasLayer(SitiosSeleccionados)) {
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


var sitios = 
{
"type": "FeatureCollection",
"name": "modelos_productivos",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "loc": "El Chorro", "Numero": "9", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Seco", "name": "Ramón Lista", "M1_PersonasHogar": 3.8, "M1_Dem": 70, "M2_Sup": 200, "M2_Dem": 114.8, "M3_Sup": 0.5, "M3_Cultivo": "Zapallo", "M3_Dem": "813.4", "M4_Animal": "Bovinos (50), Caprinos (100), Equinos (10) ", "M4_Cantidad": 160, "M4_Dem": 1715.5, "Total_Dem": "2713.7" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -62.306572014753385, -23.183829530874622 ] ] } },
{ "type": "Feature", "properties": { "loc": "Monte Quemado", "Numero": "10", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Húmedo ", "name": "Pirané", "M1_PersonasHogar": 2.65, "M1_Dem": 48, "M2_Sup": 200, "M2_Dem": 63.6, "M3_Sup": 0.5, "M3_Cultivo": " (0.5) Maíz Choclo;  (0.5)  Maiz Grano;  (0.2)  Hojas;  (0.3) Zapallo", "M3_Dem": "2947", "M4_Animal": "Gallinas (35), Caprinos (20), Porcinos (3) ", "M4_Cantidad": 58, "M4_Dem": 83.2, "Total_Dem": "3141.8" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.268508669962856, -25.868744015470462 ] ] } },
{ "type": "Feature", "properties": { "loc": "Laguna Yema", "Numero": "12", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Seco", "name": "Bermejo", "M1_PersonasHogar": 2.66, "M1_Dem": 48, "M2_Sup": 250, "M2_Dem": 77.6, "M3_Sup": 2.0, "M3_Cultivo": "(2) Sandía / Melón; (4) Sandía / Melón;", "M3_Dem": "1887.8 ; 17,746", "M4_Animal": "Bovinos (50), Caprinos (60)", "M4_Cantidad": 110, "M4_Dem": 1416.2, "Total_Dem": "19,288" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -61.241622872198178, -24.255689109899453 ] ] } },
{ "type": "Feature", "properties": { "loc": "Zapalinqui", "Numero": "15", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "name": "General Güemez", "M1_PersonasHogar": 2.65, "M1_Dem": 48, "M2_Sup": 100, "M2_Dem": 40.0, "M3_Sup": 4.0, "M3_Cultivo": "Zapallo / Sandía", "M3_Dem": "12263.9", "M4_Animal": "Bovinos (60), Caprinos (80), Porcinos (5) ", "M4_Cantidad": 145, "M4_Dem": 1759.3, "Total_Dem": "14111.30" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.561926701387485, -26.065792017441019 ] ] } },
{ "type": "Feature", "properties": { "loc": "Pampa del Indio", "Numero": "16", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Húmedo ", "name": "General San Martín", "M1_PersonasHogar": 3.02, "M1_Dem": 55, "M2_Sup": 100, "M2_Dem": 23.5, "M3_Sup": 2.0, "M3_Cultivo": "Zapallo", "M3_Dem": "4341.3", "M4_Animal": "Bovinos (50), Caprinos (20), Ovinos (10), Porcinos (5) ", "M4_Cantidad": 85, "M4_Dem": 1365.1, "Total_Dem": "5784.9" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.942474261381591, -26.047847448204688 ] ] } },
{ "type": "Feature", "properties": { "loc": "Miraflores", "Numero": "14", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "name": "General Güemez", "M1_PersonasHogar": 2.65, "M1_Dem": 48, "M2_Sup": 200, "M2_Dem": 83.6, "M3_Sup": 1.0, "M3_Cultivo": "Melón / Sandía; Maiz; Zapallo", "M3_Dem": "6378.4", "M4_Animal": "Bovinos (80), Caprinos (100), Ovinos (50), Porcinos (20) ", "M4_Cantidad": 250, "M4_Dem": 2569.6, "Total_Dem": "9079.6" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -60.930187454337172, -25.649424977763125 ] ] } },
{ "type": "Feature", "properties": { "loc": "Sauce", "Numero": "5", "Provincia": "Corrientes", "NOMBRE_ECO": "Espinal", "name": "Sauce", "M1_PersonasHogar": 2.92, "M1_Dem": 53, "M2_Sup": 100, "M2_Dem": 15.2, "M3_Sup": 0.25, "M3_Cultivo": "(0.25)Zapallo; (0.25) Hojas", "M3_Dem": "666.3", "M4_Animal": " Bovinos(50), Ovinos (30)", "M4_Cantidad": 80, "M4_Dem": 1328.6, "Total_Dem": "2063.1" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.75749801905669, -30.090105983653554 ] ] } },
{ "type": "Feature", "properties": { "loc": "Mercedes", "Numero": "3", "Provincia": "Corrientes", "NOMBRE_ECO": "Espinal", "name": "Mercedes", "M1_PersonasHogar": 2.91, "M1_Dem": 53, "M2_Sup": 150, "M2_Dem": 32.7, "M3_Sup": 1.0, "M3_Cultivo": "(1) Zapallo / Sandía; (1)Hojas", "M3_Dem": "3706.1", "M4_Animal": " Bovinos(150), Ovinos (100)", "M4_Cantidad": 250, "M4_Dem": 781.1, "Total_Dem": "4572.9" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.074721702179865, -29.15825414385835 ] ] } },
{ "type": "Feature", "properties": { "loc": "Colonia Carolina", "Numero": "2", "Provincia": "Corrientes", "NOMBRE_ECO": "Esteros del Iberá", "name": "Goya", "M1_PersonasHogar": 2.99, "M1_Dem": 55, "M2_Sup": 200, "M2_Dem": 27.0, "M3_Sup": 0.2, "M3_Cultivo": "(0.2)Tomate / Pimiento; (0.05) Chauchas; (0.05) Zapallito; (1) Tabaco; (1)Avena; (1)Pastrira Perenne; (2) Maiz", "M3_Dem": "8025.7", "M4_Animal": " Bovinos(20), Ovinos (30), Gallinas (50)", "M4_Cantidad": 100, "M4_Dem": 588.2, "Total_Dem": "8695.9" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.155074180013756, -29.160317970711482 ] ] } },
{ "type": "Feature", "properties": { "loc": "Herlitzka", "Numero": "1", "Provincia": "Corrientes", "NOMBRE_ECO": "Esteros del Iberá", "name": "San Luis del Palmar", "M1_PersonasHogar": 3.08, "M1_Dem": 56, "M2_Sup": 100, "M2_Dem": 22.6, "M3_Sup": 0.5, "M3_Cultivo": "Hojas; (0.5) Maiz; (0.5)Mandioca; (0.25) Palta", "M3_Dem": "4130.7", "M4_Animal": " Bovinos(80), Ovinos (25)", "M4_Cantidad": 105, "M4_Dem": 2058.6, "Total_Dem": "6267.9" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -58.258766984307549, -27.565191257039 ] ] } },
{ "type": "Feature", "properties": { "loc": "Santo Tomé", "Numero": "4", "Provincia": "Corrientes", "NOMBRE_ECO": "Campos y Malezales", "name": "Santo Tomé", "M1_PersonasHogar": 2.81, "M1_Dem": 51, "M2_Sup": 100, "M2_Dem": 8.9, "M3_Sup": 0.25, "M3_Cultivo": "(0.25)Perejil / Verdeo; (0.25) Lechuga / Acelga", "M3_Dem": "310.2", "M4_Animal": " Bovinos(30), Equinos (2)", "M4_Cantidad": 32, "M4_Dem": 781.1, "Total_Dem": "1151.2" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -56.048837792713179, -28.540623348875986 ] ] } },
{ "type": "Feature", "properties": { "loc": "Fachinal", "Numero": "8", "Provincia": "Misiones", "NOMBRE_ECO": "Campos y Malezales", "name": "Capital", "M1_PersonasHogar": 2.71, "M1_Dem": 50, "M2_Sup": 250, "M2_Dem": 8.9, "M3_Sup": 0.5, "M3_Cultivo": " (0.5) Hojas;  (0.5)  Zapallo;  (0.5)  Mandioca", "M3_Dem": "163", "M4_Animal": "Bovinos (25), Ovinos (30)", "M4_Cantidad": 55, "M4_Dem": 708.1, "Total_Dem": "930" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.705017542150657, -27.628474554071119 ] ] } },
{ "type": "Feature", "properties": { "loc": "Corpus", "Numero": "7", "Provincia": "Misiones", "NOMBRE_ECO": "Selva Paranaense", "name": "San Ignacio", "M1_PersonasHogar": 2.74, "M1_Dem": 50, "M2_Sup": 170, "M2_Dem": 8.4, "M3_Sup": 0.3, "M3_Cultivo": " (0.3) Pimiento;  (0.2) Coliflor/ Repollo;  (0.3) Hojas;  (0.2) Tomate", "M3_Dem": "250.9", "M4_Animal": "Bovinos (10)", "M4_Cantidad": 10, "M4_Dem": 248.2, "Total_Dem": "557.5" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -55.506668363637758, -27.129105657518132 ] ] } },
{ "type": "Feature", "properties": { "loc": "Pozo Azul", "Numero": "6", "Provincia": "Misiones", "NOMBRE_ECO": "Selva Paranaense", "name": "San Pedro", "M1_PersonasHogar": 2.79, "M1_Dem": 51, "M2_Sup": 250, "M2_Dem": 5.8, "M3_Sup": 2.0, "M3_Cultivo": " (2) Tabaco;  (2) Maiz Silo;  (2)  Pastura perenne", "M3_Dem": "1288.2", "M4_Animal": "Bovinos de Leche (10), Bovinos de Carne (50)", "M4_Cantidad": 60, "M4_Dem": 1606.0, "Total_Dem": "2951" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -54.151834302613729, -26.346503456582543 ] ] } },
{ "type": "Feature", "properties": { "loc": "Nueva Pompeya", "Numero": "13", "Provincia": "Chaco", "NOMBRE_ECO": "Chaco Seco", "name": "General Güemez", "M1_PersonasHogar": 2.65, "M1_Dem": 48, "M2_Sup": 100, "M2_Dem": 23.5, "M3_Sup": 4.5, "M3_Cultivo": "(4.5) Zapallo / Sandía; (0.5) Hojas", "M3_Dem": "11609.6", "M4_Animal": "Bovinos (50), Caprinos (80), Porcinos (5) ", "M4_Cantidad": 135, "M4_Dem": 1511.1, "Total_Dem": "13192.2" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -61.483225587349324, -24.932300245122477 ] ] } },
{ "type": "Feature", "properties": { "loc": "Ismael Sanchez", "Numero": "11", "Provincia": "Formosa", "NOMBRE_ECO": "Chaco Húmedo ", "name": "Patiño", "M1_PersonasHogar": 2.69, "M1_Dem": 49, "M2_Sup": 180, "M2_Dem": 47.4, "M3_Sup": 0.5, "M3_Cultivo": " (0.5) Maíz Choclo;  (0.5) Maiz Grano;  (1) Zapallo", "M3_Dem": "1810.7", "M4_Animal": "Bovinos (100), Caprinos (50)", "M4_Cantidad": 150, "M4_Dem": 2628.0, "Total_Dem": "4535.1" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -59.922582317692779, -25.351140657920045 ] ] } }
]
}
    
    
