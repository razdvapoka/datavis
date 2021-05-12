var imgArray = [];

for (var i = 0; i < 20; i++) {
  var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
  var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
  imgArray.push(imgPath);
}

var imagesEl = document.querySelector(".images");
imgArray.forEach(function (imgPath) {
  var imgEl = document.createElement("img");
  imgEl.style.width = "100px";
  imgEl.src = imgPath;
  imagesEl.appendChild(imgEl);
});

var images = document.querySelectorAll("img");
images.forEach(function (imgEl, imgElIndex) {
  // сделать что-то с каждой из картинок
});