let px, py;
let pd = 24;
let speed = 3;
let dir = "right"; //방향

let score = 0;
let energy = 3;

let gameOver = false;
let gameClear = false;

// 맵배열
let roadRects = [];
let outerLines = [];
let wallRects = [];

//콩, 적 만들어야댐

function setup() {
  createCanvas(1024, 560);

  // 길
  roadRects = [];

  // 바깥 테두리
  outerLines = [];
}

function draw() {
  background(0);
}


