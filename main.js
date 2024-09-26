var previous_result="";
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  console.log("Before loading model");
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J0kq6INiG/model.json',modelLoaded);
  console.log("After loading model");
}
function modelLoaded(){
    console.log("Model function");
    console.log("model is loaded");
  }
  
  function draw(){
    console.log("Function draw");
    image(video,0,0,300,300);
    classifier.classify(video,gotResults);
  }
  function gotResults(results){
    if(results.length > 0){
      console.log(results)
      if(results[0].label == 'Shaurya' && results[0].confidence > 0.6){
            document.getElementById("person").innerHTML="Shaurya Jain";
            redirections()
          }
      else if (results[1].label =='Parth' && results[1].confidence > 0.6){
            document.getElementById("person").innerHTML="Parth Aggarwaal";
            redirections()
    }
    }
  }
function redirections(){
  window.location="scan.html";
}
