var ship
var sea
function preload(){
shipImage=loadAnimation("ship-1.png", "ship-2.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200, 193, 400, 20)
  sea.scale=0.25
  sea.addImage("sea", seaImage)
  sea.x=sea.width/2
  sea.velocityX=-4
    ship=createSprite(110, 200, 100, 200)
  ship.scale=0.3
  ship.addAnimation("ship moving", shipImage)
  
}

function draw() {
  background("blue");
 
  if (sea.x < -120) {
    sea.x = sea.width / 2;
  }
 drawSprites();
}