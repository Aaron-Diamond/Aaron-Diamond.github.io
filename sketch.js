function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(100);
   fill(255);
 
  if (150<mouseX && mouseX<250 &&150< mouseY && mouseY<250 ){
    fill(0)
  }
  
    
  
 
  rect(200, 200, 100, 100); 
  
}
