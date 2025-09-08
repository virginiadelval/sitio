
// Insertando un título en el mapa
	var title = L.control(
	);
	title.onAdd = function (map) {
		var div = L.DomUtil.create('div', 'info');
		div.innerHTML +=
		'<h3>Escenario de Cambio Climático a Nivel Pais</h3> <br> Datos tomados de <a href="https://simarcc.ambiente.gob.ar/"  target="_blank"> Sistema de Mapas de Riesgo del Cambio Climático </a>  (Agosto 2025)';
		return div;
	};

	

// con VAR se crean las capas basese a visualizar => L.tileLayer.wms es la propiedad que tare los TileLayer y/o wms //
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
	maxZoom: 18
});

var google = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
	opacity: 1.0,
	attribution: '&copy;<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Google</a>',
	maxZoom: 18
});
var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
	opacity: 1.0,
	attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
	maxZoom: 18,
});


// Crear una capa GeoJSON y añadir al mapa
// var Prov = L.geoJSON(provincias, {
// 	style: function (feature) {
// 		return {
// 			fillColor: 'whait',
// 			weight: 3,
// 			opacity: 0.5,
// 			color: 'black',
// 			dashArray: '3',
// 			fillOpacity: 0.0
// 		}
// 	}
// });

var PROV = L.geoJSON(provincias, {
	style: function (feature) {
		return {
			fillColor: "gray",
			weight: 1,
			opacity: 1,
			color: '#000',
			dashArray: '0.2',
			fillOpacity: 0.1
		};
	},
	
});

/// ESCENARIOS DE CC 
// PPM 4.5 Y 8.5 en proyeccion Actual (2030), Futuro Cercano (2050) y Furuto Lejano (2010) - Informacion recopilada de SIMARCC (https://simarcc.ambiente.gob.ar/cambio-climatico) - Faecha: junio 2024
var Ppm45Actual = L.geoJSON(resultadoPpm45Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});

var Ppm45FC = L.geoJSON(resultadoPpm45FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});
var Ppm45FL = L.geoJSON(resultadoPpm45FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});
var Ppm85Actual = L.geoJSON(resultadoPpm85Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});
var Ppm85FC = L.geoJSON(resultadoPpm85FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});
var Ppm85FL = L.geoJSON(resultadoPpm85FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentPPM(feature);
		layer.bindPopup(content);
	}

});

///temperatura media

var temMedia45Actual = L.geoJSON(resultadotemMedia45Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 1
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
var temMedia45FC = L.geoJSON(resultadotemMedia45FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
var temMedia45FL = L.geoJSON(resultadotemMedia45FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
var temMedia85Actual = L.geoJSON(resultadotemMedia85Actual, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
var temMedia85FC = L.geoJSON(resultadotemMedia85FC, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
var temMedia85FL = L.geoJSON(resultadotemMedia85FL, {
	style: function (feature) {
		return {
			fillColor: feature.properties.color,
			color: "#000", // Borde negro
			weight: 0,
			fillOpacity: 0.9
		};
	},
	onEachFeature: function (feature, layer) {
		var content = popupContentTEM(feature);
		layer.bindPopup(content);
	}

});
