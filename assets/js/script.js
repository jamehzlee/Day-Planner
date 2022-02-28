var textareaEl = $("textarea");

//Displays date and time
setInterval(function() {
    $("#currentDay").html(moment().format("MMMM DD, YYYY"));
    $("#currentTime").html(moment().format("hh:mm:ss A"));
})

//Saves text into local storage
$(".saveBtn").on("click", function() {
    var userText = $(this).siblings(".description").val();
    var userTextId = $(this).siblings(".description");
    
    if (userTextId.is("#9am")) {
        localStorage.setItem("9am", userText)
    }
    else if (userTextId.is("#10am")) {
        localStorage.setItem("10am", userText)
    }
    else if (userTextId.is("#11am")) {
        localStorage.setItem("11am", userText)
    }
    else if (userTextId.is("#12pm")) {
        localStorage.setItem("12pm", userText)
    }
    else if (userTextId.is("#1pm")) {
        localStorage.setItem("1pm", userText)
    }
    else if (userTextId.is("#2pm")) {
        localStorage.setItem("2pm", userText)
    }
    else if (userTextId.is("#3pm")) {
        localStorage.setItem("3pm", userText)
    }
    else if (userTextId.is("#4pm")) {
        localStorage.setItem("4pm", userText)
    }
    else if (userTextId.is("#5pm")) {
        localStorage.setItem("5pm", userText)
    }    
})

//Prints text to matching text area on page load
$(window).on("load", function() {
        $("#9am").text(localStorage.getItem("9am"));
        $("#10am").text(localStorage.getItem("10am"));
        $("#11am").text(localStorage.getItem("11am"));
        $("#12pm").text(localStorage.getItem("12pm"));
        $("#1pm").text(localStorage.getItem("1pm"));
        $("#2pm").text(localStorage.getItem("2pm"));
        $("#3pm").text(localStorage.getItem("3pm"));
        $("#4pm").text(localStorage.getItem("4pm"));
        $("#5pm").text(localStorage.getItem("5pm"));
    })

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