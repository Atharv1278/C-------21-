var astronot , bath , bru , drink , eat , gym , bg , move,  sleeping 

function preload(){
  bath = loadAnimation("bath1.png ", " bath2.png")
  bru=loadAnimation("brush.png")
  drink=loadAnimation("drink1.png", "drink2.png ")
  eat=loadAnimation("eat1.png", "eat2.png ")
  gym=loadAnimation("gym1.png", "gym2.png", "gym11.png ", "gym12.png")
  bg=loadAnimation("iss.png")
  move=loadAnimation("move.png", "move1.png ")
  sleeping=loadAnimation("sleep.png")
}

function setup() {
  createCanvas(400, 400);
  astronot=createSprite(300,230)
  astronot.addImage("sleeping ", sleep)
  astronot.scale=0.1
}

function draw() {
  background(220);

  drawSprite()
  
}