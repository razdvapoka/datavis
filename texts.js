fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/100")
  .then(function (response) {
    return response.json();
  })
  .then(function (genres) {
    // вывести все жанры на страницу
    var genreBox = document.querySelector(".genre-box");
    genres.forEach(function (genre) {
      var genreEl = document.createElement("div");
      genreEl.classList.add("genre");
      genreEl.innerHTML = genre;
      if (genre.includes("metal")) {
        genreEl.style.fontSize = "100px";
      }
      if (genre.includes("punk")) {
        genreEl.style.color = "chartreuse";
      }
      if (genre.includes("soul")) {
        genreEl.style.color = "rebeccapurple";
      }
      if (genre.includes("ska")) {
        genreEl.style.fontFamily = "serif";
        genreEl.style.fontStyle = "italic";
      }
      if (genre.includes("wave")) {
        genreEl.style.border = "2px solid aquamarine";
      }
      genreBox.appendChild(genreEl);
    });

    // посчитать количество жанров со словом 'metal'
    var metalCounter = countGenresWithSpecificWord(genres, "metal");
    var metalCounterEl = document.querySelector(".metal-counter");
    metalCounterEl.innerHTML = "Metal genres counter: " + metalCounter;

    var waveCounter = countGenresWithSpecificWord(genres, "wave");
    var waveCounterEl = document.querySelector(".wave-counter");
    waveCounterEl.innerHTML = "Wave genres counter: " + waveCounter;

    var skaCounter = countGenresWithSpecificWord(genres, "ska");
    var skaCounterEl = document.querySelector(".ska-counter");
    skaCounterEl.innerHTML = "Ska genres counter: " + skaCounter;
  });

function countGenresWithSpecificWord(genres, word) {
  var wordCounter = 0;
  genres.forEach(function (genre) {
    if (genre.includes(word)) {
      wordCounter++;
    }
  });
  return wordCounter;
}
