var textareaEl = $("textarea");
var userData = textareaEl.submit(this);
var now = moment();

setInterval(function() {
    $("#currentDay").html(moment().format("MMMM DD, YYYY"));
    $("#currentTime").html(moment().format("hh:mm:ss A"));
})

function saveText() {
    if ($(".saveBtn").click()) {
        localStorage.setItem("userData", textareaEl.val());
    }
}

function loadSaved() {

}

function blockColor() {
    if (moment().hour() < 9) {
        $("#9am").addClass("future")
    }
    else if (moment().hour() == 9) {
        $("#9am").addClass("present")        
    }
    else {
        $("#9am").addClass("past")
    }
    if (moment().hour() < 10) {
        $("#10am").addClass("future")
    }
    else if (moment().hour() == 10) {
        $("#10am").addClass("present")        
    }
    else {
        $("#10am").addClass("past")
    }
    if (moment().hour() < 11) {
        $("#11am").addClass("future")
    }
    else if (moment().hour() == 11) {
        $("#11am").addClass("present")        
    }
    else {
        $("#11am").addClass("past")
    }
    if (moment().hour() < 12) {
        $("#12pm").addClass("future")
    }
    else if (moment().hour() == 12) {
        $("#12pm").addClass("present")        
    }
    else {
        $("#12pm").addClass("past")
    }
    if (moment().hour() < 13) {
        $("#1pm").addClass("future")
    }
    else if (moment().hour() == 13) {
        $("#1pm").addClass("present")        
    }
    else {
        $("#1pm").addClass("past")
    }
    if (moment().hour() < 14) {
        $("#2pm").addClass("future")
    }
    else if (moment().hour() == 14) {
        $("#2pm").addClass("present")        
    }
    else {
        $("#2pm").addClass("past")
    }
    if (moment().hour() < 15) {
        $("#3pm").addClass("future")
    }
    else if (moment().hour() == 15) {
        $("#3pm").addClass("present")        
    }
    else {
        $("#3pm").addClass("past")
    }
    if (moment().hour() < 16) {
        $("#4pm").addClass("future")
    }
    else if (moment().hour() == 16) {
        $("#4pm").addClass("present")        
    }
    else {
        $("#4pm").addClass("past")
    }
    if (moment().hour() < 17) {
        $("#5pm").addClass("future")
    }
    else if (moment().hour() == 17) {
        $("#5pm").addClass("present")        
    }
    else {
        $("#5pm").addClass("past")
    }
}
blockColor();