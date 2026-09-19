ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([285163.642036, 5513348.954626, 333861.894221, 5548786.649878]);
var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://google.com">- Map data © Google -</a>',
                url: 'https://www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">- © OpenStreetMap-Beitragende -</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Schwarzenbruch_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Schwarzenbruch<br />\
    <img src="styles/legend/Schwarzenbruch_2_0.png" /> 0<br />\
    <img src="styles/legend/Schwarzenbruch_2_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Schwarzenbruch_2.png",
            attributions: ' ',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [307420.745088, 5528305.386798, 310870.755789, 5531763.312636]
        })
    });
var lyr_Nusbaum_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nusbaum<br />\
    <img src="styles/legend/Nusbaum_3_0.png" /> 0<br />\
    <img src="styles/legend/Nusbaum_3_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nusbaum_3.png",
            attributions: '<a href="https://www.archives.gov/">- Bildquelle: U.S. National Archives and Records Administration -</a>',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [308404.396437, 5530534.720453, 311935.625705, 5534047.747508]
        })
    });
var lyr_Freilingen_2_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Freilingen_2<br />\
    <img src="styles/legend/Freilingen_2_4_0.png" /> 0<br />\
    <img src="styles/legend/Freilingen_2_4_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Freilingen_2_4.png",
            attributions: ' ',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [306247.855258, 5531054.416913, 309720.091187, 5534545.112363]
        })
    });
var lyr_Stockigt_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Stockigt<br />\
    <img src="styles/legend/Stockigt_5_0.png" /> 0<br />\
    <img src="styles/legend/Stockigt_5_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Stockigt_5.png",
            attributions: ' ',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [308242.644945, 5529542.992757, 311727.661111, 5533005.470420]
        })
    });
var lyr_Freilingen_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Freilingen<br />\
    <img src="styles/legend/Freilingen_6_0.png" /> 0<br />\
    <img src="styles/legend/Freilingen_6_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Freilingen_6.png",
            attributions: ' ',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [307187.997451, 5531292.751864, 310738.852251, 5534811.804998]
        })
    });
var group_Luftbilder = new ol.layer.Group({
                                layers: [lyr_Schwarzenbruch_2,lyr_Nusbaum_3,lyr_Freilingen_2_4,lyr_Stockigt_5,lyr_Freilingen_6,],
                                fold: 'open',
                                title: 'Luftbilder'});

lyr_Gmaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Schwarzenbruch_2.setVisible(true);lyr_Nusbaum_3.setVisible(true);lyr_Freilingen_2_4.setVisible(true);lyr_Stockigt_5.setVisible(true);lyr_Freilingen_6.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OpenStreetMap_1,group_Luftbilder];
