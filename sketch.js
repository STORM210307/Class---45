var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var fireball,fireballImg


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")
  fireballImg = loadImage("assets/fireball.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

  
}

function draw() {
  background(0); 

  spawnZombie();

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  fireball = createSprite(displayWidth-1080,displayHeight-324,10,10);
  fireball.scale = 0.05;
  fireball.velocityX = 10;

  player.addImage(shooter_shooting)
  fireball.addImage(fireballImg)

}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
  
}

if(fireball.isTouching(zombie)){

  fireball.destroy();
  zombie.destroy();

}

drawSprites();

}

function spawnZombie() {

  if(frameCount%200===0) {
  zombie = createSprite(displayWidth/2+550,Math.round(random(300,600)), 50, 50);
  zombie.addImage(zombieImg)
  zombie.scale = 0.16
  zombie.velocityX = -Math.round(random(1, 3))
  }

}
