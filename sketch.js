var seaImg, shipImg, ship;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.velocityX = -5;

 
  ship = createSprite(200,300);
  ship.addAnimation("ship",shipImg);
  ship.scale = 0.2;
  
}

function draw() {
  background(0);
  if(sea.x<0){
    sea.x = sea.width/2;
  }
  drawSprites();
 
}