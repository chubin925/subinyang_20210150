let inputThing;
let numberThing;
let inputted = " ";
let numberInputted = " ";

let nameButton;
let numberButton;

function setup() {
  createCanvas(400, 400);
  inputThing = createInput();
  inputThing.position(60, 35);
  inputThing.size(200);

  numberThing = createInput();
  numberThing.position(60, 35);
  numberThing.size(200);

  nameButton = createInput();
  nameButton.position(60, 5);
  numberButton = createInput();
  numberButton.position(60, 5);

  nameButton.mousePressed(namename);
  numberButton.mousePressed(numbernumber);
}

function draw() {
  background(255, 255, 255);
  text("이름: ", 20, 20);
  text("학번: ", 20, 50);
  textSize(16);
  
  fill(255, 0, 0);
  text(inputted, 200, 200);
  text(numberInputted, 200, 250);
}

function namename() {
  inputted = inputThing.value();
}

function numbernumber() {
  numberInputted = numberInputted.value();
}
