var hxStone;
var slingShot;
var log1;
var log2;
var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

    
	engine = Engine.create();
	world = engine.world;

    block1 = new BlockPurple(460,370,45,60);

    block2 = new BlockPurple(510,370,45,60);

    block3 = new BlockPurple(560,370,45,60);

    block4 = new BlockPurple(610,370,45,60);

    block5 = new BlockPurple(660,370,45,60);

    block6 = new BlockPurple(710,370,45,60);

    block7 = new BlockPurple(760,370,45,60);

    block8 = new BlockBlue(520,340,45,60);

    block9 = new BlockBlue(570,340,45,60);

    block10 = new BlockBlue(620,340,45,60);

    block11 = new BlockBlue(670,340,45,60);

    block12 = new BlockBlue(720,340,45,60);

    block13 = new BlockSkyBlue(570,310,45,60);

    block14 = new BlockSkyBlue(620,310,45,60);

    block15 = new BlockSkyBlue(670,310,45,60);

    block16 = new BlockGray(620,280,45,60);

    block17 = new BlockPurple(980,265,45,60);

    block18 = new BlockPurple(1025,265,45,60);

    block19 = new BlockPurple(1075,265,45,60);

    block20 = new BlockPurple(1125,265,45,60);

    block21 = new BlockPurple(1175,265,45,60);

    block22 = new BlockSkyBlue(1025,200,45,60);

    block23 = new BlockSkyBlue(1075,200,45,60);

    block24 = new BlockSkyBlue(1125,200,45,60);

    block25 = new BlockBlue(1075,150,45,60);

    log1 = new Log(610,400,370,12);

    log2 = new Log(1080,300,300,12);

    ground = new Ground(windowWidth,height,3000,20);
 
    hxStone = new HexagoanalStone(270,300,50,50);

    slingShot = new SlingShot(hxStone.body,{x:200,y:450});
}

function draw(){
    background("yellow");
    Engine.update(engine);
    ground.display();
    hxStone.display();
    log1.display();
    log2.display();
    slingShot.display();
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

    
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(hxStone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingShot.fly()
}

function keyPressed(){
    if(keyCode === 32){
     slingShot.attach(hxStone.body)
     Matter.Body.setPosition(hxStone.body,{x:270,y:300});
    }
}

