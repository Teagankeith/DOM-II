// Your code goes here
//Changes the color of the Title on click (1/10)
let titleText = document.querySelector(".logo-heading");

titleText.addEventListener("click", () => {
   if(titleText.style.color === "rebeccapurple") {
       titleText.style.color = "black"
   } else {
       titleText.style.color = "rebeccapurple"
   }
})

//Changes the border of the "coffee img" on mouseover (2/10)
let coffeeImg  = document.querySelector("#coffee-img");

coffeeImg.addEventListener("mouseenter", () => {
    coffeeImg.style.border = '5px dashed purple';
})


//Returns the border of "coffee img" on mouseleave back to default (3/10)

coffeeImg.addEventListener("mouseleave", () => {
    coffeeImg.style.border = 'none';
})


//If you double click on the body it turns the color to "red" and if the color is already red, it returns to white (4/10)
let bodyDclick = document.querySelector("body");

bodyDclick.addEventListener("dblclick", () => {
    if(bodyDclick.style.backgroundColor === "white") {
        bodyDclick.style.backgroundColor = "red";
    } else {
        bodyDclick.style.backgroundColor = "white";
    }
})


//Changes the color of the text on the page when keydown (5/10)

let textColor = document.querySelector("body");

textColor.addEventListener("keydown", () => {
    textColor.style.color = "red";
})

// Changes the color of the text on the page when keydown is released (6/10)
textColor.addEventListener("keyup", () => {
    textColor.style.color = "black";
})


//Changes the color of the body on drag(7/10)

let dragEl = document.querySelector("body");

dragEl.addEventListener("drag", () => {
    dragEl.style.color = "purple";
})


//Changes the color of the body back to default on drop (8/10)

dragEl.addEventListener("drop", () => {
    dragEl.style.color = "black";
})


//Makes the size of the img scaled higher or lower (9/10)
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // scale restriction
    scale = Math.min(Math.max(.125, scale), 4);
    //transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;


  //Spins the Image once the mouse goes over the element (10/10)

  let boatImg = document.querySelector("#destinationImg");

  boatImg.addEventListener("mouseover", () => {
    boatImg.style.transform = "rotate(360deg)";
    boatImg.style.transition = "transform 1s";
  })