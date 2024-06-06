noseX=0;
noseY=0;
handX=0;
handY=0;


function preload() {
    nariz=loadImage('clownnose.png');

    mano=loadImage('amongus turun.png');
}

function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}
function draw()
{
    image(video, 0, 0, 500, 500);

    fill(129,0,0);
    stroke(255,0,0);
   

    image(nariz,noseX -25,noseY -10,50,50);
    image(mano,handX,handY,50,50);
}

function modelLoaded() {
    console.log('PoseNet esta inicializado');
}
 function gotPoses(results)
{
if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        handX = results[0].pose.rightWrist.x;
        handY = results[0].pose.rightWrist.y;

           console.log("nariz x =" + noseX);
           console.log("nariz y =" + noseY);
          
           console.log("mano x =" + handX);
           console.log("mano y =" + handY);

           function take_snapshot(){

        save('myFilterImage.png'); 
           }
    }
    
}

function take_snapshot(){

    save('myFilterImage.png'); 
}


