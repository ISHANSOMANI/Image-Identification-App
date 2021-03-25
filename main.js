Webcam.set({
width:310,
height:300,
image_format:"png",
png_quality:90,

constraints:{
    facingMode:"environment"
}
});

camera = document.getElementById("camera")
Webcam.attach("#camera");

function takeSnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = "<img src="+data_uri+" id='Captured_image'>";
}
);
}

console.log("ml5_version",ml5.version);

classifier = ml5.imageClassifier("MobileNet",Model_Loaded);
function Model_Loaded(){
    console.log("Model Loaded Successfully")
}

function check(){
    img = document.getElementById("Captured_image")
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
    if (error){
        console.log(error);
    }
    else {
        console.log(result);
        document.getElementById("Object_Name").innerHTML = result[0].label;


    }
}