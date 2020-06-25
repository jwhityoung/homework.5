

//Current date at top of page 
$("#currentDay").text(moment().format('MMMM Do, YYYY'));

//Current time 
var today = new Date();
var time = today.getHours() + today.getMinutes();
console.log(time);

let currentTime = time;
if (time > )

   

//9am
var nineSave = $("#9am-button");
var nineForm = $("#9am-form");
nineForm.val(localStorage.getItem("nineEntry"));

nineSave.on("click", function() {
    nineForm.text(nineForm.val());
    console.log(nineForm.val());
    var nineEntry = nineForm.val();
    localStorage.setItem("nineEntry", nineEntry);
});

//10am
var tenSave = $("#10am-button");
var tenForm = $("#10am-form");
tenForm.val(localStorage.getItem("tenEntry"));

tenSave.on("click", function() {
    tenForm.text(tenForm.val());
    console.log(tenForm.val());
    var tenEntry = tenForm.val();
    localStorage.setItem("tenEntry", tenEntry);
});

//11am
var elevenSave = $("#11am-button");
var elevenForm = $("#11am-form");
elevenForm.val(localStorage.getItem("elevenEntry"));

elevenSave.on("click", function() {
    elevenForm.text(elevenForm.val());
    console.log(elevenForm.val());
    var elevenEntry = elevenForm.val();
    localStorage.setItem("elevenEntry", elevenEntry);
});

//12pm
var noonSave = $("#12pm-button");
var noonForm = $("#12pm-form");
noonForm.val(localStorage.getItem("noonEntry"));

noonSave.on("click", function() {
    noonForm.text(noonForm.val());
    console.log(noonForm.val());
    var noonEntry = noonForm.val();
    localStorage.setItem("noonEntry", noonEntry);
});

//1pm
var oneSave = $("#1pm-button");
var oneForm = $("#1pm-form");
oneForm.val(localStorage.getItem("oneEntry"));

oneSave.on("click", function() {
    oneForm.text(oneForm.val());
    console.log(oneForm.val());
    var oneEntry = oneForm.val();
    localStorage.setItem("oneEntry", oneEntry);
});


//2pm
var twoSave = $("#2pm-button");
var twoForm = $("#2pm-form");
twoForm.val(localStorage.getItem("twoEntry"));

twoSave.on("click", function() {
    twoForm.text(twoForm.val());
    console.log(twoForm.val());
    var twoEntry = twoForm.val();
    localStorage.setItem("twoEntry", twoEntry);
});

//3pm
var threeSave = $("#3pm-button");
var threeForm = $("#3pm-form");
threeForm.val(localStorage.getItem("threeEntry"));

threeSave.on("click", function() {
    threeForm.text(threeForm.val());
    console.log(threeForm.val());
    var threeEntry = threeForm.val();
    localStorage.setItem("threeEntry", threeEntry);
});

//4pm
var fourSave = $("#4pm-button");
var fourForm = $("#4pm-form");
fourForm.val(localStorage.getItem("fourEntry"));

fourSave.on("click", function() {
    fourForm.text(fourForm.val());
    console.log(fourForm.val());
    var fourEntry = fourForm.val();
    localStorage.setItem("fourEntry", fourEntry);
});

//5pm
var fiveSave = $("#5pm-button");
var fiveForm = $("#5pm-form");
fiveForm.val(localStorage.getItem("fiveEntry"));

fiveSave.on("click", function() {
    fiveForm.text(fiveForm.val());
    console.log(fiveForm.val());
    var fiveEntry = fiveForm.val();
    localStorage.setItem("fiveEntry", fiveEntry);
});
