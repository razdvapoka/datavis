fetch("https://api.le-systeme-solaire.net/rest/bodies/saturne")
.then(function (responce) {
    return response.json();

})
.then(function (data) {
    console.log(data);
});