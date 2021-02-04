function setup() {
  createCanvas(800,400);
  car  = createSprite(200, 200, 50, 10);
  wall = createSprite(700,200,20,100);
  speed= random(40,100);
  weight = random(1000,5000);
  car.velocityX = speed;
}
function draw() {
  background(0);  
  if(wall.x - car.x < car.width/2 + wall.width/2 ){
      var def = (0.5*weight*speed*speed)/22500;
      car.velocityX = 0;
    if(def>180){
      car.shapeColor = "red";
      text("lethal",400,200);
      }
      if(def>=100 && def<=180){
      car.shapeColor = "yellow";
      text("average",400,200);
      }
      if(def<100){
       car.shapeColor = "green";
       text("good",400,200);
       }
  }
  drawSprites();
}
