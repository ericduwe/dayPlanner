var timeBlocks = document.getElementsByClassName("time-block");
var currentDay = document.getElementById("currentDay");
var eventText = document.getElementsByClassName("description")
var saveButton = document.getElementsByClassName("saveBtn")

currentTime = moment().hour()

currentDay.textContent = moment().format("dddd, MMM Do YYYY")


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

function saveAppointment() {
for (var i = 0; i < saveButton.length; i++) {
    var buttons = saveButton[i]
    buttons.addEventListener("click", function (event) {
        for (var i=0; i<eventText.length; i++) {
        event.preventDefault();
        var eventTextArea = eventText[i];
        var apptContent = eventTextArea.value
        console.log(apptContent);
        localStorage.setItem("Appointment", JSON.stringify(apptContent));
        }
    })
};

};



function changeBlock(element, color) {
    element.style.backgroundColor = color;

};

saveAppointment();