var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GrayscaleMap_1 = new ol.layer.Tile({
            'title': 'Grayscale Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CityWards_2 = new ol.format.GeoJSON();
var features_CityWards_2 = format_CityWards_2.readFeatures(json_CityWards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityWards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityWards_2.addFeatures(features_CityWards_2);
var lyr_CityWards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityWards_2, 
                style: style_CityWards_2,
                popuplayertitle: 'City Wards',
                interactive: true,
                title: '<img src="styles/legend/CityWards_2.png" /> City Wards'
            });
var format_NonroutedAAAInfra_3 = new ol.format.GeoJSON();
var features_NonroutedAAAInfra_3 = format_NonroutedAAAInfra_3.readFeatures(json_NonroutedAAAInfra_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonroutedAAAInfra_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonroutedAAAInfra_3.addFeatures(features_NonroutedAAAInfra_3);
var lyr_NonroutedAAAInfra_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonroutedAAAInfra_3, 
                style: style_NonroutedAAAInfra_3,
                popuplayertitle: 'Non-routed AAA Infra',
                interactive: true,
                title: '<img src="styles/legend/NonroutedAAAInfra_3.png" /> Non-routed AAA Infra'
            });
var format_Alternaterouteconsiderations_4 = new ol.format.GeoJSON();
var features_Alternaterouteconsiderations_4 = format_Alternaterouteconsiderations_4.readFeatures(json_Alternaterouteconsiderations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternaterouteconsiderations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternaterouteconsiderations_4.addFeatures(features_Alternaterouteconsiderations_4);
var lyr_Alternaterouteconsiderations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alternaterouteconsiderations_4, 
                style: style_Alternaterouteconsiderations_4,
                popuplayertitle: 'Alternate route considerations',
                interactive: true,
                title: '<img src="styles/legend/Alternaterouteconsiderations_4.png" /> Alternate route considerations'
            });
var format_2029Quickbuildgapdetours_5 = new ol.format.GeoJSON();
var features_2029Quickbuildgapdetours_5 = format_2029Quickbuildgapdetours_5.readFeatures(json_2029Quickbuildgapdetours_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2029Quickbuildgapdetours_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2029Quickbuildgapdetours_5.addFeatures(features_2029Quickbuildgapdetours_5);
var lyr_2029Quickbuildgapdetours_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2029Quickbuildgapdetours_5, 
                style: style_2029Quickbuildgapdetours_5,
                popuplayertitle: '2029 Quickbuild gap detours',
                interactive: true,
                title: '<img src="styles/legend/2029Quickbuildgapdetours_5.png" /> 2029 Quickbuild gap detours'
            });
var format_QuickbuildSegments_6 = new ol.format.GeoJSON();
var features_QuickbuildSegments_6 = format_QuickbuildSegments_6.readFeatures(json_QuickbuildSegments_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuickbuildSegments_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuickbuildSegments_6.addFeatures(features_QuickbuildSegments_6);
var lyr_QuickbuildSegments_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuickbuildSegments_6, 
                style: style_QuickbuildSegments_6,
                popuplayertitle: 'Quickbuild Segments',
                interactive: true,
    title: 'Quickbuild Segments<br />\
    <img src="styles/legend/QuickbuildSegments_6_0.png" /> Already Committed<br />\
    <img src="styles/legend/QuickbuildSegments_6_1.png" /> Calm Street<br />\
    <img src="styles/legend/QuickbuildSegments_6_2.png" /> Paint<br />\
    <img src="styles/legend/QuickbuildSegments_6_3.png" /> Quick Build<br />' });
var format_Routessortedbycost_7 = new ol.format.GeoJSON();
var features_Routessortedbycost_7 = format_Routessortedbycost_7.readFeatures(json_Routessortedbycost_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routessortedbycost_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routessortedbycost_7.addFeatures(features_Routessortedbycost_7);
var lyr_Routessortedbycost_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routessortedbycost_7, 
                style: style_Routessortedbycost_7,
                popuplayertitle: 'Routes sorted by cost',
                interactive: true,
    title: 'Routes sorted by cost<br />\
    <img src="styles/legend/Routessortedbycost_7_0.png" /> MUP/Raised<br />\
    <img src="styles/legend/Routessortedbycost_7_1.png" /> Slow Build On-Street<br />\
    <img src="styles/legend/Routessortedbycost_7_2.png" /> Calm Street<br />\
    <img src="styles/legend/Routessortedbycost_7_3.png" /> Quick Build<br />\
    <img src="styles/legend/Routessortedbycost_7_4.png" /> Paint<br />\
    <img src="styles/legend/Routessortedbycost_7_5.png" /> Greenway<br />\
    <img src="styles/legend/Routessortedbycost_7_6.png" /> Already Committed<br />' });
