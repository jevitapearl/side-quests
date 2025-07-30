let n = document.getElementById("num");

function generate_num(){
  n.textContent = Math.floor(Math.random()*10000);
}