const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2;
var block1,block2,block3,block4,block5;
var block6,block7,block8;
var block9;
var block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;
var polygon1;
var slingShot;
function setup(){
 
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon1=new polygon(50,100,20);
    
    ground = new Ground(390,300,210,10);
    ground1 = new Ground(985,200,195,10);
    ground2 = new Ground(601,390,1200,30);
 
    block1=new block(330,235,30,40);
    block2=new block(360,235,30,40);
    block3=new block(390,235,30,40);
    block4=new block(420,235,30,40);
    block5=new block(450,235,30,40);

    block6=new green(360,195,30,40);
    block7=new green(390,195,30,40);
    block8=new green(420,195,30,40);

    block9 = new topnew(390,155,30,40);


    block10=new bottomone(313,275,25,40);
    block11=new bottomone(338,275,25,40);
    block12=new bottomone(363,275,25,40);
    block13=new bottomone(388,275,25,40);
    block14=new bottomone(413,275,25,40);
    block15=new bottomone(438,275,25,40);
    block16=new bottomone(462,275,26,40);

    block17=new bottomone(935,175,25,40);
    block18=new bottomone(960,175,25,40);
    block19=new bottomone(985,175,25,40);
    block20=new bottomone(1010,175,25,40);
    block21=new bottomone(1035,175,25,40);

    block22=new green(960,135,25,40);
    block23=new green(985,135,25,40);
    block24=new green(1009,135,25,40);
  
    block25=new block(985,95,30,40);

    slingShot = new SlingShot(polygon1.body,{x:50,y:100});
}

function draw() {
  background("orange"); 
  Engine.update(engine);
  polygon1.display();
  ground.display(); 
  ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  slingShot.display();

  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}