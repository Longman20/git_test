document.addEventListener("DOMContentLoaded", () => {
const parentDiv = document.getElementById("parentDiv");
const resetButton = document.getElementById("btn");


let isDrawing = false;
document.addEventListener("mousedown", () => (
  isDrawing = true));
 document.addEventListener("mouseup", () => (
  isDrawing = false)); 
    
  function promptForSize() {
   const input = prompt("Enter a number between 1 and 100");
   if (input === null) return null;                                                                                                                                                                                                                    
   const n = parseInt (input ,10);
    if (isNaN (n) || n < 1) {
      alert ("Enter a number between 1 and 10");
      return promptForSize();
    }
    if ( n > 100){
      alert ("Number is greater than 100");  
      return promptForSize();
    }
    return n;
  }

  function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
  }

  function buildGrid(n) {
    parentDiv.innerHTML = '';
    const squaresize = 960 / n;
    
    for (let i=0; i < n * n; i++) {
  const square = document.createElement("div");
  square.className = "square";
  square.style.width = `${squaresize}px`;
  square.style.height = `${squaresize}px`;
  const random= getRandomRGB()

  
  square.addEventListener("mouseover", () => {
    if(isDrawing) square.style.backgroundColor = random;
  });
  square.addEventListener("click", () => {
    square.style.backgroundColor = random;
  });
   
  parentDiv.appendChild(square)
    }
  
  
  }
  resetButton.addEventListener("click", ( )=>{
    const size = promptForSize();
    if (size !== null) buildGrid(size);
  })
  buildGrid(16);
}); 