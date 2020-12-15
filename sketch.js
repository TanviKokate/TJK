var car, wall;
var back, back_Image;
var car1, car2, car3;
var speed, weight;

function preload(){
  back_Image = loadImage("carTrack.jpg");
  car1 = loadImage("greenCar.png");
  car2 = loadImage("yellowCar.jfif");
  car3 = loadImage("redCar.png");
}

function setup() {
  createCanvas(800,400);
  back = createSprite(400, 200);
  back.addImage(back_Image);
  back.scale = 1.8;

  speed = random(55 , 90);
  weight = random(400 ,720);
  
  car  = createSprite(50, 200, 40, 40);
  car.velocityX = speed;
  car.shapeColor = "white";
  
  wall = createSprite(720, 200, 50, height/2);
  wall.shapeColor = color(86, 16, 10);
}

function draw() {
  background(0);  
  if (wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22500;
     if (deformation > 180){
       car.shapeColor = color(255, 0, 0);
       car.addImage(car3);
       car.scale = 0.2;
     }
     if (deformation < 180 && deformation > 100){
       car.shapeColor = color(230, 230, 0);
       car.addImage(car2);
       car.scale = 0.3;
     }
     if (deformation < 100){
       car.shapeColor = color(0, 255, 0);
       car.addImage(car1);
       car.scale = 0.2;
     }
  }
  drawSprites();
}