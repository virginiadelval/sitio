    //MAP
    var map = L.map('map', {
        center: [-24.79303, -65.41527],
        zoom: 9,
        zoomControl: true,
    });

    //BASEMAPS
    var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright" target = "_blank">OpenStreetMap</a> contributors'
        }).addTo(map);

    var argenmap = L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/mapabase_gris@EPSG%3A3857@png/{z}/{x}/{-y}.png', {
        opacity: 1.0,
        attribution: '<a href="https://www.ign.gob.ar/AreaServicios/Argenmap/IntroduccionV2"  target="_blank"> ArgenMap </a>',
        maxZoom: 18,
    });
    var GoogleSatelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        opacity: 1.0,
        attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' + 'contributors',
        maxZoom: 18
    });

    //variables climaticas
    var Temp = L.tileLayer('http://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=03c820e325942ff0dd30b52dc0e14238', {
        opacity: 0.9,
        maxZoom: 18,
        attribution: '&copy; <a href="http://owm.io">VANE</a>',
        id: 'temp',
    }),
        Precipitation = L.tileLayer('http://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=03c820e325942ff0dd30b52dc0e14238', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://owm.io">VANE</a>'
        }),
        Wind = L.tileLayer('http://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=03c820e325942ff0dd30b52dc0e14238', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://owm.io">VANE</a>'
        }),

        Pressure = L.tileLayer('http://tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=03c820e325942ff0dd30b52dc0e14238', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://owm.io">VANE</a>'
        }),

        Clouds = L.tileLayer('http://tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=03c820e325942ff0dd30b52dc0e14238', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://owm.io">VANE</a>'
        });

    Temp.addTo(map);

    var baseLayers =
    {
        "ArgenMap (Gris)": argenmap,
        "Google Satelite": GoogleSatelite,
    };
    var overlays = {
        "Temperatura": Temp,
        "Precipitación": Precipitation,
        "Nubes": Clouds,
        "Presión atmosférica": Pressure,
        "Viento": Wind,
    };

    L.control.layers(baseLayers, overlays, { collapsed: false }).addTo(map);

    var popup = L.popup();

    //popup function
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            // .setContent("Ubicación " + e.latlng.toString()) //esample from leaflet, will be immediately replaced by weatherpopup...
            .openOn(map);

        //getting json function
        $(document).ready(function () {
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?lat=" + e.latlng.lat + '&lon=' + e.latlng.lng + "&appid=03c820e325942ff0dd30b52dc0e14238&lang=sp",
                dataType: 'json',
                success: function (data) {
                    // storing json data in variables
                    weatherlocation_lon = data.coord.lon; // lon WGS84
                    weatherlocation_lat = data.coord.lat; // lat WGS84
                    weatherstationname = data.name // Name of Weatherstation
                    weatherstationid = data.id // ID of Weatherstation
                    weathertime = data.dt // Time of weatherdata (UTC)
                    temperature = data.main.temp; // Kelvin
                    airpressure = data.main.pressure; // hPa
                    airhumidity = data.main.humidity; // %
                    temperature_min = data.main.temp_min; // Kelvin
                    temperature_max = data.main.temp_max; // Kelvin
                    windspeed = data.wind.speed; // Meter per second
                    winddirection = data.wind.deg; // Wind from direction x degree from north
                    cloudcoverage = data.clouds.all; // Cloudcoverage in %
                    weatherconditionid = data.weather[0].id // ID
                    weatherconditionstring = data.weather[0].main // Weatheartype
                    weatherconditiondescription = data.weather[0].description // Weatherdescription
                    weatherconditionicon = data.weather[0].icon // ID of weathericon

                    // Converting Unix UTC Time
                    var utctimecalc = new Date(weathertime * 1000);
                    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
                    var year = utctimecalc.getFullYear();
                    var month = months[utctimecalc.getMonth()];
                    var date = utctimecalc.getDate();
                    var hour = utctimecalc.getHours();
                    var min = utctimecalc.getMinutes();
                    var sec = utctimecalc.getSeconds();
                    var time = date + '.' + month + '.' + year + ' ' + hour + ':' + min + ' Uhr';

                    // recalculating
                    var weathercondtioniconhtml = "http://openweathermap.org/img/w/" + weatherconditionicon + ".png";
                    var weathertimenormal = time; // reallocate time var....
                    var temperaturecelsius = Math.round((temperature - 273) * 100) / 100;  // Converting Kelvin to Celsius
                    var windspeedknots = Math.round((windspeed * 1.94) * 100) / 100; // Windspeed from m/s in Knots; Round to 2 decimals
                    var windspeedkmh = Math.round((windspeed * 3.6) * 100) / 100; // Windspeed from m/s in km/h; Round to 2 decimals
                    var winddirectionstring = "La dirección del viento es"; // Wind from direction x as text
                    if (winddirection > 348.75 && winddirection <= 11.25) {
                        winddirectionstring = "Norte";
                    } else if (winddirection > 11.25 && winddirection <= 33.75) {
                        winddirectionstring = "Nornoreste";
                    } else if (winddirection > 33.75 && winddirection <= 56.25) {
                        winddirectionstring = "Noreste";
                    } else if (winddirection > 56.25 && winddirection <= 78.75) {
                        winddirectionstring = "Estenoreste";
                    } else if (winddirection > 78.75 && winddirection <= 101.25) {
                        winddirectionstring = "Este";
                    } else if (winddirection > 101.25 && winddirection <= 123.75) {
                        winddirectionstring = "Sureste";
                    } else if (winddirection > 123.75 && winddirection <= 146.25) {
                        winddirectionstring = "Sureste";
                    } else if (winddirection > 146.25 && winddirection <= 168.75) {
                        winddirectionstring = "Sursureste";
                    } else if (winddirection > 168.75 && winddirection <= 191.25) {
                        winddirectionstring = "Sur";
                    } else if (winddirection > 191.25 && winddirection <= 213.75) {
                        winddirectionstring = "Sursuroeste";
                    } else if (winddirection > 213.75 && winddirection <= 236.25) {
                        winddirectionstring = "Suroeste";
                    } else if (winddirection > 236.25 && winddirection <= 258.75) {
                        winddirectionstring = "Oestesudoeste";
                    } else if (winddirection > 258.75 && winddirection <= 281.25) {
                        winddirectionstring = "Oeste";
                    } else if (winddirection > 281.25 && winddirection <= 303.75) {
                        winddirectionstring = "Oestenoroeste";
                    } else if (winddirection > 303.75 && winddirection <= 326.25) {
                        winddirectionstring = "Noroeste";
                    } else if (winddirection > 326.25 && winddirection <= 348.75) {
                        winddirectionstring = "Noroeste";
                    } else {
                        winddirectionstring = " -actualmente no hay datos de viento disponibles- ";
                    };

                    //Popup with content
                    var fontsizesmall = 1;
                    popup.setContent("<b>Datos del tiempo :</b><br>" + "<img src=" + weathercondtioniconhtml + "><br>" + weatherconditionstring + " " + weatherconditiondescription + "<br><br>Temperatura: " + temperaturecelsius + "°C<br>Presión Atmosférica: " + airpressure + " hPa<br>Humedad relativa: " + airhumidity + "%" + "<br>Nuvosidad: " + cloudcoverage + "%<br><br>Velocidad del Viento: " + windspeedkmh + " km/h<br>Dirección del Viento: " + winddirectionstring + " (" + winddirection + "°)" + "<br><br><font size=" + fontsizesmall + ">Datos tomados de: www.openweathermap.org<br>Fecha y Hora : " + weathertimenormal + "<br>Localidad : " + weatherstationname + "<br>ID de la estación: " + weatherstationid + "<br>Coordenadas de la estación: " + weatherlocation_lon + ", " + weatherlocation_lat);
                },
                error: function () {
                    alert("error receiving wind data from openweathermap");
                }
            });
        });
        //getting json function ends here

        //popupfunction ends here
    }

    //popup
    map.on('click', onMapClick);

    // leyenda con trasparecia//
    var leyenda1 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Temperatura',
            layer: Temp,
            elements: [{
                label: ' ',
                html: '<img src="https://openweathermap.org/img/a/TT.png">'
            }]
        }],
        collapseSimple: true,
        detectStretched: false,
        collapsedOnInit: true,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    });

    var leyenda2 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Precipitación',
            layer: Precipitation,
            elements: [{
                label: ' ',
                html: '<img src="https://openweathermap.org/img/a/PR.png">'
            }]
        }],
        collapseSimple: true,
        detectStretched: false,
        collapsedOnInit: true,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    });
    var leyenda3 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Nubosidad',
            layer: Clouds,
            elements: [{
                label: ' ',
                html: '<img src="https://openweathermap.org/img/a/NT.png">'
            }]
        }],
        collapseSimple: true,
        detectStretched: false,
        collapsedOnInit: true,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    });
    var leyenda4 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Presión atmosférica',
            layer: Pressure,
            elements: [{
                label: ' ',
                html: '<img src="https://openweathermap.org/img/a/PN.png">'
            }]
        }],
        collapseSimple: true,
        detectStretched: false,
        collapsedOnInit: true,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    });
    var leyenda5 = L.control.htmllegend({
        position: 'bottomleft',
        legends: [{
            name: 'Velocidad del viento',
            layer: Wind,
            elements: [{
                label: ' ',
                html: '<img src="https://openweathermap.org/img/a/UV.png">'
            }]
        }],
        collapseSimple: true,
        detectStretched: false,
        collapsedOnInit: false,
        defaultOpacity: 0.7,
        visibleIcon: 'icon icon-eye',
        hiddenIcon: 'icon icon-eye-slash'
    });

    map.addControl(leyenda1);
    map.addControl(leyenda2);
    map.addControl(leyenda3);
    map.addControl(leyenda4);
    map.addControl(leyenda5);


