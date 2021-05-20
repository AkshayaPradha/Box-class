
// variable - can change
// constant - cannot change
//Matter.js - Engine, World, Bodies 
// namespacing - giving a smaller name , like a nickname
// Matter.Bodies.rectangle - Bodies.rectangle
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

var box1;
var box2;

function setup() {
  createCanvas(400,400);

  //creating an engine
  engine = Engine.create();
  // attaching world to engine
  world = engine.world;
  // starting the engine
  Engine.run(engine);

  box1 = new Box(200,200,20,80,"blue");
  box2 = new Box(220,100,40,30,"black");
  
  ground = new Ground(200,380,400,20);
  
  
  
  
  
}

function draw() {
  background("pink");  

  rectMode(CENTER);
  

  ground.display();

  box1.display();
  box2.display();
  
}