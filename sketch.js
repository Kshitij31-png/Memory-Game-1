//var cards = [];
const numberOfRows=4;
const numberofColumns=4;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var tries=0;
var engine, world;
var cards
function preload(){
  cardImg = loadImage("Card.png");
  Img1 = loadImage("1.png");
  Img2 = loadImage("2.png");
  Img3 = loadImage("3.jpg");
  Img4 = loadImage("4.png");
  Img5 = loadImage("5.png");
}
function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  cards = new Group();

  
}
function draw() {
  background(0);  
  Engine.update(engine);
  createCard();
  

  drawSprites();
}
function createCard()
{
for(var i=0;i<numberofColumns;i=i+1)
{
for(var j=0;j<numberOfRows;j=j+1)
{
  fill ("blue")
  rect(i*150+30,j*150+50,40,40);

  // rect(i*380+30,j*380+50,40,40);
}
}
}