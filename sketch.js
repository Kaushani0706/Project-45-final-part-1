var canvas;
var backgroundImage;
var bg2Image;
var bg3Image;
var bg4Image;
var bg5Image;
var hint;
var round1, round2, round3;
//var heartImg;
const Answer1 = "DONOR";
const Answer2 = "ARRAY";
const Answer3 = "HYPOCRISY";
var score = 0;


function preload() {
  backgroundImage = loadImage("./assets/background scrabble 2.jpg");
  bg2Image = loadImage("./assets/background scrabble.jpg");
  bg3Image = loadImage("./assets/background3.jpg");
  bg4Image = loadImage("./assets/background4.jpg");
  bg5Image = loadImage("./assets/background5.jpg");
  // threeHearts = loadImage("./assets/life3.png");
  // twoHearts = loadImage("./assets/life2.png");
  // oneHeart = loadImage("./assets/life1.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  form = new Form(); 
  form.display();

  round1 = new Round1();
  round1.display();

  round2 = new Round2();
  round3 = new Round3();

  // heart3 = createSprite(300,50,40,40);
  // heart3.scale = 0.05;
  // heart3.addImage(heartImg);

  // heart2 = createSprite(350,60,40,40);
  // heart2.scale = 0.05;
  // heart2.addImage(heartImg);

  // heart1 = createSprite(400,70,40,40);
  // heart1.scale = 0.05;
  // heart1.addImage(heartImg);


 drawSprites();
 
}

function draw() {
  background(backgroundImage);
  


  fill("pink");
  textSize(40);
  text("Score: " + score,600,50);

    if(score === 3){
    clear();
    background(bg3Image);
    fill("red");
    textSize(50);
    //text("THANK YOU FOR ANSWERING",500,200);
   }
  
 


  
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
