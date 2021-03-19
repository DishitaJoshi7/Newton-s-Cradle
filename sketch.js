
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,b2,b3,b4,b5;
var roof1;
var c1,c2,c3,c4,c5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("red")
	b1 = new Bob(300,350,40);
	fill("blue")
	b2 = new Bob(350,350,40);
	fill("pink")
	b3 = new Bob(400,350,40);
	fill("purple")
	b4 = new Bob(450,350,40);
	fill("yellow")
	b5 = new Bob(500,350,40);




	roof1 = new Roof(500,80,500,50);
	
	c1 = new Chain(b1.object,roof1.roof,80,0);
	c2 = new Chain(b2.object,roof1.roof,40,0);
	c3 = new Chain(b5.object,roof1.roof,0,0);
	c4 = new Chain(b4.object,roof1.roof,-40,0);
	c5 = new Chain(b3.object,roof1.roof,-80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  text(mouseX + ','+mouseY, mouseX ,mouseY);

  roof1.show();

  fill("red")
  b1.display();
  fill("blue")
  b2.display();
  fill("pink")
  b3.display();
  fill("purple")
  b4.display();
  fill("yellow")
  b5.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
       Matter.Body.applyForce(b3.object,b3.object.position, { x:-50 , y:-45})
	}
}



