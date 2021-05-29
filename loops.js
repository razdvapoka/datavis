fetch("https://api.github.com/emojis")
  .then(function (response) {
    return response.json();
  })
  .then(function (emojisObj) {
    var emojis = Object.values(emojisObj);
    var box = document.querySelector(".box");
    for (let index = 0; index < 2000; index++) {
      const elementBox = document.createElement("div");
      elementBox.classList.add("item-box");
      const element = document.createElement("div");
      element.classList.add("item");
      element.addEventListener("mouseenter", function () {
        // element.style.backgroundColor = randomColor();
        var imageUrl = "url(" + randomArrayItem(emojis) + ")";
        element.style.backgroundImage = imageUrl;
        setTimeout(function () {
          element.style.backgroundImage = "none";
        }, 500);
      });
      elementBox.appendChild(element);
      box.appendChild(elementBox);
    }
  });

function randomColor() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")"
  );
}

function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var imgArray = [];

for (var i = 0; i < 20; i++) {
  var imgNumber = i + 1 >= 10 ? i + 1 : "0" + (i + 1);
  var imgPath = "tiles/tiles-" + imgNumber + ".jpg";
  imgArray.push(imgPath);
}

function reset() {
  var items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    // item.style.backgroundColor = "white";
    item.style.backgroundImage = "none";
  });
}

var resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", reset);

setInterval(reset, 5000);

setInterval(function () {
  var items = Array.from(document.querySelectorAll(".item")).slice(0, 300);
  var randomItem = randomArrayItem(items);
  randomItem.style.backgroundImage = "url(" + imgArray[0] + ")";
}, 10);

setInterval(function () {
  var items = Array.from(document.querySelectorAll(".item")).slice(300, 500);
  var randomItem = randomArrayItem(items);
  randomItem.style.backgroundImage = "url(" + imgArray[1] + ")";
}, 100);

setInterval(function () {
  var items = Array.from(document.querySelectorAll(".item")).slice(500, 800);
  var randomItem = randomArrayItem(items);
  randomItem.style.backgroundImage = "url(" + imgArray[2] + ")";
}, 300);
