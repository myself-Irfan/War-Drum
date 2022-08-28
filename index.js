// .drum specifies the class of element
const allDrumBtns = document.querySelectorAll(".drum");

//Detecting button press
for (let i = 0; i < allDrumBtns.length; i++) {
  allDrumBtns[i].addEventListener("click", function() {
    var btnInnerTxt = this.innerText;
    makeSound(btnInnerTxt);
    btnAnimation(btnInnerTxt);
  });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
   makeSound(event.key);
   btnAnimation(event.key);
});

//Function to make sound
function makeSound(key) {
  switch (key) {
    case "w":
      const tom1_a = new Audio('tom-1.mp3');
      tom1_a.play();
      break;

    case "a":
      const tom2_a = new Audio('tom-2.mp3');
      tom2_a.play();
      break;

    case "s":
      const tom3_a = new Audio('tom-3.mp3');
      tom3_a.play();
      break;

    case "d":
      const tom4_a = new Audio('tom-4.mp3');
      tom4_a.play();
      break;

    case "j":
      const snare_a = new Audio('snare.mp3');
      snare_a.play();
      break;

    case "k":
      var crash_a = new Audio('crash.mp3');
      crash_a.play();
      break;

    case "l":
      var kickbass_a = new Audio('kick-bass.mp3');
      kickbass_a.play();
      break;

    default:
      alert("Pressed " + key + ". Please press the keys given on screen or tap the buttons.");
  }
}

//adds and removes pressed animation; toggle will work also
function btnAnimation(currentkey) {
  var active_btn = document.querySelector("." + currentkey);
  active_btn.classList.add("pressed");
  //removes the class after 1 second
  setTimeout(function() {
    active_btn.classList.remove("pressed");
  }, 300);
}
