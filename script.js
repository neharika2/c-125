x= 0;
y=0;
screen_height=0;
screen_width=0;
apple="";
speak_data="";
to_number=0;
draw_apple="";

var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
document.getElementById("status").innerHTML="system is listening, please speak.";
recognition.start();

}
recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been rcognised as "+ content;
    to_number=Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML="Started Drawing apple";  
        draw_apple="set";
    }
    else{g
        document.getElementById("status").innerHTML="The speech has not recognised  a number";
    }
}
function setup(){
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width,screen_height-150);
    canvas.position(0,150)
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposses);
}
function preload(){
    apple=loadimage("apple.webp");
}
function draw(){
    if( draw_apple=="set"){
        for(var i=1; i<=to_number; i++){
            var x =Math.floor(Math.random()* 700);
            var y =Math.floor(Math.random()* 400);
            image(apple,x,y,50,50)
    document.getElementById("status").innerHTML=to_number+"APPLE is drawn";
    speak();
    draw_apple="";
        }

}
}
function speak(){
    var synth=window.speechSynthesis;
 var utter_this=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utter_this);
 speak_data="";
}
    function gotposses(results){
    if(results.length>0){
        console.log(results)
    }
    }
    function modelloaded(){
        console.log("model is loaded")
    }