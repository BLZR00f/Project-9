var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40)
}

function draw()

{
  background(30);
  if (keyDown("left")){
    box.x = box.x-5
    background("red")
  }
  if(keyDown("right")){
    box.x = box.x+5
    background("blue")
  }
  if(keyDown("down")){
    box.y = box.y+5
    background("green")
}  
if(keyDown("up")){
  box.y = box.y-5
  background("purple")
}
drawSprites()
}




