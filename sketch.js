const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var mouseB;
var turn = 0;
var engine, world;
var box1, pig1;
var backgroundImg, platform;
var ground;
abc = 0;
score = 0;
var par1State = "Not Static";
var par2State = "Not Static";
var par3State = "Not Static";
var par4State = "Not Static";
var par5State = "Not Static";
var gameState = "In Play";
var par1;
var par2;
var par3;
var par4;
var par5;

var plingo = [];
var division = [];
var divisionHeight = 300;

function preload() {}

function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, width, 20);
  for (var k = 0; k <= width; k = k + 60) {
    division.push(new Division(k, 645, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plingo.push(new Plingo(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50) {
    plingo.push(new Plingo(j, 175));
  }
}

function draw() {
  background(0);
  if (gameState === "In Play") {
    Engine.update(engine);
    ground.display();

    if (par1State === "Static") {
      whichStack(par1);
      console.log(score);
      par1State = "Score Added";
    }
    if (par2State === "Static") {
      whichStack(par2);
      console.log(score);
      par2State = "Score Added";
    }
    if (par3State === "Static") {
      whichStack(par3);
      console.log(score);
      par3State = "Score Added";
    }
    if (par4State === "Static") {
      whichStack(par4);
      console.log(score);
      par4State = "Score Added";
    }
    if (par5State === "Static") {
      whichStack(par5);
      console.log(score);
      par5State = "Score Added";
    }
    for (var k = 0; k < division.length; k++) {
      division[k].display();
    }

    for (var j = 0; j < plingo.length; j++) {
      plingo[j].display();
    } //
    if (par1) {
      par1.display();
    }
    if (par2) {
      par2.display();
    }
    if (par3) {
      par3.display();
    }
    if (par4) {
      par4.display();
    }
    if (par5) {
      par5.display();
    }

    if (
      par1 &&
      par1.body.speed < 1 &&
      par1.body.position.y > 400 &&
      par1State !== "Score Added"
    ) {
      par1State = "Static";
    }
    if (
      par2 &&
      par2.body.speed < 1 &&
      par2.body.position.y > 400 &&
      par2State !== "Score Added"
    ) {
      par2State = "Static";
    }
    if (
      par3 &&
      par3.body.speed < 1 &&
      par3.body.position.y > 400 &&
      par3State !== "Score Added"
    ) {
      par3State = "Static";
    }
    if (
      par4 &&
      par4.body.speed < 1 &&
      par4.body.position.y > 400 &&
      par4State !== "Score Added"
    ) {
      par4State = "Static";
    }
    if (
      par5 &&
      par5.body.speed < 1 &&
      par5.body.position.y > 400 &&
      par5State !== "Score Added"
    ) {
      par5State = "Static";
    }
    if (turn === 5) {
      gameState = "over";
    }
  }
  if (gameState === "over") {
    text("Game Over", 300, 400);
  }

  text("Score: " + score, 400, 400);
}

function mousePressed() {
  if (gameState === "In Play") {
    if (turn === 0) {
      par1 = new Partical(mouseX, 0);
    }
    if (turn === 1) {
      par2 = new Partical(mouseX, 0);
    }
    if (turn === 2) {
      par3 = new Partical(mouseX, 0);
    }
    if (turn === 3) {
      par4 = new Partical(mouseX, 0);
    }
    if (turn === 4) {
      par5 = new Partical(mouseX, 0);
    }
    turn++;
  }
}
function whichStack(a) {
  if (a.body.position.x > 0 && a.body.position.x < 60) {
    score = score + 400;
  }
  if (a.body.position.x > 60 && a.body.position.x < 120) {
    score = score + 300;
  }
  if (a.body.position.x > 120 && a.body.position.x < 180) {
    score = score + 200;
  }
  if (a.body.position.x > 180 && a.body.position.x < 240) {
    score = score + 50;
  }
  if (a.body.position.x > 240 && a.body.position.x < 300) {
    score = score + 50;
  }
  if (a.body.position.x > 360 && a.body.position.x < 420) {
    score = score + 200;
  }
  if (a.body.position.x > 420 && a.body.position.x < 480) {
    score = score + 300;
  }
}
