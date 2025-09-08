// Grupos de capas bases
var baseLayers = [
	{
		name: "ArgenMap",
		layer: argenmap,
	},
	{
		name: "Open Street Map",
		layer: osm,
	},
	{
		name: "Google Satelite",
		layer: google
	}];
// Grupos de capas interactivas precipitacion CC
var overlayMaps = [
	{
		group: "Precipitación Escenarios CC",
		collapsed: true,
		layers: [
			{
				active: true,
				name: " PPM 4.5 Actual",
				layer: Ppm45Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "PPM 4.5 Futuro Cercano (2050)",
				layer: Ppm45FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "PPM 4.5 Futuro Lejano (2100)",
				layer: Ppm45FL,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "PPM 8.5 Actual",
				layer: Ppm85Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "PPM 8.5 Futuro Cercano (2050)",
				layer: Ppm85FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "PPM 8.5 Futuro Lejano (2100)",
				layer: Ppm85FL,
				transparent: true,
				opacity: 0.5,
			},
			]
	},
	

];



// panel de CC Temperatura
var panelCC = [
	{
		title: "Temperatura Escenarios de CC",
		group: "Temperatura Escenarios de CC",
		collapsed: true,
		layers: [
			
			{
				active: false,
				name: " Temp Media 4.5 Actual",
				layer: temMedia45Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Temp Media 4.5 Futuro Cercano (2050)",
				layer: temMedia45FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Temp Media 4.5 Futuro Lejano (2100)",
				layer: temMedia45FL,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Temp Media 8.5 Actual",
				layer: temMedia85Actual,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Temp Media 8.5 Futuro Cercano (2050)",
				layer: temMedia85FC,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Temp Media 8.5 Futuro Lejano (2100)",
				layer: temMedia85FL,
				transparent: true,
				opacity: 0.5,
			},
		]
	},

];



//panel de control agregado//
var panelLayers = new L.Control.PanelLayers(baseLayers, null,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});
var panelLayers1 = new L.Control.PanelLayers(null, overlayMaps,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',
	});
// var panelLayers2 = new L.Control.PanelLayers(null, infoAmb,
// 	{
// 		compact: true,
// 		collapsed: false,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});
// var panelLayers3 = new L.Control.PanelLayers(null, panelPob,
// 	{
// 		compact: true,
// 		//collapsed: true,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});
// var panelLayers4 = new L.Control.PanelLayers(null, panelAgua,
// 	{
// 		compact: true,
// 		collapsed: false,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});


var panelLayers6 = new L.Control.PanelLayers(null, panelCC,
	{
		compact: true,
		collapsed: false,
		collapsibleGroups: true,
		position: 'topleft',

	});

//panel de control agregado//
// var panelLayersClimatico = new L.Control.PanelLayers(null, panelClima,
// 	{compact: true,
// 		collapsed: false,
// 		collapsibleGroups: true,
// 		position: 'topleft',
// 	});


