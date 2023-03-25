rec = new window.webkitSpeechRecognition();

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

function start_rec() {
    document.getElementById("textbox").innerHTML = "";
    rec.start();
}

rec.onresult = function (rec_details) {
    console.log(rec_details);
    content = rec_details.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    texttospeech();
    Webcam.attach("#camera");
}

function texttospeech() {
    speak_text = "taking selfie now";
    speak_audio = new SpeechSynthesisUtterance(speak_text);
    window.speechSynthesis.speak(speak_audio);

    takepic();
}


function takepic() {
    Webcam.snap(function(pic) {
        document.getElementById("result").innerHTML='<img id="selfie_pic" src="'+pic+'">';
    });
}