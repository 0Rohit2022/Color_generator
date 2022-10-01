

const containerEl = document.querySelector(".container");


for (let index = 0; index < 30; index++) {
   const colorContainerEl = document.createElement("div");
   colorContainerEl.classList.add("color-container");
   containerEl.appendChild(colorContainerEl);
    
}
const colorContainerEls = document.querySelectorAll(".color-container");

generateColors()
function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newcolorEl = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newcolorEl;
        colorContainerEl.innerText = "#" + newcolorEl;
    })
}


randomColor()

function randomColor() {
    const chars = "0123456789abcdef";
    const codeColorLength = 6;
    var colorCode = "";
    for (let index = 0; index < codeColorLength; index++) {
       const randomNum = Math.floor(Math.random() * chars.length);
       colorCode = colorCode + chars.substring(randomNum , randomNum + 1);
    //    console.log(colorCode);
        
    }
    
    return colorCode;

}






