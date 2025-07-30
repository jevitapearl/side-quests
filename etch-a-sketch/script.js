let container = document.querySelector(".grid-container");

let blackColor = () => mode=0;
let randomColor = () => mode=1;

let mode = 0;

function reset(){
  document.querySelectorAll(".cell").forEach(cell => cell.style.backgroundColor = "#ffffff");
}


function resize(){
  document.querySelectorAll(".cell").forEach(cell => cell.remove(".cell"));
  const n = parseInt(prompt("Enter the size of grid (n) for n x n canvas: "));
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`

  for(let i=0; i<n*n; i++){
      const cell = document.createElement("div");
      cell.classList.add("cell");
      container.append(cell);
      cell.addEventListener("mouseenter", () => {
        if (mode === 0){
          let darkness = parseFloat(cell.dataset.darkness || 0);
          darkness = Math.min(darkness+0.2, 1);
          cell.dataset.darkness = darkness;20
          cell.style.backgroundColor = `rgba(0, 0, 0, ${darkness})`;
        }

        else if (mode === 1){
          const c = "0123456789ABCDEF";
          let color = "#";
          for(let j=0; j<6; j++){
            color += c[Math.floor(Math.random()*16)];
          }
          cell.style.backgroundColor = color;

        }
      }

      );

  }

}


resize();