var monkeyI;
var bananaI;
var jungleI;
var ground;
var stoneI;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
  jungleI=loadImage("jungle.jpg");  
  monkeyI=loadImage("Monkey_01.png","Monkey_06,png")
   bananaI=loadImage("banana.png")
   stoneI=loadImage("stone.png")
}
function setup() {
  
  
  createCanvas(400, 400);
  ground = createSprite(200,380,400,20);
  ground.x = ground.width /2;
 
  
  jungle=createSprite(200,200,400,400)
   jungle.addImage("word",jungleI)
  stone=createSprite(240,340,20,50)
   stone.addImage("word",stoneI)
  stone.scale=0.3
    monkey=createSprite(30,340,20,50)
   monkey.addImage("word",monkeyI)
   monkey.scale=0.1
   banana=createSprite(320,150,20,50)
   banana.addImage("word",bananaI)
  banana.scale=0.1
   
  
    
}
function draw(){
  background(220);
  
   monkey.y = World.mouseY;
   monkey.x = World.mouseX;
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -6;
    //scoring
    count = Math.round(World.frameCount/4);
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
   
    
   
   if (monkey.isTouching(banana)) {
       banana.destroy();        
        }
    
    monkey.collide(ground);
  
  
  }
  drawSprites();
}