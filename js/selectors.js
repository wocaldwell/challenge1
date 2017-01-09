var numberEntry = document.getElementById("number");
var rangeEntry = document.getElementById("range");

console.log(rangeEntry.value);

// Using jquery to set the value of the range to the number entered
$("#number").on("keyup paste", function() { // This is manual entry
    $("#range").val($(this).val());
});

$("#number").on("mouseup paste", function() { // This is using the arrows
    $("#range").val($(this).val());
});

// Using jquery to set the value of the number to the range entered
$("#range").on("mouseup paste", function() {
    $("#number").val($(this).val());
});


