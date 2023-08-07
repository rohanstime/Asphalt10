var road = document.querySelector("#game");
var car1 = document.querySelector("#car1");
var car2 = document.querySelector("#car2");
var result = document.querySelector("#gameover");
var game = document.querySelector("#game");
var score = document.querySelector("#score");
var counter = 0;

//car moving animation 
car2.addEventListener("animationiteration",function(){
  
  var random = (Math.floor((Math.random()*3)) * 130);
  car2.style.left = random + "px";
  counter++;
})

//game owner - Muhammad Rohan //
window.addEventListener("keydown",function(e){
  if(e.keyCode == 39){ var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  if(car1left < 260){
    car1.style.left = (car1left + 130) + "px";
  }}
  
  
  if(e.keyCode == 37)
  { var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  if(car1left > 0){
    car1.style.left = (car1left - 130) + "px";
  }}
  
});





//for mobile start
function moveleft() {
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  console.log(car1left);
  if (car1left > 0) {
    car1.style.left = (car1left - 130) + "px";
  }
}

function moveright() {
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  if (car1left < 260) {
    car1.style.left = (car1left + 130) + "px";
    
  }
  
  
  
}

//for mobile end




setInterval(function gameover(){
  var car2top = parseInt(window.getComputedStyle(car2).getPropertyValue("top"));
  
  var car2left = parseInt(window.getComputedStyle(car2).getPropertyValue("left"));
  
  var car1left = parseInt(window.getComputedStyle(car1).getPropertyValue("left"));
  
  if((car2left === car1left) && (car2top > 500) && (car2top < 520)){
    
    result.style.display = "block";
    game.style.display = "none";
    score.innerHTML = `score: ${counter}`;
    conter = 0;
  }
  
  
},10)