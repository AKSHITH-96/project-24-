
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var edge;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(mouseX,mouseY,100,50);
	ground = new Ground(400,height,800,10);
	stone = new Stone(400,670,100,100);
	rubber = new Rubber(400, 470,50,50);


	Engine.run(engine);
  
}


function draw() {
    background("lightBlue");
  
    hammer.display();
  	ground.display();
  	stone.display();
	rubber.display();

}



