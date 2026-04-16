let x = 50;
let y = 200;
let wallX = 300; // 벽의 X 좌표
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(220);
  // 1. 벽 그리기
  stroke(255, 0, 0);
  strokeWeight(4);
  line(wallX, 0, wallX, height);
  // 2. 이동 로직 (벽 체크 포함)
  if (keyIsDown(RIGHT_ARROW)) {
    // 다음 이동할 위치(x + 5)가 벽(wallX)보다작을때만이동!
    if (x + 25 < wallX) {
      x += 5;
    }
  }

  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
  // 3. 플레이어 그리기
  noStroke();
  fill(255, 255, 0);
  ellipse(x, y, 50, 50);
}
