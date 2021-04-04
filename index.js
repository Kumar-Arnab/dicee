//dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomImageScource1 = "images/" + randomDiceImage;//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageScource1);

//dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageScource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageScource2);

//title
if( randomNumber1 > randomNumber2 ){
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}else if ( randomNumber2 > randomNumber1 ) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}else{
  document.querySelector("h1").innerHTML = "It's a DRAW!!!";
}
