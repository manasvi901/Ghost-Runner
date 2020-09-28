var t, tI;
var g,gI;
var d,dI;
var c,cI;
var ib;
var dG, cG, iG;
var PLAY = 1;
var END = 0;
var gs = PLAY;

function preload() {

tI = loadImage("tower.png");
gI = loadImage ("ghost-standing.png");  
dI = loadImage("door.png");
cI = loadImage("climber.png");
}

function setup() {
createCanvas(600,600);
  
t = createSprite(300,300,10,10);
t.addImage(tI);  
t.velocityY = 3;
  
g = createSprite(170,200,10,10);
g.addImage(gI); 
g.scale = 0.3;  
 
dG = new Group();  
cG = new Group();    
iG = new Group();   
}


function draw() {
background(0);

if (gs === PLAY){

if (t.y>600){
t.y = 300;
}  
  
if (keyDown("space")) {
g.velocityY = -10;
}  
g.velocityY = g.velocityY+0.5;  

if (keyDown(LEFT_ARROW)) {
g.x = g.x - 3;
}  

if (cG.isTouching(g)){

g.velocityY = 0;

}

  if (keyDown(RIGHT_ARROW)) {
g.x = g.x + 3;
}

if (g.isTouching(iG)) {
gs = END;
}

if (gs === END) {
g.destroy();
t.destroy();  
iG.destroy();
cG.destroy();
dG.destoy();  
text("Game Over", 300,300);

}
  
spawnDoors();  
} 
drawSprites();



}

function spawnDoors () {

if (frameCount%200===0){

d = createSprite(340,0,20,20);
d.addImage(dI);
d.velocityY = 3;
  
c= createSprite(340,60,20,20);
c.addImage(cI);
c.velocityY = 3;  
  
 ib = createSprite(340,70,50,10); 
 ib.velocityY = 3; 


dG.add(d); 
cG.add(c);
iG.add(ib);

}

}









