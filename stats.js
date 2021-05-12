var votes = [0,0,0,0,0,0,0,0];
var previousVotes = localStorage.getItem("votes");
var colorDivs = document.querySelectorAll(".color");
if (previousVotes) {
    console.log ("previousVotes is not null");
    votes = JSON.parse(previousVotes);
}

colorDivs.forEach(function(colorDiv, colorDivIndex) {
    colorDiv.addEventListener("click",function() {
        console.log(colorDiv);
        votes[colorDivIndex] += 1;
        updateCircleTexts();
        updateResults();
        localStorage.setItem("votes", JSON.stringify(votes));
    });
});

var resultDivs = document.querySelectorAll(".result");

function updateResults () {
    resultDivs.forEach(function (resultDiv, resultDivIndex) {
        resultDiv.style.transform = "scale(" + (1 + votes[resultDivIndex]) + ")";
    }
    );

}

function updateCircleTexts () {
    colorDivs.forEach(function (colorDiv, colorDivIndex) {
        colorDiv.innerText = votes[colorDivIndex];
    }
    );

}


