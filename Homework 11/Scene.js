
//hero specs
var heroX = 35;
var heroY = 570;
var border_outline = 15;
var width = 500;
var height = 600;

//villian specs
var villianPosX = width/2;
var villianPosY = height/2;
var villianRad = 25;
var villianXSpeed = 5;
var villianYSpeed = 4;
var villianXdirection = 1;
var villianYdirection = 1;

//mouseClick
var mouseX;
var mouseY;

// mid square
//var jitter = 0.0;
var angle = 0;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
//var shapeX = 30;
//var shapeY = 50;
//var shapeXSpeed;
//var shapeYSpeed;

// create a shape when the mouse is clicked
//var mouseShapeX;
//var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    
}

function draw()
{
    background('#00ffff');
    stroke(0);
    
    //draw border
    drawOutline();
    

    // exit message
    textSize(16);
    text("EXIT",width-80,height-570)

    // Starting point
    startPoint();
    // createHero
    drawCharacter();

    //createVillian
    drawVillian();

    heroMovement();

    centerSquare();
    secondSquare();


    fill(124,252,0);
    circle(mouseX, mouseY, 25);

    // check to see if the hero has reached the exit
    if(heroX >= 445 && heroY <= 20 )
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }

}
function drawOutline()
{
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
function drawVillian()
{
    //createVillian
    fill(255,0,144);
    villianPosX = villianPosX + villianXSpeed * villianXdirection;
    villianPosY = villianPosY + villianYSpeed * villianYdirection;
   
    if(villianPosX > width - villianRad || villianPosX < villianRad)
    {
        villianXdirection *= -1;
    }

    if(villianPosY > height - villianRad || villianPosY < villianRad )
    {
        villianYdirection *= -1;
    }

    ellipse(villianPosX, villianPosY, villianRad, villianRad);
}
function centerSquare()
{
    rectMode(CENTER);
    fill(139,0,139);
    translate(width / 2, height / 2);
    rotate(angle);
    rect(0, 0, 75, 75); 
    angle += 0.01; 
}
function secondSquare()
{
    rectMode(CENTER)
    fill(139,0,139);
    translate(width / 4, height / 4);
    rotate(angle);
    rect(0, 0, 50, 50); 
    angle += 0.01; 
}

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
function mouseClicked()
{
    mouseX = mouseX;
    mouseY = mouseY;
}


    