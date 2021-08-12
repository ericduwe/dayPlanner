var timeBlocks = document.getElementsByClassName("time-block");
var currentDay = document.getElementById("currentDay");
var eventText = document.getElementsByClassName("description").value
var saveButton = document.getElementsByClassName("saveBtn")
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

for (var i=0; i < saveButton.length; i++) {
    var buttons = saveButton[i]
    buttons.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Clicked the button!")
    })
}

function saveAppointment () {
    
    Array.from(eventText).forEach(element => {
    if (element === "") {
        alert("Error: Description cannot be blank.");
    } else {
        alert(`${element} saved!`);
    }
    });
}


function changeBlock(element, color) {
    element.style.backgroundColor = color;
    
};
