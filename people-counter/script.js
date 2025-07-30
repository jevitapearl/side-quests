let countEl = document.getElementById("countEl");
let count=0;
let saveEl = document.getElementById("previous-entry")


function increment() {
  count += 1;
  countEl.innerText = count;
}

function save(){
  let prevCountStr = " - " + count
  saveEl.textContent += prevCountStr;
  console.log(count)
  count = 0;
  countEl.textContent = 0;
}

function decrement(){
  count -= 1
  countEl.innerText = count
}