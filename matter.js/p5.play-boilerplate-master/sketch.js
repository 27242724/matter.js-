const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
     var object_options = {
       restitution: 1.0
     }
     object = Bodies.circle(600,100,75,object_options);
     World.add(world,object);
     console.log(object);
          var ground_options = {
            isStatic: true
          }
          ground = Bodies.rectangle(400,395,800,12,ground_options);
          World.add(world,ground);
}

function draw() {
  background(51,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,75,75);
  fill(204,102,0);
  rect(ground.position.x,ground.position.y,800,12); 
}