// alert ("Drum kit working");
// here is the event listener function

// this is for one button
// document.addEventListener("click",function(){
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked!");
// });
// this is for all numberOfButtons
// document.addEventListener("click",function(){
// document.querySelectorAll("button").addEventListener("click",function(){
//     alert("I got clicked!");
// });



// get the number of nodes (buttons to assign a listener to each one)
// var numberOfButtons=document.querySelectorAll("button").length
// best way is to target it by class as there could be more buttons elsewhere in the page
var numberOfButtons = document.querySelectorAll(".drum").length;
// alert (numberOfButtons);
// now add the addEventListener to each one
for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // alert("clickyydoo")
    //play a drum
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
}
// var drumAudio1 = new Audio('sounds/tom-1.mp3');
// drumAudio1.play();
var keyPress = document.addEventListener("keydown", function(event) {
  //KeyA so remove the key word
  //console.log(event.code.slice (3,4 ));
  // playSound(event.code.slice(3, 4));
   playSound(event.key);
   buttonAnimation(event.key);
});


function playSound(key) {

  //alert ("you pressed:" +key);
  switch (key.toLowerCase()) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log(key);
  }
}


function buttonAnimation (currentKey){
  var currentKey ='.'+currentKey;
  //alert (currentKey);
document.querySelector(currentKey).classList.add("pressed");

setTimeout(function() {
  document.querySelector(currentKey).classList.remove("pressed");
},100);

}
