fetch(
  "https://api.github.com/emojis?utm_medium=referral&utm_campaign=ZEEF&utm_source=https%3A%2F%2Fjson-datasets.zeef.com%2Fjdorfman"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData3) {
    var imgPaths = Object.values(jsonData3);
    var imagesEl = document.querySelector(".images");
    imgPaths.forEach(function (imgPath) {
      var imgEl = document.createElement("img");
      imgEl.style.width = "100px";
      imgEl.src = imgPath;
      imagesEl.appendChild(imgEl);
    });
  });
