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
            setBackground(block, "red")
        } else if (currentTime < blockHour) {
            setBackground(block, "green")
        } else {
            setBackground(block, "lightgrey")
        }
    }

});



function setBackground(element, color) {
    element.style.backgroundColor = color;
}

// function checkTime() {

//     //or (i = 0; i < 24; i++) {

//     if (currentTime === hour) {
//         document.getElementsByClassName("time-block").style.
//         } else if (currentTime < hour) {
//         timeBlock.classList.remove("future");
//     }
// }
// //}

// checkTime()