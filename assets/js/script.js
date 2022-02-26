var textareaEl = $("textarea");
var userData = textareaEl.submit(this);

setInterval(function() {
    $("#currentDay").html(moment().format("MMMM DD, YYYY - hh:mm:ss A"));
})

function saveText() {
    if ($(".saveBtn").click()) {
        localStorage.setItem("userData", textareaEl.val());
    }
}
saveText();