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

//콩 배열
let beanX = [];
let beanY = [];
let beanActive = [];
let beanSize = 7;

// 적 배열