song="";

function setup(){
canvas = createCanvas(800, 400);
canvas.center();
background("white");

video=createCapture(VIDEO);
video.hide();
}



function preload(){
    song=loadSound("music.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}


