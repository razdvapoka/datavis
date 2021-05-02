fetch("manakin.json")
.then(function (response) {
    return response.json();

})
.then(function (jsonData1) {
    console.log(jsonData1);
  console.log("doin smth else");

var mymap = L.map('mapid', {
    crs: L.CRS.Simple
});
var bounds = [[0,0], [10000,10000]];
var image = L.imageOverlay('map_grid.png', bounds).addTo(map);
map.fitBounds(bounds)

var firstGuyPath = jsonData1.filter(function(jsonData1) 
{ return jsonData1['tag-local-identifier'] === 'D 51153'; });
console.log(firstGuyPath);

  var manakinLocations = firstGuyPath.map(function (firstGuyPath) {
    // каждый элемент массива превращается в [lat, lng]
    return [firstGuyPath["location-lat"], firstGuyPath["location-long"]];
  });
  console.log(manakinLocations);
  var polyline = L.polyline(manakinLocations, { color: "blue" }).addTo(mymap);
    // фокусируем карту на нашем polyline
    mymap.fitBounds(polyline.getBounds());
    polyline.bindPopup("&#128038");


    // для каждого элемента массива jsonData
    firstGuyPath.forEach(function (firstGuyPath) {
      // создаём кружок с координатами, взятыми из элемента массива (переменная stork)
      var circle = L.circle([firstGuyPath["location-lat"], firstGuyPath["location-long"]], {
        radius: 0.000001,

      });
      // привязываем к кружку поп-ап с данными, взятыми из элемента массива (переменная stork)
      var note = "&#128038" + firstGuyPath.comments + firstGuyPath.timestamp;
      circle.bindPopup(note);
      // добавляем кружок на карту
      circle.addTo(mymap);
    });

//-----------------------------------------------------------------------
var secondGuyPath = jsonData1.filter(function(jsonData1) 
{ return jsonData1['tag-local-identifier'] === '2014CA-MK10-05650'; });
console.log(secondGuyPath);

  var bluewhaleLocations = secondGuyPath.map(function (secondGuyPath) {
    // каждый элемент массива превращается в [lat, lng]
    return [secondGuyPath["location-lat"], secondGuyPath["location-long"]];
  });
  console.log(bluewhaleLocations);
  var polyline = L.polyline(bluewhaleLocations, { color: "blue" }).addTo(mymap);
    // фокусируем карту на нашем polyline
    mymap.fitBounds(polyline.getBounds());
    polyline.bindPopup("&#128011;");


    // для каждого элемента массива jsonData
    secondGuyPath.forEach(function (secondGuyPath) {
      // создаём кружок с координатами, взятыми из элемента массива (переменная stork)
      var circle = L.circle([secondGuyPath["location-lat"], secondGuyPath["location-long"]], {
        radius: 0.000001,

      });
      // привязываем к кружку поп-ап с данными, взятыми из элемента массива (переменная stork)
      var note = "&#128011;" + secondGuyPath.timestamp;
      circle.bindPopup(note);
      // добавляем кружок на карту
      circle.addTo(mymap);
    });
    //-----------------------------------------------------------------------
var thirdGuyPath = jsonData1.filter(function(jsonData1) 
{ return jsonData1['study-name'] === 'blueWingedTeal_USGS_ASC_argos'; });
console.log(thirdGuyPath);


  var tealLocations = thirdGuyPath.map(function (thirdGuyPath) {
    // каждый элемент массива превращается в [lat, lng]
    return [thirdGuyPath["location-lat"], thirdGuyPath["location-long"]];
  });
  console.log(tealLocations);
  var polyline = L.polyline(tealLocations, { color: "blue" }).addTo(mymap);
    // фокусируем карту на нашем polyline
    mymap.fitBounds(polyline.getBounds());
    polyline.bindPopup("&#128330;");


    // для каждого элемента массива jsonData
    thirdGuyPath.forEach(function (thirdGuyPath) {
      // создаём кружок с координатами, взятыми из элемента массива (переменная stork)
      var circle = L.circle([thirdGuyPath["location-lat"], thirdGuyPath["location-long"]], {
        radius: 0.000001,

      });
      // привязываем к кружку поп-ап с данными, взятыми из элемента массива (переменная stork)
      var note = "&#128330;" + thirdGuyPath.comments.toUpperCase() + thirdGuyPath.timestamp;
      circle.bindPopup(note);
      // добавляем кружок на карту
      circle.addTo(mymap);
    });
});