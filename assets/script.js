var timeBlocks = document.getElementsByClassName("time-block");
var currentDay = document.getElementById("currentDay");
currentTime = moment().hour()

currentDay.textContent = moment().format("dddd, MMM Do YYYY")

Array.from(timeBlocks).forEach(block => {
    let blockId = block.id,
    blockHour;
    if (blockId) {
        blockHour = parseInt(blockId);
    }
    if (blockHour) {
        if (currentTime === blockHour) {
            changeBlock(block, "#EB5D17")
        } else if (currentTime < blockHour) {
            changeBlock(block, "#109E65")
        } else {
            changeBlock(block, "#0081EB")
        }
    }

});

function changeBlock(element, color) {
    element.style.backgroundColor = color;
    
}

