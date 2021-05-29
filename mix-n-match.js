fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/100")
  .then(function (response) {
    return response.json();
  })
  .then(function (genres) {
    var firstHalf = genres.slice(0, 50);
    var secondHalf = genres.slice(50);

    var column1 = document.querySelector(".column-1");
    var column2 = document.querySelector(".column-2");

    firstHalf.forEach(function (genre) {
      var genreEl = document.createElement("div");
      genreEl.classList.add("genre");
      genreEl.innerHTML = genre;
      column1.appendChild(genreEl);
    });

    secondHalf.forEach(function (genre) {
      var genreEl = document.createElement("div");
      genreEl.classList.add("genre");
      genreEl.innerHTML = genre;
      column2.appendChild(genreEl);
    });

    var resultBox = document.querySelector(".result-box");
    var metalButton = document.querySelector(".metal-button");
    metalButton.addEventListener("click", function () {
      // var firstHalfMetal = firstHalf.filter(function (genre) {
      //   return genre.includes("metal");
      // });
      // var secondHalfMetal = secondHalf.filter(function (genre) {
      //   return genre.includes("metal");
      // });
      var randomFirstHalfGenre = randomArrayItem(firstHalf);
      var randomSecondHalfGenre = randomArrayItem(secondHalf);

      var finalGenre = randomFirstHalfGenre + " " + randomSecondHalfGenre;
      // resultBox.innerHTML = randomArrayItem(finalGenre.split(" "));
      resultBox.innerHTML = finalGenre;
    });
  });

function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
