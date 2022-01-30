
// for player one : 

var randNumGen1 = Math.floor(Math.random() * 6) + 1;

var imgsource1 = "images/dice" + randNumGen1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imgsource1);


// for player 2

var randNumGen2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randNumGen2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

if (randNumGen1 > randNumGen2) {
    document.querySelector("h1").innerHTML = "🎊 Player 1 Wins 🎊";
}
else if (randNumGen2 > randNumGen1) {
    document.querySelector("h1").innerHTML = "🎊 Player 2 Wins 🎊";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}