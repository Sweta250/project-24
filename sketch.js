const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,paper2,box1,box2,box3;
var ground;



function setup() {
  /*createCanvas(800,400);
  createSprite(400, 200, 50, 50);*/
   createCanvas(1600,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(800,485,1600,20);
    paper=new Paper(300,455,30);
    
    box1=new Box(1200,470,180,20);
    box2=new Box(1100,380,20,200);
    box3=new Box(1300,380,20,200);
  engine = Engine.create();
    world = engine.world;

}

function draw() {
  rectMode(CENTER);
  background("PINK");
  Engine.update(engine);
  ground.display(); 
  
  box1.display();
  
  box2.display();
  
  box3.display();
  paper.display();
  

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }
  
}