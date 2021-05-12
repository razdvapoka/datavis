fetch("https://api.github.com/emojis?utm_medium=referral&utm_campaign=ZEEF&utm_source=https%3A%2F%2Fjson-datasets.zeef.com%2Fjdorfman")
.then(function (response) {
    return response.json();

})
.then(function (jsonData3) {
    console.log(jsonData3);
  console.log("doin smth else");

 var imgPath = Object.values(jsonData3);
 imgPath.

  // var imgPath = [
  //   'https://github.githubassets.com/images/icons/emoji/unicode/1f947.png?v8'
  // ];
  console.log(imgPath);
  // imgPath.push(imgPath);

  var imagesEl = document.querySelector(".images");
imgPath.slice(0, 100).forEach(function (jsonData3) {
  var imgEl = document.createElement("img");
  imgEl.style.width = "100px";
  imgEl.src = imgPath;
  imagesEl.appendChild(imgEl);
});

// var emoji = jsonData3.map(function (jsonData3) {
//     return [jsonData3["100"]];
    
//   });
//   console.log(emoji)
});
