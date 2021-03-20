var  car ,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  

  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX= 5;
  car.shapeColor="blue";
  
  wall=createSprite(1500,200,60,200);
  wall.shapeColor="80,80,80";


}

function draw() {
  background("black");  

  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocity=0;
    var deformation=0.5 *weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor="red"
    }
    else{
      car.shapeColor="blue";
    }
    if(deformation>100 && deformation<180){
      car,shapeColor="yellow";
    }
    else{
      car.shapeColor="blue";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
    else{
      car.shapeColor="blue";
    }
  }

 drawSprites();
}