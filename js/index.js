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


//(7/10)