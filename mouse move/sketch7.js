function setup(){
 
    createCanvas(windowWidth,windowHeight);
    background(85,45,75)
    fill(1000)
 }
  
 function draw(){
    if (mouseIsPressed){
        fill(255);
        ellipse(mouseX,mouseY,00,00)
    } 
    else {
        fill(255,215,0);
        ellipse(mouseX, mouseY,80,80);
   
    }
   
    
 
  
} 
 


function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
  
 }
 