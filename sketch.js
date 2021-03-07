var dustbinL, dustbinD, dustbinR;
var groundSprite;
var dustBinL, dustBinD;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperballSpriteImg = loadImage("paperIMG.png")
}
function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	dustbinL = createSprite(800, 555, 20, 100)
	dustbinD = createSprite(900, 615, 200, 20)
	dustbinR = createSprite(1000, 555, 20, 100)
	//Create the Bodies Here.
	paperObject = new Paper(50, 550, 50)
	this.ground = Bodies.rectangle(width/2,630, width, 10, {isStatic:true})
	World.add(world, ground)
	dustbinLBody = Bodies.rectangle(800, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinLBody)
	dustbinDBody = Bodies.rectangle(900, 615, 200, 20, {isStatic:true})
	World.add(world, dustbinDBody)
	dustbinRBody = Bodies.rectangle(1000, 555, 20, 100, {isStatic:true})
	World.add(world, dustbinRBody)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  text(mouseX+","+mouseY,mouseX,mouseY)
  paperObject.display();
  var groundpos = this.ground.position; 
        push() 
        translate(groundpos.x, groundpos.y); 
        rectMode(CENTER) 
        strokeWeight(3); 
        fill("white") 
        rect(0,0,width, 10); 
		pop()
  drawSprites()
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:125,y:-125})
	}
}
