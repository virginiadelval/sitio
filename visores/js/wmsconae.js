//options recomendada para disminuir el codido//

    var options = {format: 'image/png',
        uppercase: true,
        transparent: true,
        version: '1.3.0',
        continuousWorld : true,
        tiled: true,
        info_format: 'text/html',
       info_format_pop:'application/json:type/geoJson',
        opacity: 1,
        attribution: '<a href="https://geocatalogos.conae.gov.ar/geonetwork/srv/spa/catalog.search#/search" target="_blank">CONAE - Gerencia de Observación de la Tierra.</a>',
      };

  //llamo una vez al servidor//
  var source = L.WMS.source("https://geoservicios2.conae.gov.ar/geoserver/EstatusHidrico/wms?", options);
  // llama cada capa del servidor//
  var APIDiario = source.getLayer('EstatusHidrico:MHS_GPMIMERG_APIDIARIO_1');
  // llama cada capa del servidor//
  var APIPercentil = source.getLayer('EstatusHidrico:MHS_GPMIMERG_PCNTLAPI_1');


// // Función para crear sliders de opacidad
// function createOpacitySlider(layer) {
// var $sliderContainer = $('<div class="layer-slider">');
// var $input = $('<input type="text" value="1" />');
// $sliderContainer.append($input);

// $input.ionRangeSlider({
//   min: 0.1,
//   max: 1,
//   step: 0.01,
//   from: 1,
//   hide_min_max: true,
//   hide_from_to: true,
//   onChange: function(o) {
//       layer.setOpacity(o.from);
//   }
// });

// return $sliderContainer[0];
// }

// Panel de Estatus Hídrico
var panelTransparecia = [{
group: "Estatus Hídrico",
collapsed: true,
layers: [
  {
      active: true,
      name: "Indice de Precipitación Diario (API)",
      layer: APIDiario,
      // opacityControl: createOpacitySlider(APIDiario)
  },
  {
      active: true,
      name: "Percentil de API",
      layer: APIPercentil,
      // opacityControl: createOpacitySlider(APIPercentil)
  }
]
}];

var panelLayers5 = new L.Control.PanelLayers(null, panelTransparecia, {
compact: true,
collapsed: true,
collapsibleGroups: true,
position: 'bottomright',
// buildItem: function(item) {
//   var $item = $('<div class="panel-layer-item">');
//   var $label = $('<span>').text(item.name);
//   $item.append($label);
//   $item.append($(item.opacityControl));
//   return $item[0];
// }
});
map.addControl(panelLayers5);










    // // Función para generar la leyenda
// function createLegendApiDiario() {
//     var legend = L.control({ position: 'bottomright' });

//     legend.onAdd = function (map) {
//         var div = L.DomUtil.create('div', 'info legend');
//          div.innerHTML += '<h5>Indice de Precipitación Diario</h5><img src=" https://geoservicios2.conae.gov.ar:443/geoserver/EstatusHidrico/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=MHS_GPMIMERG_APIDIARIO_1&" alt="legend" width="60%" height="40%">';
//         return div;
//     };

//     // Función para mostrar/ocultar la leyenda
//     function toggleLegend() {
//         if (map.hasLayer(APIDiario)) {
//             legend.addTo(map);
//         } else {
//             legend.remove();
//         }
//     }

// // Eliminar la leyenda al inicio
// legend.remove();
//     // Escucha el cambio de estado de la capa
//     map.on('overlayadd overlayremove', toggleLegend);
// }
// // Función para generar la leyenda
// function createLegendApiPercentil() {
//     var legend = L.control({ position: 'bottomright' });

//     legend.onAdd = function (map) {
//         var div = L.DomUtil.create('div', 'info legend');
//          div.innerHTML += '<h5>Indice de Precipitación Diario</h5><img src=" https://geoservicios2.conae.gov.ar:443/geoserver/EstatusHidrico/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=MHS_GPMIMERG_PCNTLAPI_7&" alt="legend" width="60%" height="40%">';
//         return div;
//     };

//     // Función para mostrar/ocultar la leyenda
//     function toggleLegend() {
//         if (map.hasLayer(APIPercentil)) {
//             legend.addTo(map);
//         } else {
//             legend.remove();
//         }
//     }

// // Eliminar la leyenda al inicio
// legend.remove();
//     // Escucha el cambio de estado de la capa
//     map.on('overlayadd overlayremove', toggleLegend);
// }
