


let canvas;

let displayState = 0;
let a;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

}

function draw() {
  background(200,200,250);
  
  //circle(width/2,height/2,width/6);
  textSize(32);
  text('Making of my own personal google map data',width/2,height/2);
  a = createA('https://github.com/Millieon/data_art/blob/main/cali.json', 'link to json data');
  a.position(width/2, height/2+10);


}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}