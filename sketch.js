
var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(100, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  fixedRect1=createSprite(200,100,50,80);
  fixedRect1.shapeColor="green";
}

function draw() {
  background(255,255,255);  
movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(fixedRect1,movingRect)){
  fixedRect1.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  fixedRect1.shapeColor="green";
  movingRect.shapeColor="green";
}
if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}


  drawSprites();
}

function isTouching(fixedRect,movingRect){
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    ){
   return true;
  }
  else{
   return false;
  }
}