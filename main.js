var one="";
status="";

function setup(){
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(450,450);
    video.hide();
}
function start(){
    objectDetector.ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    one=doc.getElementById("name").value;
}
function modelLoaded(){
    console.log(loaded);
    status="true";
}
function draw(){
    image(video,0,0,480,480);
}