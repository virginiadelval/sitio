     // conexion a wms a IDESA
    var options2 = {
        format: 'image/png',
        uppercase: true,
        transparent: true,
        version: '1.1.1',
        continuousWorld: true,
        tiled: true,
        info_format: 'text/html',
        opacity: 0.7,
        attribution: '<a href="http://geoportal.idesa.gob.ar">IDESA</a>'
    };
    var source2 = L.WMS.source("https://geo-backend.inta.gob.ar/geoserver/wms", options2);
    var layer1 = source2.getLayer('geonode:precipitacion_anual');
    // var layer2 = source2.getLayer('geonode:a__01_pp');
    // var layer3 = source2.getLayer('geonode:a__02_pp');
    // var layer4 = source2.getLayer('geonode:a__03_pp');
    // var layer5 = source2.getLayer('geonode:geonode__04pp');
    // var layer6 = source2.getLayer('geonode:geonode__05_pp_clip');
    // var layer7 = source2.getLayer('geonode:geonode__06_pp');
    // var layer8 = source2.getLayer('geonode:geonode__07_pp');
    // var layer9 = source2.getLayer('geonode:geonode__08_pp');
    // var layer10 = source2.getLayer('geonode:geonode__09_pp');
    // var layer11 = source2.getLayer('geonode:geonode__10_pp');
    // var layer12 = source2.getLayer('geonode:geonode__11_pp');
    // var layer13 = source2.getLayer('geonode:geonode__12_pp');


    var panelClima = [
        {
            group: "Precipitación (mm) ",
            collapsed: true,
            layers: [
                {

                    name: "Media Anual",
                    layer: layer1,
                },
                
                // {

                //     name: "Enero",
                //     layer: layer2,
                // },
                // {
                //     name: "Febrero",
                //     layer: layer3,

                // },
                // {
                //     name: "Marzo",
                //     layer: layer4,

                // },
                // {
                //     name: "Abril",
                //     layer: layer5,

                // },
                // {
                //     name: "Mayo",
                //     layer: layer6,

                // },
                // {
                //     name: "Junio",
                //     layer: layer7,

                // },
                // {
                //     name: "Julio",
                //     layer: layer8,

                // },
                // {
                //     name: "Agosto",
                //     layer: layer9,

                // },
                // {
                //     name: "Septiembre",
                //     layer: layer10,

                // },
                // {
                //     name: "Octubre",
                //     layer: layer11,

                // },
                // {
                //     name: "Noviembre",
                //     layer: layer12,

                // },
                // {
                //     name: "Diciembre",
                //     layer: layer13,

                // },
            ]
        },
        // {
        //     group: "Evapotrspiración ",
        //     collapsed: true,
        //     layers: [
        //         {

        //             name: "Enero",
        //             layer: layer2,
        //         },
        //         {
        //             name: "Febrero",
        //             layer: layer3,

        //         },
        //         {
        //             name: "Marzo",
        //             layer: layer4,

        //         },
        //         {
        //             name: "Abril",
        //             layer: layer5,

        //         },
        //         {
        //             name: "Mayo",
        //             layer: layer6,

        //         },
        //         {
        //             name: "Junio",
        //             layer: layer7,

        //         },
        //         {
        //             name: "Julio",
        //             layer: layer8,

        //         },
        //         {
        //             name: "Agosto",
        //             layer: layer9,

        //         },
        //         {
        //             name: "Septiembre",
        //             layer: layer10,

        //         },
        //         {
        //             name: "Octubre",
        //             layer: layer11,

        //         },
        //         {
        //             name: "Noviembre",
        //             layer: layer12,

        //         },
        //         {
        //             name: "Diciembre",
        //             layer: layer13,

        //         },
        //     ]
        // }
    ];

    //leyendas con trasparecia//
    // var htmlLegend1and4 = L.control.htmllegend({
    //     position: 'bottomright',
    //     legends: [{
    //         name: 'Promedio Mensual de NO2',
    //         layer: layer1, layer10,
    //         elements: [{
    //             label: 'micromol/m2',
    //             html: '<img src= https://geoservicios2.conae.gov.ar:443/geoserver/CalidadDelAire/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=SEN5P_TROPOMI_NO2M_MES_12&alt="legend" width="100" height="100%">'
    //         }]
    //     }],
    //     collapseSimple: true,
    //     detectStretched: false,
    //     collapsedOnInit: true,
    //     defaultOpacity: 0.9,
    //     visibleIcon: 'icon icon-eye',
    //     hiddenIcon: 'icon icon-eye-slash'
    // });

    // var htmlLegend1and6 = L.control.htmllegend({
    //     position: 'bottomright',
    //     legends: [{
    //         name: 'Precipitación Anual',
            
    //         elements: [{
    //         label: ' ',
    //             html: '<img src= https://geo-backend.inta.gob.ar/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=geonode:precipitacion_anual&alt="legend" width="100" height="90%">'
    //         }]
    //     }],
    //     collapseSimple: true,
    //     detectStretched: false,
    //     collapsedOnInit: true,
    //     defaultOpacity: 0.9,
    //     visibleIcon: 'icon icon-eye',
    //     hiddenIcon: 'icon icon-eye-slash'
    // });


  

    // //leyenda estatica position//
    // var legend = L.control({
    //     position: 'topright',
    // });
    // // //contenido de la Leyenda - estatica como html//
    // legend.onAdd = function (map) {
    //     var div = L.DomUtil.create('div', 'info legend');
    //     div.innerHTML += '<b> Los datos de Calidad del Aire son extraídos de <a href=https://catalogos.conae.gov.ar/catalogo/catalogo.html>CONAE</a> mediante sus Servicios <a href=https://catalogos.conae.gov.ar/catalogo/catalogoGeoServiciosOGC.html> WMS </a> </b> <br> <br> Corresponden al  Producto mensual derivado del producto diario de NO2 L2 del sensor TROPOMI/Sentinel-5p (ESA). </b> <br> <br><i>El dióxido de nitrógeno (NO2) en la atmósfera es el producto de la reacción de oxidación del monóxido de nitrógeno (NO) que ocurre pocos minutos después de su emisión por la quema de combustible fósil y la quema de biomasa a altas temperaturas, tambien sirve para para monitorear la actividad de los sectores de transporte y energía, de gran importancia en centros urbanos.</i> <br><br> <b> La documentación del producto se puede consultar en este <a href=https://documentoside.conae.gov.ar/public/docs/prd/sen5p/tropomi/no2m/20200326_GVT_SSU_UEAT_GE_v02_002_CONAE_TROPOMI_NO2.pdf> enlace  </a>';
    //     div.style.width = '30vw';
    //     div.style.height = 'auto';
    //     collapsibleGroups = true
    //     return div;
    // };
    // legend.addTo(map);

    
// Función para generar la leyenda
function createLegendPPM() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += '<img src= https://geo-backend.inta.gob.ar/geoserver/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=geonode:precipitacion_anual&alt="legend" width="100" height="90%">';
         div.style.width = '30vw';
         div.style.height = 'auto';
         collapsibleGroups = true
         return div;

       
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(layer1)) {
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