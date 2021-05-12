const arrowButtonLeft = document.querySelector('.arrow-button.-left');
const arrowButtonRight = document.querySelector('.arrow-button.-right');
const itemsElements = document.querySelector('.items-elements');
let transformXValue = 140;

function translateXLeft() {
    transformXValue -= 140;
    itemsElements.style = `transform: translate(${transformXValue}px)`;
}

function translateXRight() {
    transformXValue += 140;
    itemsElements.style = `transform: translate(${transformXValue}px)`;
}

arrowButtonLeft.addEventListener('click', translateXLeft);
arrowButtonRight.addEventListener('click', translateXRight);