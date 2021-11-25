var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var keyPress=false;
var cars, car1, car2;
var car1img,car2img,trackimg;

function preload(){
car1img=loadImage("images/car1.png");
car2img=loadImage("images/car2.png");
trackimg=loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

if(gameState === 2 && keyPress=== false){
  var gameOver= createElement('h2',"Game Over");
  gameOver.position(displayWidth/2,80);
  console.log(keyPress);
 }
}
