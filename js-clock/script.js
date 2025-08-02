const secondsHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const digitalHour = document.getElementById("hour");
const digitalMinutes = document.getElementById("min");
const digitalSeconds = document.getElementById("sec");

function setDate(){
  const now = new Date();
  const seconds =  now.getSeconds();
  const secondsDegree = ((seconds/60)*360)+90;
  const minutes=  now.getMinutes();
  const minutesDegree = ((minutes/60)*360)+90;
  const hours=  now.getHours();
  const hoursDegree = ((hours/12)*360)+90;

  digitalHour.innerText = String(hours%12).padStart(2, "0");
  digitalMinutes.innerText = String(minutes).padStart(2, "0");
  digitalSeconds.innerText = String(seconds).padStart(2, "0");

  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  
}

setInterval(setDate, 1000);