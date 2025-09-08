// Grupos de capas bases
var baseLayers = [
	{
		name: "ArgenMap",
		layer: osmGris,
	},
	{
		name: "Open Street Map",
		layer: osm,
	},
	{
		name: "Google Satelite",
		layer: google
	}];
// Grupos de capas interactivas
var overlayMaps = [
	{
		group: "Información de base",
		collapsed: true,
		layers: [
			// 
			 {
				active: false,
				name: "Localidades Censales",
				layer: Localidad,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Parajes",
				layer: Parajes,
				transparent: true,
				opacity: 0.5,
			},


		{
				active: false,
				name: "Pob. Total (2022)",
				layer: DataCenso,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Pobl. Originaria (2022)",
				layer: POBIndigena,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "% de Hogares con NBI (2022)",
				layer: NBI,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "% Pob. sin conexión a red <br>de Agua potable (2022)",
				layer: AguaRED,
				transparent: true,
				opacity: 0.5,
			},
			
			
		]
	},

		
];
//panel ambiental
var infoAmb = [
	{
		group: "Información Ambiental",
		collapsed: true,
		layers: [
			
			{
				active: false,
				name: "Estaciones Meteorológicas SMN",
				layer: EstacionesSMN,
				transparent: true,
				opacity: 0.5,
			},
			
			{
				active: false,
				name: "Ecorregiones",
				layer: Ecoregion,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Suelos",
				layer: SuelosTipo,
				transparent: true,
				opacity: 0.5,
			},
			
			{
				active: false,
				name: "Areas Protegidas",
				layer: AreasProtegidas,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Cuencas Hídricas",
				layer: CuencasHidro,
				transparent: true,
				opacity: 0.5,
			},
			{
				active: false,
				name: "Regiones Hidrogeográficas",
				layer: RegionesHirdo,
				transparent: true,
				opacity: 0.5,
			},

			
			
		]
	},
	,

];

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


