var wms_layers = [];
var format_Comarcas_0 = new ol.format.GeoJSON();
var features_Comarcas_0 = format_Comarcas_0.readFeatures(json_Comarcas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comarcas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Comarcas_0.addFeatures(features_Comarcas_0);var lyr_Comarcas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comarcas_0, 
                style: style_Comarcas_0,
                title: '<img src="styles/legend/Comarcas_0.png" /> Comarcas'
            });var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                title: '<img src="styles/legend/Provincias_1.png" /> Provincias'
            });var lyr_Relieve_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Relieve",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Relieve_2.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-168704.809618, 4599078.818527, 15611.274989, 4688471.887234]
                            })
                        });var lyr_Precipitacionesmarzo2020_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Precipitaciones marzo 2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Precipitacionesmarzo2020_3.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-132476.539649, 4587970.764975, -44709.544128, 4695869.508612]
                            })
                        });var format_Recintosmunicipales_4 = new ol.format.GeoJSON();
var features_Recintosmunicipales_4 = format_Recintosmunicipales_4.readFeatures(json_Recintosmunicipales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recintosmunicipales_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Recintosmunicipales_4.addFeatures(features_Recintosmunicipales_4);var lyr_Recintosmunicipales_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Recintosmunicipales_4, 
                style: style_Recintosmunicipales_4,
                title: '<img src="styles/legend/Recintosmunicipales_4.png" /> Recintos municipales'
            });var format_Lneasprovinciales_5 = new ol.format.GeoJSON();
var features_Lneasprovinciales_5 = format_Lneasprovinciales_5.readFeatures(json_Lneasprovinciales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lneasprovinciales_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Lneasprovinciales_5.addFeatures(features_Lneasprovinciales_5);var lyr_Lneasprovinciales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lneasprovinciales_5, 
                style: style_Lneasprovinciales_5,
                title: '<img src="styles/legend/Lneasprovinciales_5.png" /> Líneas provinciales'
            });var format_Datosprecipitacin_6 = new ol.format.GeoJSON();
var features_Datosprecipitacin_6 = format_Datosprecipitacin_6.readFeatures(json_Datosprecipitacin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datosprecipitacin_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Datosprecipitacin_6.addFeatures(features_Datosprecipitacin_6);cluster_Datosprecipitacin_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Datosprecipitacin_6
});var lyr_Datosprecipitacin_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Datosprecipitacin_6, 
                style: style_Datosprecipitacin_6,
                title: '<img src="styles/legend/Datosprecipitacin_6.png" /> Datos precipitación'
            });

lyr_Comarcas_0.setVisible(true);lyr_Provincias_1.setVisible(true);lyr_Relieve_2.setVisible(true);lyr_Precipitacionesmarzo2020_3.setVisible(true);lyr_Recintosmunicipales_4.setVisible(true);lyr_Lneasprovinciales_5.setVisible(true);lyr_Datosprecipitacin_6.setVisible(true);
var layersList = [lyr_Comarcas_0,lyr_Provincias_1,lyr_Relieve_2,lyr_Precipitacionesmarzo2020_3,lyr_Recintosmunicipales_4,lyr_Lneasprovinciales_5,lyr_Datosprecipitacin_6];
lyr_Comarcas_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINCIA': 'PROVINCIA', 'Area_ha': 'Area_ha', 'Comarca': 'Comarca', 'Cod_Comarc': 'Cod_Comarc', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Provincias_1.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'NAMEUNIT': 'NAMEUNIT', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Recintosmunicipales_4.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'COUNTRY': 'COUNTRY', 'NATLEVEL': 'NATLEVEL', 'NATCODE': 'NATCODE', 'Municipio': 'Municipio', 'CODNUT1': 'CODNUT1', 'CODNUT2': 'CODNUT2', 'CODNUT3': 'CODNUT3', });
lyr_Lneasprovinciales_5.set('fieldAliases', {'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATIONALLE': 'NATIONALLE', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_Datosprecipitacin_6.set('fieldAliases', {'ESTACION': 'ESTACION', 'X': 'X', 'Y': 'Y', 'PCP': 'PCP', });
lyr_Comarcas_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'Area_ha': 'TextEdit', 'Comarca': 'TextEdit', 'Cod_Comarc': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Provincias_1.set('fieldImages', {'INSPIREID': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEVEL': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEUNIT': 'TextEdit', 'CODNUT1': 'TextEdit', 'CODNUT2': 'TextEdit', 'CODNUT3': 'TextEdit', });
lyr_Recintosmunicipales_4.set('fieldImages', {'INSPIREID': 'Hidden', 'COUNTRY': 'Hidden', 'NATLEVEL': 'Hidden', 'NATCODE': 'Hidden', 'Municipio': 'TextEdit', 'CODNUT1': 'Hidden', 'CODNUT2': 'Hidden', 'CODNUT3': 'Hidden', });
lyr_Lneasprovinciales_5.set('fieldImages', {'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATIONALLE': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'TextEdit', 'URL_RESOUR': 'TextEdit', });
lyr_Datosprecipitacin_6.set('fieldImages', {'ESTACION': 'TextEdit', 'X': 'Hidden', 'Y': 'Hidden', 'PCP': 'TextEdit', });
lyr_Comarcas_0.set('fieldLabels', {'OBJECTID': 'no label', 'PROVINCIA': 'no label', 'Area_ha': 'no label', 'Comarca': 'no label', 'Cod_Comarc': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Provincias_1.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEVEL': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_Recintosmunicipales_4.set('fieldLabels', {'INSPIREID': 'no label', 'COUNTRY': 'no label', 'NATLEVEL': 'no label', 'NATCODE': 'no label', 'NAMEUNIT': 'no label', 'CODNUT1': 'no label', 'CODNUT2': 'no label', 'CODNUT3': 'no label', });
lyr_Lneasprovinciales_5.set('fieldLabels', {'INSPIREID': 'no label', 'NATIONALCO': 'no label', 'COUNTRY': 'no label', 'NATIONALLE': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_Datosprecipitacin_6.set('fieldLabels', {'ESTACION': 'no label', 'X': 'no label', 'Y': 'no label', 'PCP': 'header label', });
lyr_Datosprecipitacin_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});