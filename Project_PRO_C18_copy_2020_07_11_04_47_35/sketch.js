//Global Variables
var banana,obstacle,groundImage
var bananaImage,obstacleImage,bgImage;

var jungle

var obstaclegroup;

var bananagroup;

var monkey

var score


function preload(){
  bgImage = loadImage("jungle.jpg");
  
  groundImage = loadImage("ground.jpg");
  
  player_running =loadAnimation           ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  bananaImage = loadImage("Banana.png");
  
  obstacleImage = loadImage("stone.png");
  
}


function setup() {
  createCanvas(600,300);
  
  score = 0
 
  jungle = createSprite (0,0,600,300)
  jungle.addImage (bgImage)
  jungle.scale = 1
   jungle.x = jungle.width/2;
  jungle.velocityX = -2
  
 
  monkey = createSprite (100,240,20,10);
  monkey.addAnimation("running",player_running);
  monkey.scale = 0.1
  //  monkey.velocityX = 2
  
   ground = createSprite(300,250,600,20);
  ground.addImage (groundImage)
  ground.scale = 0.5
  ground.x = ground.width/2;
  ground.velocityX = -2
  ground.visible = false;
  
  bananagroup = new Group ();
 obstaclegroup = new Group ();
}

function draw(){ 
  background = "white";
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (bananagroup.isTouching(monkey)){
  bananagroup.destroyEach; 
    score = score+2;
  }
  switch(score){
    case 10:monkey.scale = 0.12;
    break;
    case 20:monkey.scale = 0.14;
    break;
    case 30:monkey.scale = 0.16;
    break;
    case 40:monkey.scale = 0.18;
    break;
    default:break;   
  }
  if(keyDown ("space")){
  monkey.velocityY = -10
  }
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide (ground)
  
  spawnbanana();
  
  spawnObstacle();
  if(obstaclegroup.isTouching(monkey)){
  monkey.scale = 0.08
  }
  
  drawSprites();
  
  stroke  ("white");
  
  text ( "score " + score,500,50 );
}
function spawnbanana(){
if(frameCount%100 === 0){
  var banana = createSprite (600,250,40,10)
  banana.y = random (120,200);
  banana.addImage (bananaImage);
  banana.scale = 0.05
  banana.velocityX = -2;
  banana.lifetime = 300
  monkey.depth = banana.depth+1
  bananagroup.add(banana);
}
}

function spawnObstacle(){
if(frameCount%300 === 0){
var obstacle = createSprite (600,275,40,10);
  obstacle.addImage (obstacleImage);
  obstacle.scale = 0.2
  obstacle.velocityX = -2
  obstacle.lifetime = 300;
}
}

//function 