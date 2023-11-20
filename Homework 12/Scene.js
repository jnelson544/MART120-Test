
//hero specs
var heroX = 35;
var heroY = 570;
var border_outline = 15;
var width = 500;
var height = 600;

//villian specs
var villianPosX = width/2;
var villianPosY = height/2;
var villianRad = 24;
var villianXSpeed = 5;
var villianYSpeed = 4;

//color and size randomization
var angle = 0;
var randomLocation = 50;
var x = 200;
var y = 200;
let col = {r:0,g:0,b:0}
let color = {r:0,g:0,b:0}
var rotationCount = 0;

//mousePressed
var mousex = 0;
var mousey = 0;

// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    //draw border
    drawOutline();
    
    // exit message
    exitSpot();

    // Starting point/message
    startPoint();

    // createHero
    drawCharacter();

    //createVillian
    drawVillian(4);


    //move hero
    heroMovement();

    //hero has reached the exit
    winnerCircle();

    //add villian squares to rotate
    villianSquare(4);


}
//creates a border around the screen
function drawOutline()
{
    background('#00ffff');
    stroke(0);
    fill(124,252,0);
    circle(mousex, mousey, 25);
    
    fill(139,69,19);
    rectMode(CORNER)
    // top border
    rect(0,0,width-70,border_outline); 
    // left border
    rect(0,0,border_outline,height);
    // bottom border
    rect(0, height-border_outline,width, border_outline);
    // right upper border
    rect(width-border_outline,0,border_outline,height);
}
//creates the "exit"
function exitSpot()
{
    textSize(16);
    text("EXIT",width-80,height-570)
}
// creates "you win" message
function winnerCircle()
{
    if(heroX >= 445 && heroY <= 20 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}

//create a player function
function drawCharacter()
{
    console.log(heroX);
    fill(23,40,123);
    circle(heroX,heroY,25);
}
function startPoint()
{
    stroke(0);
    fill('black');
    square(15,547,38);

    //starting name
    textSize(16);
    text("START",width-480,height-65)
}
  
//obsticles that leave the screen and come back
function drawVillian(n)
{   
    fill(color.r,color.g,color.b);
    ellipse(villianPosX, villianPosY, villianRad, villianRad);
    villianPosX = villianPosX + villianXSpeed;
    villianPosY = villianPosY + villianYSpeed;

    if (villianPosX < 0){
        villianPosX = width;
        color = {
            r: random(255),
            g: random(255),
            b: random(255)}; 
    }else if(villianPosX > width){
        villianPosX = 0;
        color = {
            r: random(255),
            g: random(255),
            b: random(255)}; 
    }
    
    if (villianPosY < 0){
        villianPosY = height;
        color = {
            r: random(255),
            g: random(255),
            b: random(255)}; 
    }else if (villianPosY > height){
        villianPosY = 0;
        color = {
            r: random(255),
            g: random(255),
            b: random(255)}; 
    }
}
    
//functions that creates multiple obstacles
function villianSquare(n)
{   
for (var i = 0; i< n; i++)
{   
 
    translate(x, y); 
    fill(col.r,col.g,col.b);
    rotate(angle); 
    rectMode(CENTER);
    rect(0, 0, randomLocation, randomLocation); 
    angle += 0.01; 
    if (angle >= 2) {
        angle = 0;
        randomLocation = random(200);
        rotationCount++;
    }
    if (rotationCount >= 2){
        x = random(width);
        y = random(height);
        col = {
            r: random(255),
            g: random(255),
            b: random(255)};
        randomLocation = random(200);
        rotationCount = 0;
    }
}
} 
// create a keyboard movement function
function heroMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        heroY -= 10;  
    }
    if(keyIsDown(s))
    {
        heroY += 10;   
   }
    if(keyIsDown(a))
    {
        heroX -= 10;   
    }
    if(keyIsDown(d))
    {
        heroX += 10;   
    }
}
// Function that creates object when mouse pressed
function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
}


    