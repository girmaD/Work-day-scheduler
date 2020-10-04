let timeNow = moment();
let scheduleArr = [];
let plan;
let storedArr;
let retrievedSchedule;

$('#currentDay').text(timeNow.format("dddd, MMMM Do"));
let currentTime = timeNow.format("H");

function renderSchedule(){
    storedArr = JSON.parse(localStorage.getItem("mySchedule"));
    if(storedArr !== "null"){
        storedArr.forEach(function(arr){
            console.log(arr)
            retrievedSchedule = arr;
            text = retrievedSchedule.text;
            if(text !== "null"){                
                $(this).parent("div").children(".inputText").children("textarea").val(text);
            }
        })
    }
}

// for each element contaning form-control class
function coloredDiv(){
    $(".form-control").each(function(form){
        // if current time equals the data number in the element
        if($(this).data("number") == currentTime){
            // add a "present" class to the element
            $(this).addClass("present");
            // console.log(currentTime  +"=="  + $(this).data("number"))
        }
        // if current time greater the data number in the element
        else if($(this).data("number") < currentTime){
            // add a "past" class to the element
            $(this).addClass("past");
            // console.log(currentTime  +">"  + $(this).data("number"))
        }
        else {
            // add a "future" class to the element
            $(this).addClass("future");
            // console.log(currentTime  +"<"  + $(this).data("number"))
        }    
    })
}        
    
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    let text = $(this).parent("div").children(".inputText").children("textarea").val();
    let time = $(this).parent("div").children(".time-block").text();
    
    if(text === ""){
        alert("you have to write on the textarea to save it")
        return
    }
    else {
        plan = {time: time, text: text};         
    }    
       
    scheduleArr = JSON.parse(localStorage.getItem("mySchedule"));
    if(!scheduleArr){        
        localStorage.setItem("mySchedule", JSON.stringify([plan]));        
    }    
    else {
        scheduleArr.push(plan);
        localStorage.setItem("mySchedule", JSON.stringify(scheduleArr));
    }    
    // $(this).parent("div").children(".inputText").children("textarea").replaceWith(('<textarea class="form-control">' + text + '</textarea>'));
})


coloredDiv();
   
     
    
