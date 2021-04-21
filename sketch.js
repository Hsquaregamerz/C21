var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200,200,50,50);
  car.shapeColor="blue"
  car.velocityX=2;
  wall=createSprite(800,200,50,100);
  wall.shapeColor="yellow"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
if(isTouching(car,wall)){
  car.shapeColor="yellow"
}
else {
  car.shapeColor="blue" 
 }

bounce(car,wall);

  drawSprites();
}

function isTouching(A1,A2){
  if (A1.x - A2.x < A2.width/2 + A1.width/2
    && A2.x - A1.x < A2.width/2 + A1.width/2
    && A1.y - A2.y < A2.height/2 + A1.height/2
    && A2.y - A1.y < A2.height/2 + A1.height/2) {
 
      return true;
}
else{
 return false; 
}

}

function bounce  (A1,A2){
  if (A1.x - A2.x < A2.width/2 + A1.width/2
    && A2.x - A1.x < A2.width/2 + A1.width/2){
      A1.velocityX=A1.velocityX*(-1)
    }
    else if( A1.y - A2.y < A2.height/2 + A1.height/2
      && A2.y - A1.y < A2.height/2 + A1.height/2){
    A1.velocityY=A1.velocityY*(-1)
    }

}

