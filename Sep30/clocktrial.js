function setup() {
   createCanvas(500, 500);
   angleMode(DEGREES);
 }

 function draw() {
   background(0);
   translate(250, 250);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();
   //let G = Geaux();
   //let S = Saints();

   strokeWeight(15);
   stroke(211, 188, 141);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 300, 300, 0, secondAngle);

   // time in text
   rotate(90);
   fill(211, 181, 141);
   noStroke();
   scale(mouseX / 100);
   text(hr + ':' + mn + ':' + sc, -20, 0);
   //text(G + S,);
   
   //textSize(25);
   text('Geaux Saints', -30, 10, CENTER);
   fill(0, 102, 153);
}



   //  text(hr + ':' + mn + ':' + sc, 10, 200);


 