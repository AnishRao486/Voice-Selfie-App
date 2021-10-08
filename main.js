var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    console.log("Hi");
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;

    speech_data = "Tawkfhaefhaueifahuefaiehfaoiaoriaienaeiaoeing selfie in 5 seconds";
                
    utterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speak(utterThis);

    setTimeout(function(){
    take_snapshot();
    save();
    },5000);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
width:370,
height:250,
image_format:"jpeg",
jpeg_quality:90
});
  
function take_snapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie_img" src="' + data_uri + '" >';
});

}

function save(){
    console.log("HIIIIIIEEEEEEE"); 
  link = document.getElementById("link");
  image = document.getElementById("selfie_img").src;
  link.href = image;
  link.click();
}