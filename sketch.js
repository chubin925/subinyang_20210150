let roadRects = [];
let outerLines = [];
let wallRects = [];

function setup() {
  createCanvas(1024, 560);

  roadRects = [
    [128, 20, 768, 175],
    [209, 190, 606, 160],
    [0, 256, 209, 39],
    [815, 256, 209, 39],
    [137, 350, 733, 192],
    [137, 295, 72, 65],
    [815, 295, 55, 65],
  ];

  outerLines = [
    [128, 20, 896, 20],
    [896, 20, 896, 194],
    [896, 194, 815, 194],
    [815, 194, 815, 256],
    [815, 256, 1024, 256],
    [815, 295, 1024, 295],
    [815, 295, 815, 360],
    [815, 360, 870, 360],
    [870, 360, 870, 542],
    [137, 542, 870, 542],
    [137, 360, 137, 542],
    [137, 360, 209, 360],
    [209, 295, 209, 360],
    [0, 295, 209, 295],
    [0, 256, 209, 256],
    [209, 194, 209, 256],
    [128, 194, 209, 194],
    [128, 20, 128, 194],
  ];
}

function draw() {
  background(0);

  noStroke();
  fill(5, 12, 95);

  for (let i = 0; i < roadRects.length; i++) {
    rect(roadRects[i][0], roadRects[i][1], roadRects[i][2], roadRects[i][3]);
  }

  noFill();
  stroke(0, 210, 240);
  strokeWeight(6);

  for (let i = 0; i < outerLines.length; i++) {
    line(
      outerLines[i][0],
      outerLines[i][1],
      outerLines[i][2],
      outerLines[i][3],
    );
  }
}
