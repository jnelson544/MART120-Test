function setup(){ 
    createCanvas(400,400);
}

function draw(){ 
    background('purple');
    
    
    strokeWeight(0);
    fill('black');
    textSize(24);
    text('Its me, Jessica!', 80, 20);

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


    //nose
    strokeWeight(0);
    fill(203,109,81);
    triangle(160,205,188,150,216,205); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner) ()

    strokeWeight(16);
    point(174,197);

    strokeWeight(16);
    point(202,197);
    
    //Left Eye
    strokeWeight(0);
    fill(255,255,255);
    ellipse(145,130,70,40); // (x,y,w,h)

    strokeWeight(0);
    fill(8,120,48);
    circle(145,130,40);

    strokeWeight(15);
    point(145,130); 

    //Left Eyebrow
    strokeWeight(0);
    fill(107,68,35);
    rect(100,100,70,10); //(x,y,w,h) 
    
    //Right Eye
    strokeWeight(0);
    fill(255,255,255);
    ellipse(230,130,70,40); // (x,y,w,h)

    strokeWeight(0);
    fill(8,120,48);
    circle(230,130,40);

    strokeWeight(15);
    point(230,130); 

    // Right Eyebrow
    strokeWeight(0);
    fill(107,68,35);
    rect(200,100,70,10); //(x,y,w,h)

    
    // Hair
    //left side
    strokeWeight(0);
    fill(86,3,25);
    line(100,80,100,350);
    
    strokeWeight(0);
    fill(86,3,25);
    line(100,80,40,95);

    strokeWeight(0);
    fill(86,3,25);
    line(40,95,40,200);

    strokeWeight(0);
    fill(86,3,25);
    line(40,200,100,350);

    strokeWeight(0);
    fill(86,3,25);
    triangle(40,95,100,80,40,200); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner)

    strokeWeight(0);
    fill(86,3,25);
    triangle(40,200,100,80,100,350);

    //right side
    strokeWeight(0);
    fill(86,3,25);
    line(280,80,280,350);
    
    strokeWeight(0);
    fill(86,3,25);
    line(280,80,340,95);

    strokeWeight(0);
    fill(86,3,25);
    line(340,95,340,200);

    strokeWeight(0);
    fill(86,3,25);
    line(340,200,280,350);

    strokeWeight(0);
    fill(86,3,25);
    triangle(340,95,280,80,340,200); //(bottom width left dom, up/down left corner, L-R tip, up/down tip, bottom width right dom, up/down right corner)

    strokeWeight(0);
    fill(86,3,25);
    triangle(340,200,280,80,280,350);

    //top hair line
    strokeWeight(0);
    fill(86,3,25);
    line(340,95,280,35);

    strokeWeight(0);
    fill(86,3,25);
    line(280,35,100,35);

    strokeWeight(0);
    fill(86,3,25);
    line(100,35,40,95);

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
    ellipse(190,230,60,15); // (x,y,w,h)

    strokeWeight(0);
    fill(217,134,149);
    ellipse(190,250,60,15); // (x,y,w,h)

    strokeWeight(0);
    fill('white');
    textSize(24);
    text('Jessica Nelson', 220, 360);

}