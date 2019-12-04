//var orb = [];

var c = ['#ff0000',
        '#FFFF4D',
        '#0000FF',
        '#00FF00',
        '#7851A9']         
//var col;
var texts = ['Red','Yellow','Blue','Green','Purple']
//var num;
const radius=100;
var x,y;
var d;
let score = 0;
let index0, index1, index2, index3, index4, index5;

function setup() {
    
    createCanvas(600, 600);

  background('#d3d3d3');
  x = random(width);
  y = random(70,height);
  index1=c[int(random(0, 3))];
  index2=0;

}

function draw() {
    //background(0);
    background('#d3d3d3');
    fill(0);
    
    text("Score: " + score, 10, 20);
    textSize(20);
    noStroke();
    fill(0);
    
    text(texts[index2],width/2,20); 

    fill(index1);
       
    noStroke();

    ellipse(x, y, radius, radius);
   

    }


function  mouseClicked(){
    let d = dist(mouseX, mouseY, x, y);
    
    if (d < radius) {
        x = random(width);
        y = random(70,height);
        if(index1=='#ff0000' && index2==0||
           index1=='#FFFF4D' && index2==1||
           index1=='#0000FF' && index2==2||
           index1=='#00FF00' && index2==3||
           index1=='#7851A9' && index2 ==4){
            score++;
    }  else{
        score--;
    }  
        
    }
       
    index2=int(random(0,5));
    index1=c[int(random(0,5))];
       
}  