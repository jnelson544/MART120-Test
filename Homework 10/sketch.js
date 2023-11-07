// creating a global variable
var x = 145;
var y = 130;
var diameter = 50;
var j = 190;
var size = 24;
var nameDir = 3;
var i = 0;
var movement;
var t = 50;
var speed = 5;
var speed2 = 13;
var h = 100;

// this function is only called once
function setup(){ 
    createCanvas(400,400);
    movement1 = floor(random() * 10) + 1;
    movement2 = floor(random() * 5) + 2;
    slide1 = floor(random() * 20) + 5;
    slide2 = floor(random() * 30) + 8;
    bounce = floor(random() * 30) + 5
}
/*
this function is called continuously while
the sketch is open in the browser.  
*/
function draw(){ 
    background('purple');

    strokeWeight(0);
    fill('black');
    textSize(size);
    size += nameDir;
    i++;
    if (i > 5)
    {
        nameDir *=-1;
        i = 0;
    }
    text('Its me, Jessica!', 80, 25);

    //head/neck/shoulders
    strokeWeight(0);
    fill(86,3,25);
    rect(100,255,180,65);

    strokeWeight(0);
    fill(251,206,177);
    rect(55,335,270,70);

    strokeWeight(0);
    fill(251,206,177);
    square(145,270,85);

    strokeWeight(1);
    fill(251,206,177);
    circle(190,170,240);



    
    
    //Left Eye
    strokeWeight(0);
    fill(255,255,255);
    ellipse(x,130,70,40); // (x,y,w,h)
    strokeWeight(0);
    fill(8,120,48);
    circle(x,130,40);
    strokeWeight(15);
    point(x,130); 

        if(x >= 400 || x <= 0)
        {
            movement1 *= -1;
            
        }

            x += movement1;
            



    //Left Eyebrow
    strokeWeight(0);
    fill(107,68,35);
    rect(100,h,70,10); //(x,y,w,h) 
    if(h >= 400 || h <= 0)
        {
            bounce *= -1;
            
        }

            h += bounce;
    
    //Right Eye
    strokeWeight(0);
    fill(255,255,255);
    ellipse(230,y,70,40); // (x,y,w,h)
    strokeWeight(0);
    fill(8,120,48);
    circle(230,y,40);
    strokeWeight(15);
    point(230,y);
    if(y >= 400 || y <= 0)
        {
            movement2 *= -1;
            
        }

            y += movement2;

     

    // Right Eyebrow
    strokeWeight(0);
    fill(107,68,35);
    rect(200,100,70,10); //(x,y,w,h)

    
    // Hair
    //left side

    strokeWeight(0);
    fill(86,3,25);
    triangle(40,95,100,80,40,200); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner)

    strokeWeight(0);
    fill(86,3,25);
    triangle(40,200,100,80,100,350);

    //right side
    strokeWeight(0);
    fill(86,3,25);
    triangle(340,95,280,80,340,200); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner)

    strokeWeight(0);
    fill(86,3,25);
    triangle(340,200,280,80,280,350);

    //top hair line
    strokeWeight(0);
    fill(86,3,25);
    triangle(340,140,95,35,280,35);

    strokeWeight(0);
    fill(86,3,25);
    triangle(40,95,95,35,280,85);

    strokeWeight(0);
    fill(86,3,25);
    triangle(280,35,280,95,340,95);

    //Shirt
    strokeWeight(0);
    fill('black');
    triangle(55,335,55,400,280,400);

    strokeWeight(0);
    fill('black');
    triangle(325,335,325,400,100,400);

    //mouth
    strokeWeight(0);
    fill('white');
    ellipse(190,240,70,35); // (x,y,w,h)
    

    strokeWeight(0.5);
    line(155,240, 225, 240);

    strokeWeight(0.5);
    line(165,228, 165, 252);    
    
    strokeWeight(0.5);
    line(175,225, 175, 255);

    strokeWeight(0.5);
    line(185,222, 185, 257);

    strokeWeight(0.5);
    line(195,222, 195, 257);

    strokeWeight(0.5);
    line(205,225, 205, 255);

    strokeWeight(0.5);
    line(215,228, 215, 252);

    strokeWeight(0);
    fill(217,134,149);
    ellipse(j,230,60,15); // (x,y,w,h)
    if(j >= 400 || j <= 0)
        {
            slide1 *= -1;
        }

            j += slide1;

    strokeWeight(0);
    fill(217,134,149);
    ellipse(j,250,60,15); // (x,y,w,h)
    if(j >= 400 || j <= 0)
        {
            slide2 *= -1;
        }

            j += slide2;
    //nose
    strokeWeight(0);
    fill(203,109,81);
    triangle(160,205,188,150,216,205); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner) ()
    

    strokeWeight(16);
    point(h,h);
    if(h >= 400 || h <= 0)
    {
        speed2 *= -1;
        
    }

        h += speed2;





    strokeWeight(16);
    point(h,h);
    if(h >= 400 || h <= 0)
    {
        speed *= -1;
        
    }

        h += speed;

    strokeWeight(0);
    fill('white');
    textSize(24);
    text('Jessica Nelson', 220, 360);

    
}