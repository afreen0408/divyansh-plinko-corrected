const Bodies = Matter.Bodies
const World = Matter.World
const Engine = Matter.Engine

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world
  
  //Engine.run(engine)
  ground = new Ground(width/2,height,width,20)
  for (var k = 0; k <=width; k = k + 80)  {
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

  }



  for (var j = 40; j <=width; j = j + 50)  {
    plinkos.push(new Plinko(j,75,10));

  }

  for (var j = 15; j <=width; j = j + 50)  {
    plinkos.push(new Plinko(j,175,10));

  }

  for (var j = 40; j <=width; j = j + 50)  {
    plinkos.push(new Plinko(j,275,10));

  }

  for (var j = 15; j <=width; j = j + 50)  {
    plinkos.push(new Plinko(j,375,10));

  }
}

function draw() {
  background(0);

  Engine.update(engine);
  ground.display();
  for (var j = 0; j <plinkos.length; j++)  {
    plinkos[j].display();

  }

  if(frameCount%60===0)  {
    particles.push(new Particle(random(10,430),10,10))

  }
  for (var j = 0; j <particles.length; j++)  {
    particles[j].display();

  }
  for (var k = 0; k <divisions.length; k++)  {
    divisions[k].display();

  }

  
  //ground.display();
  //drawSprites();
  }

  
    

  