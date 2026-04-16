let x;
let y;
let c;

function setup() {
  createCanvas(400, 400);
  x = 0;
  y = 0;
  c = color(255, 255, 255);
}

function draw() {
  background(220, 0, 0);
  c = color(255, 255, 255);
  if (keyCode === RIGHT_ARROW) {
    x = x + 1;
    c = color(0, 255, 0);
  }
  fill(c);
  rect(x, y, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x + 1;
    c = color(255, 255, 255);
  }
  if (keyCode === RIGHT_ARROW) {
    x = x - 1;
    c = color(255, 255, 255);
  }
  if (keyCode === UP_ARROW) {
    y = y - 1;
    c = color(255, 255, 255);
  }
  if (keyCode === DOWN_ARROW) {
    y = y + 1;
    c = color(255, 255, 255);
  }
}

// function keyPressed(){
//   if(key === "s" || key === "s"){
//     console.log("you pressed the s key")
//   }
// }

// function draw() {
//   background(255, 0, 0);
//   rect(x,y,50,50);

// c = color(255,255,255)

// //마우스가눌렸는지 안눌렸는지
// if (keyIsDown(LEFT_ARROW)) {
//   c = color(0,255,0)
//   x = x - 1;
// }
// if (keyIsDown(RIGHT_ARROW)) {
//   c = color(0,0,255)
//   x = x + 1;
// }
// if (keyIsDown(UP_ARROW)) {
//   c = color(0,0,255)
//   y = y - 1;
// }
// if (keyIsDown(DOWN_ARROW)) {
//   y = y + 1;
// }

// circle(x, y, 10);

// console.log(x);
// }
