var ball ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	var ball_options = {
		isStatic : false,
	restitutution : 0.3 ,
	friction : 0 ,
		density : 1.2

	}

    groundObj.display ;
	groundObj=newGround (width/2 ,670 ,width ,20 ) ;
	leftSide = newGround (1100, 600, 20, 120) ;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed () {
	if (KeyCode ===UP_ARROW) {

		//Write code here to applyForce on ball body
	}
}


