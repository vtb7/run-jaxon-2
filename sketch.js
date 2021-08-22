var path;
var pathImg;
var surfer_running; surfer;
var power;
var energy;
var invisibleLeft; score; invisibleRight;
var leftBoundary
var rightBoundary
_
function preload(){
  //pre-load images
surfer_running=loadAnimation("Runner-1.png","Runner-2.png");
pathImg=loadImage("path.png");

surfer.scale=0.5
}

function setup(){
  
  createCanvas(400,400);
  //score=0;
  path = createSprite(200,600);
  path.addImage(pathImg);
  path.velocityY = 4;
  surfer= createSprite(260,350,10,10);
  surfer.addAnimation("running", surfer_running);
  surfer.scale = 0.1;
  rightBoundary = createSprite(0,0,100,800)
  leftBoundary = createSprite(410,0,100,800)
  path.scale = 1.2;

  
  
  invisibleLeft = createSprite(200,200);
  invisibleLeft.visible = false;
  invisibleRight = createSprite(200,190);
  invisibleRight.visible = false;
  
 
}
function draw() {
  background("white");

  if(keyDown("space")&& surfer.y >= 100) {
    surfer.velocityY = -4;
  }
  
  //code to reset background
  if (path.y > 400)
  {path.y = height/2;}
  if(keyDown("LEFT_ARROW")) {
    surfer.x=surfer.x+-5
  }
  if(keyDown("RIGHT_ARROW"))
   surfer.x=surfer.x+5
  //surfer.collide(invisibleLeft);
  //surfer.collide(invisibleRight);
  drawSprites();
}
