function preload()
{
    
}

function setup()
{
 canvas = createCanvas(500,400);
 canvas.position(70,200);
 video = createCapture(VIDEO);
 video.hide();
}

function draw()
{
image(video,150,100,200,200);
fill(168,10,10);
stroke(168,10,10);
circle(40,40,50);
circle(460,40,50);
circle(40,360,50);
circle(460,360,50);
fill(0,168,0);
stroke(0,168,0);
rect(63,27,375,25);
rect(63,347,375,25);
rect(27,63,25,275);
rect(448,63,25,275);

}

function take_snapshot(){
    save('pranav.png');

}


  