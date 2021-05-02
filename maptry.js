fetch("manakin.json")
.then(function (response) {
    return response.json();

})
.then(function (jsonData) {
    console.log(jsonData);
 //   var dataElement = document.querySelector(".data");
  //  dataElement.innerText = JSON.stringify(jsonData, null, 4);
  console.log("doin smth else");
//   var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mymap = L.map('mapid', {
    crs: L.CRS.Simple
});
var bounds = [[0,0], [10000,10000]];
var image = L.imageOverlay('map_grid.png', bounds).addTo(map);
map.fitBounds(bounds)
  var manakinLocations = jsonData.map(function (manakin) {
    // каждый элемент массива превращается в [lat, lng]
    return [manakin["location-lat"], manakin["location-long"]];
  });
  var polyline = L.polyline(manakinLocations, { color: "blue" }).addTo(mymap);
    // фокусируем карту на нашем polyline
    mymap.fitBounds(polyline.getBounds());
    polyline.bindPopup("&#128038");


    // для каждого элемента массива jsonData
    jsonData.forEach(function (manakin) {
      // создаём кружок с координатами, взятыми из элемента массива (переменная stork)
      var circle = L.circle([manakin["location-lat"], manakin["location-long"]], {
        radius: 0.000001,
      });
      // привязываем к кружку поп-ап с данными, взятыми из элемента массива (переменная stork)
      circle.bindPopup(manakin.timestamp);
      // добавляем кружок на карту
      circle.addTo(mymap);
    });
});


