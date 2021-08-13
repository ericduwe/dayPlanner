var timeBlocks = document.getElementsByClassName("time-block");
var currentDay = document.getElementById("currentDay");
var eventText = document.getElementsByClassName("description")
var saveButton = document.getElementsByClassName("saveBtn")
currentTime = moment().hour()

currentDay.textContent = moment().format("dddd, MMM Do YYYY")
getAppointments();

Array.from(timeBlocks).forEach(block => {
    var blockId = block.id
    var blockHour;
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

for (var i = 0; i < saveButton.length; i++) {
    var buttons = saveButton[i]
    buttons.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Clicked the button!")
        saveAppointment();
    })
};

function saveAppointment() {

    for (var i = 0; i < eventText.length; i++) {
        //var eventContent = eventText.value
        var singleEventText = eventText[i].value
        localStorage.setItem("Appointment", JSON.stringify(singleEventText))
    }
};


function getAppointments() {
    JSON.parse(localStorage.getItem("appointment"))
}



function changeBlock(element, color) {
    element.style.backgroundColor = color;

};
