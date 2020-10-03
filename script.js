let timeNow = moment();

$('#currentDay').text(timeNow.format("dddd, MMMM Do"));
let currentTime = timeNow.format("H");
// console.log(timeNow)
console.log(currentTime)
// for each elemenet contaning form-control class
$(".form-control").each(function(form){
    // if current time equals the data number in the element
    if($(this).data("number") == currentTime){
        // add a "present" class to the element
        $(this).addClass("present");
        console.log(currentTime  +"=="  + $(this).data("number"))
    }
    // if current time greater the data number in the element
    else if($(this).data("number") < currentTime){
        // add a "past" class to the element
        $(this).addClass("past");
        console.log(currentTime  +">"  + $(this).data("number"))
    }
    else {
        // add a "future" class to the element
        $(this).addClass("future");
        console.log(currentTime  +"<"  + $(this).data("number"))
    }    
})
$(".saveBtn").on("click", function(){
    let text = $("textarea").val();
    console.log($("textarea").val());
})