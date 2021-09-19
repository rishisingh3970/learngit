function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
 
}

function draw() {
  background("black");  
  
}
// creating variables
var player;
var target;
var edges;
var obstacle1;
var obs2;

function setup() {
createCanvas(500,500);
edges = createEdgeSprites();
player = createSprite(50,420,30,30)
target = createSprite(450,50,30,30)
// creating obstacles 
obs1 = createSprite(200, 120,100,20)
obs2 = createSprite(300,350,100,20)
// colors to sprite
player.shapeColor= "green"
target.shapeColor= "blue"
obs1.shapeColor= "red"
obs2.shapeColor= "red"
// provide speed 
obs1.velocityX = 4
obs2.velocityX = -4
console.log(edges)
}

function draw() {
background("black");

// We can make the player bounce off the target using the bouceOff()
// sprite_name.bounceOff(target)
player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);

obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);

if(keyDown("up")){
  player.y = player.y-3
}
if(keyDown("down")){
  player.y = player.y+3
}
if(keyDown("left")){
  player.x = player.x-3
}
if(keyDown("right")){
  player.x = player.x+3
}

if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
}