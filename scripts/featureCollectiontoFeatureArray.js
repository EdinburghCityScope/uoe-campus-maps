// Script which converts a FeatureCollection to an array of Features
var fs = require('fs');
var featureCollection = JSON.parse(fs.readFileSync('../data/campus-maps.geojson', 'utf8'));
var features = [];
features = featureCollection.features;

var outputFile = '../data/campus-maps-features.json';
fs.writeFile(outputFile,JSON.stringify(features),(err) => {
  if (err) throw err;
  console.log('../data/campus-maps-features.json created');
});
