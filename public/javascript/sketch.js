


//Access token
const access_key = 'sk.eyJ1IjoibWlsbGllb24iLCJhIjoiY2xkdXgwdW1wMDJuaDN2cG9kdWM3dXVzZyJ9.NJFZbzmQc6oaCKTw0W_mNg';
const mappa = new Mappa('Mapboxgl', access_key);
let myMap;

let canvas;
let cali;
let lat, long;
let displayState = 0;
let a;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  lat=[];
  long=[];
  myMap = mappa.tileMap(0,0,4); // lat 0, lng 0, zoom 4
  myMap.overlay(canvas)
  fetch("../javascript/csvjson.json").then(function(response) {
    return response.json();
  }).then(function(data) {

    //console.log(data);
    
    cali= data;


    //using no Loop? you can just call your function once the data is loaded
    //drawMap();
  
  }).catch(function(err) {
    console.log(`Something went wrong: ${err}`);
  });


}
function drawMap(){

  for (let i= 0 ; i<cali.length; i++) {
   
   let item = cali[i];
   let location=item.location;
   let Note=item.Note;
   let Title=item.Title;
 


  

  location=location.replace("'lat':",'' ).replace("'lng':",'' ).replace('{','').replace('}','');
  let splitString = split(location, ',');
  let lat=float(splitString[0]);
  let long=float(splitString[1]);
  //console.log(lat,long);

  mappedlat = map(lat, 32, 37, 0, height);
  
  mappedlong = map(long, -122,-117, 0, width); 
  console.log(mappedlat,mappedlong);

  fill(100, 100, 200, 100);
textSize(10);
  
  text(Title,mappedlong, mappedlat);



  }

}

function draw() {
  background(200,200,250);
  
  //circle(width/2,height/2,width/6);
  // textSize(32);
  // text('Making of my own personal google map data',width/2,height/2);
  // a = createA('https://github.com/Millieon/data_art/blob/main/cali.json', 'link to json data');
  // a.position(width/2, height/2+10);
  drawMap();




}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}