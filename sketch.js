function setup() {
  createCanvas(650, 550);
  //hat 
   ship(mouseX,mouseY)
}

function ship(x,y) {
  background(220);
 
  //Rules
  fill (200, 30, 169)
  textSize(16)
  textFont('Courier New')
  text("Close the box", 25, 60)
  fill(300)
  //Box
 // fill(300,180,50,)
   push();
  translate(x-200,y-55);

  fill(300,200,120)
  beginShape()
  vertex(290,275)
  vertex(352,286)
  vertex(290,313)
  vertex(216,286)
  vertex(290,275)
  endShape(CLOSE)
  fill(300,180,50,100)
  beginShape()
  vertex(352,286)
  vertex(352,361)
  vertex(290,396)
  vertex(290,313)
  vertex(352,286)
  endShape()
 fill(300,200,120)
  beginShape()
  vertex(216,286)
  vertex(290,313)
  vertex(290,396)
  vertex(216,361)
  vertex(216,286)
  endShape(CLOSE)
  //tape
  fill(0,10,10,100)
  stroke(5)
  beginShape()
  vertex(252,280)
  vertex(270,278)
  vertex(331,294)
  vertex(331,373)
  vertex(315,382)
  vertex(314,301)
  vertex(252,280)
  endShape(CLOSE)
  pop()
  if (mouseIsPressed)
    square(20,20,300,300)
    push()
    translate()
  
  fill(300,200,120)
  beginShape()
  vertex(290,275)
  vertex(352,286)
  vertex(290,313)
  vertex(216,286)
  vertex(290,275)
  endShape(CLOSE)
  fill(300,180,50,100)
  beginShape()
  vertex(352,286)
  vertex(352,361)
  vertex(290,396)
  vertex(290,313)
  vertex(352,286)
  endShape()
 fill(300,200,120)
  beginShape()
  vertex(216,286)
  vertex(290,313)
  vertex(290,396)
  vertex(216,361)
  vertex(216,286)
  endShape(CLOSE)
  //tape
  fill(0,10,10,100)
  stroke(5)
  beginShape()
  vertex(252,280)
  vertex(270,278)
  vertex(331,294)
  vertex(331,373)
  vertex(315,382)
  vertex(314,301)
  vertex(252,280)
  endShape(CLOSE)
  pop()
  
 
fill(0)
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
}