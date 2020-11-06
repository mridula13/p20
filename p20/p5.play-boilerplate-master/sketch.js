var wall, car;
  var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(700, 200, 60, height/2);
  wall.shapeColor = rgb(80,80,80);
  car = createSprite(50, 200, 50, 50);
 }

function draw() {
  background(7,59,55);  
                 
  car.velocityX = speed;

  deformation = (0.5*weight*speed*speed)/22500;
  
  if(wall.x - car.x < wall.width/2 + car.width/2 && deformation <= 60)
    {
      car.shapeColor = rgb(0,255,0);
      car.velocityX = 0;
    }
  else if(wall.x - car.x < wall.width/2 + car.width/2 && ( deformation > 60 && deformation < 100))
    {
      car.shapeColor = rgb(230, 230, 0);
      car.velocityX = 0;
    }
  else if(wall.x - car.x < wall.width/2 + car.width/2 && deformation > 100)
    {
      car.shapeColor = rgb(255,0,0);
      car.velocityX = 0;
    }
    else
    {
      car.shapeColor = rgb(0,0,0);
    }

  drawSprites();
}