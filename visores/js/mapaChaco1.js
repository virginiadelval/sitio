

var Provincia = L.geoJson(prov,
    {
	style: SytleProv
});


var osmGris = L.tileLayer('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});


var mapaChaco1 = L.map('map', {
    center: [-25.98485678365388, -60.81026853372799],
    zoom: 7,
    zoomControl: false,
    layers: [ google, Provincia, Localidad, Ecoregion ]
});

var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
		{
			compact: true,
			collapsed: false,
			// collapsibleGroups: true,
			position: 'topleft',
		});

// Agrega el panel de capas al mapa
mapaChaco1.addControl(panelLayers);
mapaChaco1.addControl(panelLayers2);