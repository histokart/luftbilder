var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Nusbaum_modifiziert_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Nusbaum_modifiziert<br />\
    <img src="styles/legend/Nusbaum_modifiziert_2_0.png" /> 1<br />\
    <img src="styles/legend/Nusbaum_modifiziert_2_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Nusbaum_modifiziert_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [704852.362590, 6428579.999769, 709978.372277, 6433746.812009]
        })
    });

lyr_Gmaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Nusbaum_modifiziert_2.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OpenStreetMap_1,lyr_Nusbaum_modifiziert_2];
