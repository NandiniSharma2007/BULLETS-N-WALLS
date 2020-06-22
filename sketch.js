var bullet1,wall1,bullet2,bullet3,bullet4,wall2,wall3,wall4 ;
 var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  bullet1=createSprite(50,360,50,50);
  bullet1.velocityX=4;
  bullet2=createSprite(50,70,50,50);
  bullet2.velocityX=7;
  bullet3=createSprite(50,350,50,50);
  bullet3.velocityX=4;
  bullet4=createSprite(50,100,50,50);
  bullet4.velocityX=7;
  wall1=createSprite(1200,100,thickness,height/2);
  wall1.shapeColor=color(80,80,80);
  wall2=createSprite(1400,330,thickness,height/2);
  wall2.shapeColor=color(80,80,80);
  wall3=createSprite(1200,330,thickness,height/2);
  wall3.shapeColor=color(80,80,80);
  wall4=createSprite(1400,100,thickness,height/2);
  wall4.shapeColor=color(80,80,80);
  



  

}

function draw() {
  background(255,255,255);  
  
 
  
  if(hasCollided(bullet1,wall3))
  {bullet1.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){
  wall3.shapeColor=color(255,0,0);
}
if(damage<10){
  wall3.shapeColor=color(0,255,0);
}
  }
  if(hasCollided(bullet2,wall1))
  {bullet2.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){
  wall1.shapeColor=color(0,255,0);
}
if(damage<10){
  wall1.shapeColor=color(255,0,0);
}
  }
  if(hasCollided(bullet4,wall4))
  {bullet4.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){
  wall4.shapeColor=color(0,255,0);
}
if(damage<10){
  wall4.shapeColor=color(255,0,0);
}
  }
  if(hasCollided(bullet3,wall2))
  {bullet3.velocityX=0;
    var damage=0.5* weight * speed * speed/(thickness*thickness*thickness);
if(damage>10){
  wall2.shapeColor=color(0,255,0);
}
if(damage<10){
  wall2.shapeColor=color(255,0,0);
}
  }
  
  drawSprites();
}

function hasCollided(bullet1,wall1){
bullet1RightEdge=bullet1.x+bullet1.width;
wall1LeftEdge=wall1.x;
if (bullet1RightEdge>=wall1LeftEdge){
  return true;
}
return false;
}