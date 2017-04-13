var drawArray;
var maxIndex;

function setup() {
  var myCanvas = createCanvas(400,500);
  drawArray = [drawStand, drawHead, drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg];
  maxIndex = 0;
  
  myCanvas.parent('sketch-holder');
}

function draw() {
  background('#D6BF86');
  for(var i=0; i<=maxIndex; i++){
    drawArray[i]();
  }
}

function drawStand(){
  stroke('#9C2A00');
  strokeWeight(4);
  line(2, height-2, width-2, height-2); 
  line(2, height-2, 2, 2);
  line(2, 2, width/2, 2);
  line(width/2, 2, width/2, height/4);
}


function drawHead(){
  fill('lemonchiffon');
  ellipse(width/2,height/6, 80, 80);
}

function drawBody(){
  line(width/2, height/4, width/2, height/4 +200);
}

function drawLeftArm(){
  line(width/2, height/4, width/2-100, height/4+100); 
}
function drawRightArm(){
  line(width/2, height/4, width/2+100, height/4+100);
}
function drawLeftLeg(){
  line(width/2, height/4 +200, width/2 -100, height/4+300);
}
function drawRightLeg(){
  line(width/2, height/4 +200, width/2 +100, height/4+300);
}