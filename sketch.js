var bird;
function setup(){
  createCanvas(400,600);
  bird = new Bird();
}

function draw(){
  background(125);
  bird.show();
  bird.update();
}

function keyPressed(){
  if (key == ' '){
    bird.up();
    //console.log("SPACE");
  }
}
