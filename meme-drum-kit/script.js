window.addEventListener("keydown", keySound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => {key.addEventListener("transitionend", removeClass)})


keys.forEach(div => {
  div.addEventListener("click", clickSound);
});


function keySound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  key.classList.add("playing");
  audio.currentTime=0;
  audio.play();
}


function clickSound(e){
  const clickedElement = e.target;
  const playingKey = clickedElement.getAttribute("data-key");
  const key = document.querySelector(`.key[data-key="${playingKey}"]`);
  const audio = document.querySelector(`audio[data-key="${playingKey}"]`);

  if(!audio) return;

  key.classList.add("playing");
  audio.currentTime=0;
  audio.play();
}


function removeClass(e) {
  if(e.propertyName !== "transform") return;

  this.classList.remove("playing");
}