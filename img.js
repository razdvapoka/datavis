var dataSourceUrl = "https://api.le-systeme-solaire.net/rest/bodies";
var fileDataSourceUrl = "bodies.json";

async function getData(url) {
    var response = await fetch(url);
    var data = await response.json();
    return data;
}

getData(dataSourceUrl).then(function (data) {
    var bodies = data.bodies;

    var bodiesWithMoons = bodies.filter (function(body) {
        return body.moons
    });

    var BodiesSortedByMoonCount = bodiesWithMoons.sort(function(a, b) {
        return a.moons.lenght > b.moons.length ? 1 : -1
    });

    var bodyNames = bodiesWithMoons.map(function (body) {
        return body.englishName;
    });
    var moonCounts = bodiesWithMoons.map(function (body) {
        return body.moons.length;
    });

    var ctx = document.getElementById('chart-1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: bodyNames,
            datasets: [
                {
                    label: '# of Moons',
                    data: moonCounts,
                    borderWidth: 3,
                    bordercolor: '#ff00ff'
                    borderDash: [10],
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0;
                    max: 100,
                },
            },
        },
    });
});
