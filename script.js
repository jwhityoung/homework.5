

//Current date at top of page 
var fullDate = new Date();
var twoDigitMonth = fullDate.getMonth() + ""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;
var twoDigitDate = fullDate.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
var currentDate = twoDigitMonth + "/" + twoDigitDate + "/" + fullDate.getFullYear();
$("#currentDay").text(currentDate);

//buttons

var nineSave = $("#9am-button");
var nineForm = $("#9am-form");
nineForm.val(localStorage.getItem("nineEntry"));

nineSave.on("click", function() {
    nineForm.text(nineForm.val());
    console.log(nineForm.val());
    var nineEntry = nineForm.val();
    localStorage.setItem("nineEntry", nineEntry);
});


