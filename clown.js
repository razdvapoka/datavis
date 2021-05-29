
var back = document.querySelector("body");

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
     var x1 = x;
 var y1 = y;

var a = "x1"+"%";
var b = "y1"+"%";
  //   document.getElementById("demo").innerHTML = coor;
    console.log(x,y);
    
  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }
  


back.style.background = randomConicGradient();
// "repeating-conic-gradient(from 3deg at 50% 50%,hsl(200, 100%, 50%) 0deg 15deg,hsl(200, 100%, 60%) 10deg 30deg)";
console.log(x,y);

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomConicGradient(angle=90) {
    var c1 = randomColor();
    var c2 = randomColor();
    var c3 = randomColor();
    return "repeating-conic-gradient(from 3deg at "+a+" "+b+", hsl(200, 100%, 50%) 0deg 15deg,hsl(200, 100%, 60%) 10deg 30deg)";

}

function randomLinearGradient(angle=90) {
    var c1 = randomColor();
    var c2 = randomColor();
    var c3 = randomColor();
    return "linear-gradient("+ angle + "deg," + c1 + ","+ c2 + ","+ c3 +")";

}
    

function randomColor() {
    var r = randomNumber();
    var g = randomNumber();
    var b = randomNumber();
    return "rgb("+r+","+g+","+b+")";
}

console.log(randomColor)


// back.style.background = "conic-gradient(from 45deg, blue, red, blue)";