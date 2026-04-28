let roadRects = [];
let outerLines = [];
let wallRects = [];

let px = 512;
let py = 330;
let pd = 24;

let speed = 3;

let beanX = [];
let beanY = [];
let beanActive = [];
let beanSize = 7;

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

  wallRects = [
    [166, 61, 60, 39],
    [265, 61, 205, 39],
    [503, 25, 20, 75],
    [555, 61, 208, 39],
    [798, 61, 60, 39],

    [166, 133, 60, 21],
    [798, 133, 60, 21],

    [248, 133, 107, 21],
    [248, 133, 28, 76],

    [390, 128, 24, 137],
    [312, 191, 158, 21],

    [444, 133, 138, 21],
    [502, 133, 24, 76],

    [610, 128, 24, 137],
    [555, 191, 158, 21],

    [670, 133, 107, 21],
    [750, 133, 28, 76],

    [273, 239, 81, 77],
    [448, 239, 128, 77],
    [670, 239, 81, 77],

    [389, 295, 25, 72],
    [611, 295, 25, 72],

    [243, 346, 111, 21],
    [448, 346, 128, 21],
    [670, 346, 111, 21],

    [504, 367, 17, 47],
    [188, 397, 21, 64],

    [248, 397, 28, 100],
    [188, 486, 281, 20],

    [337, 397, 132, 20],
    [303, 440, 51, 21],
    [389, 440, 25, 45],

    [448, 440, 128, 21],
    [504, 440, 20, 58],

    [610, 440, 25, 45],
    [670, 440, 51, 21],

    [555, 397, 132, 20],

    [748, 397, 28, 100],
    [555, 486, 281, 20],

    [815, 397, 21, 64],
  ];

  makeBeans();
}

function draw() {
  background(0);

  //길
  noStroke();
  fill(5, 12, 95);

  for (let i = 0; i < roadRects.length; i++) {
    rect(roadRects[i][0], roadRects[i][1], roadRects[i][2], roadRects[i][3]);
  }

  // 테두리
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

  //벽
  fill(0);
  stroke(0, 210, 240);
  strokeWeight(4);
  for (let i = 0; i < wallRects.length; i++) {
    rect(wallRects[i][0], wallRects[i][1], wallRects[i][2], wallRects[i][3]);
  }

  noStroke();
  fill(255, 255, 0);
  ellipse(px, py, pd, pd);

  // 팩맨 이동 코드
  if (keyIsDown(LEFT_ARROW)) {
    dir = "left";

    if (py >= 256 && py <= 295 && px <= 15) {
      px -= speed;
    } else {
      if (canMove(px - speed, py)) {
        px -= speed;
      }
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    dir = "right";

    if (py >= 256 && py <= 295 && px >= width - 15) {
      px += speed;
    } else {
      if (canMove(px + speed, py)) {
        px += speed;
      }
    }
  }

  if (keyIsDown(UP_ARROW)) {
    dir = "up";

    if (canMove(px, py - speed)) {
      py -= speed;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    dir = "down";

    if (canMove(px, py + speed)) {
      py += speed;
    }
  }

  if (py >= 256 && py <= 295) {
    if (px < -pd / 2) {
      px = width - pd / 2;
    }

    if (px > width + pd / 2) {
      px = pd / 2;
    }
  }
  // 팩맨 그리기
  noStroke();
  fill(255, 255, 0);
  ellipse(px, py, pd, pd);


  //콩그리기
  noStroke();
  fill(255, 220, 120);

  for (let i = 0; i < beanX.length; i++) {
    if (beanActive[i] === true) {
      ellipse(beanX[i], beanY[i], beanSize, beanSize);
    }
  }
}

function canMove(nx, ny) {
  let r = pd / 2;
  let roadCheck = false;
  let wallCheck = false;

  // 길 위에 있는지 확인
  for (let i = 0; i < roadRects.length; i++) {
    if (
      nx >= roadRects[i][0] &&
      nx <= roadRects[i][0] + roadRects[i][2] &&
      ny >= roadRects[i][1] &&
      ny <= roadRects[i][1] + roadRects[i][3]
    ) {
      roadCheck = true;
    }
  }

  // 벽이랑 닿는지 확인
  for (let i = 0; i < wallRects.length; i++) {
    if (
      nx + r > wallRects[i][0] &&
      nx - r < wallRects[i][0] + wallRects[i][2] &&
      ny + r > wallRects[i][1] &&
      ny - r < wallRects[i][1] + wallRects[i][3]
    ) {
      wallCheck = true;
    }
  }

  if (roadCheck === true && wallCheck === false) {
    return true;
  } else {
    return false;
  }
}

function makeBeans() {
  beanX = [];
  beanY = [];
  beanActive = [];

  for (let y = 45; y <= 520; y += 28) {
    for (let x = 25; x <= 1000; x += 28) {
      if (canPutBean(x, y)) {
        beanX.push(x);
        beanY.push(y);
        beanActive.push(true);
      }
    }
  }
}

function canPutBean(x, y) {
  let roadCheck = false;
  let wallCheck = false;

  for (let i = 0; i < roadRects.length; i++) {
    if (
      x >= roadRects[i][0] + 12 &&
      x <= roadRects[i][0] + roadRects[i][2] - 12 &&
      y >= roadRects[i][1] + 12 &&
      y <= roadRects[i][1] + roadRects[i][3] - 12
    ) {
      roadCheck = true;
    }
  }

  for (let i = 0; i < wallRects.length; i++) {
    if (
      x > wallRects[i][0] - 16 &&
      x < wallRects[i][0] + wallRects[i][2] + 16 &&
      y > wallRects[i][1] - 16 &&
      y < wallRects[i][1] + wallRects[i][3] + 16
    ) {
      wallCheck = true;
    }
  }

  if (roadCheck === true && wallCheck === false) {
    return true;
  } else {
    return false;
  }
}
