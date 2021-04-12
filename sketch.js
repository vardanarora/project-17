var path,boy,lb,rb;
var pathimg,boyimg;
var i;
function preload(){
  //pre-load images
  pathimg=loadImage("path.png");
  boyimg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=4;
  path.scale=1.2;
  //creating boy
   boy=createSprite(180,340,30,30);
  boy.addAnimation("running",boyimg);
  
   lb=createSprite(0,0,100,800);
  lb.visible=false;
   
   rb=createSprite(410,0,100,800);
  rb.visible=false;
}

function draw() {
  background(0);
path.velocityY=4;
  boy.x=World.mouseX;
  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(lb);
  boy.collide(rb);
  //reset background
  if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
  
  
  
}
