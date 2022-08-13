function setup() {
  createCanvas(500,500);

}

function draw() {
  background('#fae');

  strokeWeight(5)
  
  fill(255)
  ellipse(250,250,400,400)
  ellipse(200,200,50,18);
  ellipse(250,200,50,18);
  
  fill(0)
  ellipse(185,200,20,13)
  ellipse(235,200,20,13)

  line(150,300,300,300)

  fill(0,255,0)
  strokeWeight(0)
  ellipse(250,50,40,40)
}