var format_SubwayStyleMapwithroutenumbers_8 = new ol.format.GeoJSON();
var features_SubwayStyleMapwithroutenumbers_8 = format_SubwayStyleMapwithroutenumbers_8.readFeatures(json_SubwayStyleMapwithroutenumbers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStyleMapwithroutenumbers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStyleMapwithroutenumbers_8.addFeatures(features_SubwayStyleMapwithroutenumbers_8);
var lyr_SubwayStyleMapwithroutenumbers_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubwayStyleMapwithroutenumbers_8, 
                style: style_SubwayStyleMapwithroutenumbers_8,
                popuplayertitle: 'Subway Style Map with route numbers',
                interactive: true,
                title: 'Subway Style Map with route numbers'
            });
var format_SubwayStyleMapwoutLabels_9 = new ol.format.GeoJSON();
var features_SubwayStyleMapwoutLabels_9 = format_SubwayStyleMapwoutLabels_9.readFeatures(json_SubwayStyleMapwoutLabels_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStyleMapwoutLabels_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStyleMapwoutLabels_9.addFeatures(features_SubwayStyleMapwoutLabels_9);
var lyr_SubwayStyleMapwoutLabels_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubwayStyleMapwoutLabels_9, 
                style: style_SubwayStyleMapwoutLabels_9,
                popuplayertitle: 'Subway Style Map w/out Labels',
                interactive: true,
                title: 'Subway Style Map w/out Labels'
            });

lyr_GoogleEarth_0.setVisible(false);lyr_GrayscaleMap_1.setVisible(true);lyr_CityWards_2.setVisible(false);lyr_NonroutedAAAInfra_3.setVisible(false);lyr_Alternaterouteconsiderations_4.setVisible(false);lyr_2029Quickbuildgapdetours_5.setVisible(false);lyr_QuickbuildSegments_6.setVisible(false);lyr_Routessortedbycost_7.setVisible(false);lyr_SubwayStyleMapwithroutenumbers_8.setVisible(false);lyr_SubwayStyleMapwoutLabels_9.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_GrayscaleMap_1,lyr_CityWards_2,lyr_NonroutedAAAInfra_3,lyr_Alternaterouteconsiderations_4,lyr_2029Quickbuildgapdetours_5,lyr_QuickbuildSegments_6,lyr_Routessortedbycost_7,lyr_SubwayStyleMapwithroutenumbers_8,lyr_SubwayStyleMapwoutLabels_9];
lyr_CityWards_2.set('fieldAliases', {'id': 'id', 'Ward Num': 'Ward Num', });
lyr_NonroutedAAAInfra_3.set('fieldAliases', {'id': 'id', 'Street': 'Street', 'Type': 'Type', });
lyr_Alternaterouteconsiderations_4.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Notes': 'Notes', 'Label': 'Label', 'Type': 'Type', 'Committed': 'Committed', });
lyr_2029Quickbuildgapdetours_5.set('fieldAliases', {'id': 'id', 'Notes': 'Notes', 'length': 'length', });
lyr_QuickbuildSegments_6.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_Routessortedbycost_7.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_SubwayStyleMapwithroutenumbers_8.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_SubwayStyleMapwoutLabels_9.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_CityWards_2.set('fieldImages', {'id': 'TextEdit', 'Ward Num': 'TextEdit', });
lyr_NonroutedAAAInfra_3.set('fieldImages', {'id': 'TextEdit', 'Street': 'TextEdit', 'Type': 'TextEdit', });
lyr_Alternaterouteconsiderations_4.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Type': 'TextEdit', 'Committed': '', });
lyr_2029Quickbuildgapdetours_5.set('fieldImages', {'id': 'TextEdit', 'Notes': 'TextEdit', 'length': 'TextEdit', });
lyr_QuickbuildSegments_6.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'UniqueValues', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_Routessortedbycost_7.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'UniqueValues', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_SubwayStyleMapwithroutenumbers_8.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'TextEdit', 'Road Diet': 'TextEdit', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_SubwayStyleMapwoutLabels_9.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'UniqueValues', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'TextEdit', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_CityWards_2.set('fieldLabels', {'id': 'no label', 'Ward Num': 'no label', });
lyr_NonroutedAAAInfra_3.set('fieldLabels', {'id': 'no label', 'Street': 'no label', 'Type': 'no label', });
lyr_Alternaterouteconsiderations_4.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'inline label - always visible', 'Type': 'inline label - always visible', 'Committed': 'inline label - always visible', });
lyr_2029Quickbuildgapdetours_5.set('fieldLabels', {'id': 'hidden field', 'Notes': 'inline label - always visible', 'length': 'no label', });
lyr_QuickbuildSegments_6.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'no label', 'Notes': 'inline label - visible with data', 'Label': 'hidden field', 'Committed': 'inline label - visible with data', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'hidden field', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'hidden field', 'Total_mi': 'hidden field', });
lyr_Routessortedbycost_7.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Road Diet': 'no label', 'Cost': 'inline label - always visible', 'Status': 'inline label - visible with data', 'Commit_mi': 'hidden field', 'Total_mi': 'hidden field', });
lyr_SubwayStyleMapwithroutenumbers_8.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'inline label - always visible', 'Total_mi': 'inline label - always visible', });
lyr_SubwayStyleMapwoutLabels_9.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'inline label - always visible', 'Total_mi': 'inline label - always visible', });
lyr_SubwayStyleMapwoutLabels_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});