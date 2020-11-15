var ground, waste;
var holder1,holder2,holder3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	holder1=createSprite(1140,564.5,205,10.2);
	holder1.shapeColor=color("white");



	holder2=createSprite(1040,510,10.5,120.2);
	holder2.shapeColor=color("white");

	holder3=createSprite(1245,510,10.5,120.2);
	holder3.shapeColor=color("white");

	ground = Bodies.rectangle(600, 590,1300 ,100, {isStatic:true} );
	 World.add(world, ground);


	ground.shapecolor =color("grey");

	 paperCrushed = new  paper(500,100);


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1400,10);
  paperCrushed.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperCrushed.body,paperCrushed.body.position,{x:85,y:-85});
}
}
 
