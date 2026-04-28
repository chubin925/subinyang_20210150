let roadRects = [];
let outerLines = [];
let wallRects = [];

function setup() {
  createCanvas(1024, 560);

  outerLines = [
    [128, 20, 896, 20],
    [896, 20, 896, 194],
    [896, 194, 815, 194],
    [815, 194, 815, 256],
    [815, 256, 1024, 256],
    [815, 295, 1024, 295],
  ];
}

function draw() {
  background(0);

  noStroke();
  fill(5, 12, 95);
}
