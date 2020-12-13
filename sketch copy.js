var red;
var green;


function setup() {
  createCanvas(400),1600;
  
red = createSprites(100,50,50,50);
green = createSprites(150,50,50,50);
 
red.shapeColor("red");
green.shapeColor("green");

}

function draw() {
  background(255);  

if(red.isTouching(green))
{
  green.velocityX  = -5;

}



  drawSprites();
}