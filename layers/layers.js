ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25832").setExtent([296073.529586, 5525078.999787, 320742.738086, 5542797.847413]);
var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://google.com">Map data © Google</a>',
                url: 'https://www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap-Beitragende</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Nusbaum_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nusbaum<br />\
    <img src="styles/legend/Nusbaum_2_0.png" /> 0<br />\
    <img src="styles/legend/Nusbaum_2_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nusbaum_2.png",
            attributions: '<a href="https://www.archives.gov/">Bildquelle: U.S. National Archives and Records Administration</a>',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [308404.396437, 5530534.720453, 311935.625705, 5534047.747508]
        })
    });
var lyr_Freilingen_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Freilingen<br />\
    <img src="styles/legend/Freilingen_3_0.png" /> 0<br />\
    <img src="styles/legend/Freilingen_3_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Freilingen_3.png",
            attributions: '<a href="https://www.archives.gov/">Bildquelle: U.S. National Archives and Records Administration</a>',
            projection: 'EPSG:25832',
            alwaysInRange: true,
            imageExtent: [307159.392279, 5531294.081456, 310738.428418, 5534847.073670]
        })
    });

lyr_Gmaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Nusbaum_2.setVisible(true);lyr_Freilingen_3.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OpenStreetMap_1,lyr_Nusbaum_2,lyr_Freilingen_3];
