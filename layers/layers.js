ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([677930.873592, 6408052.063596, 750594.122869, 6455798.350656]);
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
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [704816.275691, 6428551.672222, 710134.063141, 6433827.587330]
        })
    });

lyr_Gmaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Nusbaum_2.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OpenStreetMap_1,lyr_Nusbaum_2];
