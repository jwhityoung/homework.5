

//Current date at top of page 
$("#currentDay").text(moment().format('MMMM Do, YYYY'));

//Current time 
var currentHour = (moment().format('HH'));
console.log(currentHour);


// //Dynamic background color 
// function dynamicColor9() {

//     // $(".text-area").each(function () {
//     //     var block = $(this).attr("id").split("-")[0];
//     //     console.log(block)

//         if (currentHour > block) {
//             console.log("past");
//         //   $(".text-area").css("background-color", "#78C2AD");
            
//         }
//         else if (currentHour < block) {
//             // $(".text-area").css("background-color", "red");
            
//         }
//         else if (currentHour = block) {
//             console.log("future");
//         //   $(".text-area").css("background-color", "#F3969A");

//         }
//     // });
// }

// dynamicColor9();

// //Dynamic background color 
// function dynamicColor17() {

//     // $(".text-area").each(function () {
//     //     var block = $(this).attr("id").split("-")[0];
//     //     console.log(block)
// var blockFive = 23;
//         if (currentHour > blockFive) {
//             console.log("past");
//             $("#17-form").css("background-color", "#78C2AD");
            
//         }
//         else if (currentHour < blockFive) {
//             $("#17-form").css("background-color", "red");
            
//         }
//         else if (currentHour == blockFive) {
//             console.log("future");
//             $("#17-form").css("background-color", "#F3969A");

//         }
//     // });
// }

// dynamicColor17();


//9am
var nineSave = $("#9am-button");
var nineForm = $("#9-form");
var block = (9);


nineForm.val(localStorage.getItem("nineEntry"));

nineSave.on("click", function () {
    nineForm.text(nineForm.val());
    console.log(nineForm.val());
    var nineEntry = nineForm.val();
    localStorage.setItem("nineEntry", nineEntry);
});



//10am
var tenSave = $("#10am-button");
var tenForm = $("#10-form");
tenForm.val(localStorage.getItem("tenEntry"));

tenSave.on("click", function () {
    tenForm.text(tenForm.val());
    console.log(tenForm.val());
    var tenEntry = tenForm.val();
    localStorage.setItem("tenEntry", tenEntry);
});

//11am
var elevenSave = $("#11am-button");
var elevenForm = $("#11-form");
elevenForm.val(localStorage.getItem("elevenEntry"));

elevenSave.on("click", function () {
    elevenForm.text(elevenForm.val());
    console.log(elevenForm.val());
    var elevenEntry = elevenForm.val();
    localStorage.setItem("elevenEntry", elevenEntry);
});

//12pm
var noonSave = $("#12pm-button");
var noonForm = $("#12-form");
noonForm.val(localStorage.getItem("noonEntry"));

noonSave.on("click", function () {
    noonForm.text(noonForm.val());
    console.log(noonForm.val());
    var noonEntry = noonForm.val();
    localStorage.setItem("noonEntry", noonEntry);
});

//1pm
var oneSave = $("#1pm-button");
var oneForm = $("#13-form");
oneForm.val(localStorage.getItem("oneEntry"));

oneSave.on("click", function () {
    oneForm.text(oneForm.val());
    console.log(oneForm.val());
    var oneEntry = oneForm.val();
    localStorage.setItem("oneEntry", oneEntry);
});


//2pm
var twoSave = $("#2pm-button");
var twoForm = $("#14-form");
twoForm.val(localStorage.getItem("twoEntry"));

twoSave.on("click", function () {
    twoForm.text(twoForm.val());
    console.log(twoForm.val());
    var twoEntry = twoForm.val();
    localStorage.setItem("twoEntry", twoEntry);
});

//3pm
var threeSave = $("#3pm-button");
var threeForm = $("#15-form");
threeForm.val(localStorage.getItem("threeEntry"));

threeSave.on("click", function () {
    threeForm.text(threeForm.val());
    console.log(threeForm.val());
    var threeEntry = threeForm.val();
    localStorage.setItem("threeEntry", threeEntry);
});

//4pm
var fourSave = $("#4pm-button");
var fourForm = $("#16-form");
fourForm.val(localStorage.getItem("fourEntry"));

fourSave.on("click", function () {
    fourForm.text(fourForm.val());
    console.log(fourForm.val());
    var fourEntry = fourForm.val();
    localStorage.setItem("fourEntry", fourEntry);
});

//5pm
var fiveSave = $("#5pm-button");
var fiveForm = $("#17-form");
fiveForm.val(localStorage.getItem("fiveEntry"));

fiveSave.on("click", function () {
    fiveForm.text(fiveForm.val());
    console.log(fiveForm.val());
    var fiveEntry = fiveForm.val();
    localStorage.setItem("fiveEntry", fiveEntry);
});