var rectangle, move_rectangle;



function setup() {
  createCanvas(800,400);
  rectangle = createSprite(400, 200, 50, 50);
  rectangle.shapeColor = "blue";

  move_rectangle = createSprite(200, 200, 40, 40)
  move_rectangle.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  move_rectangle.x = World.mouseX;
  move_rectangle.y = World.mouseY;

  if(move_rectangle.x - rectangle.x <= rectangle.width/2 + move_rectangle.width/2 && rectangle.x - move_rectangle.x <= rectangle.width/2 + move_rectangle.width/2 && move_rectangle.y - rectangle.y <= rectangle.width/2 + move_rectangle.width/2 && rectangle.y - move_rectangle.y <= rectangle.width/2 + move_rectangle.width/2) {
     rectangle.shapeColor = "red";
     move_rectangle.shapeColor = "red";
  }
  
  else{
    rectangle.shapeColor = "green";
    move_rectangle.shapeColor = "green";    
  }

  drawSprites();

}