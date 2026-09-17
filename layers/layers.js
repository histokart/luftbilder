ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([691562.507520, 6418883.455667, 724800.084125, 6442756.599197]);
var wms_layers = [];

var lyr_RPDigitaleOrthophotosDOP20WMS_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.geoportal.rlp.de/mapbender/php/wms.php?layer_id%3D61675%26VERSION%3D1.1.1%26withChilds%3D1",
                              attributions: '<a href="http://www.lvermgeo.rlp.de">©GeoBasis-DE / LVermGeoRP<Jahr des Datenbezugs>, dl-de/by-2-0</a>',
                              params: {
                                "LAYERS": "rp_dop20",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'RP: Digitale Orthophotos - DOP20 (WMS)',
                            popuplayertitle: 'RP: Digitale Orthophotos - DOP20 (WMS)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RPDigitaleOrthophotosDOP20WMS_0, 0]);

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
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [704816.275691, 6428551.672222, 710134.063141, 6433827.587330]
        })
    });

lyr_RPDigitaleOrthophotosDOP20WMS_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Nusbaum_2.setVisible(true);
var layersList = [lyr_RPDigitaleOrthophotosDOP20WMS_0,lyr_OpenStreetMap_1,lyr_Nusbaum_2];
