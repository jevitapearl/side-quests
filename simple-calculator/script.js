let a = document.getElementById("op1");
let b = document.getElementById("op2");
let resultEl = document.getElementById("result")

function divide(){
  if (b.value==0){
        resultEl.textContent = "Number can't be divided by zero!";
  }

  else{
    resultEl.innerText = a.value / b.value;
  }
}

function add(){
  resultEl.textContent = Number(a.value) + Number(b.value);
}

function subtract(){
  resultEl.innerText = a.value - b.value;
}

function multiply(){
  resultEl.innerText = a.value * b.value;
}