
var mapaChaco2 = L.map('mapA', {
    center: [-25.98485678365388, -60.81026853372799],
    zoom: 7,
    zoomControl: false,

    layers: [DataCenso, Provincia, osm, Localidad]
});

var panelLayers1 = new L.Control.PanelLayers(null, overlayMaps,
	{
		compact: true,
		collapsed: false,
		// collapsibleGroups: true,
		position: 'topleft',
	});

// Agrega el panel de capas al mapa
mapaChaco2.addControl(panelLayers1);
