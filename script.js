$(document).ready(function(){


    let timeNow = moment();
    // let scheduleArr = [];
    // let plan;
    // let storedArr;
    // let retrievedSchedule;

    // placing today's date as a text on an element containing a "currentDay" id
    $('#currentDay').text(timeNow.format("dddd, MMMM Do"));
    // format the time in military time to create a mathematical ease
    let currentTime = timeNow.format("H");
    
    // this function compares currentTime with the data-number attribute and adds a class
    // that changes the color of the textarea based on past, present and future times
    function coloredTimeBlock(){
        $(".form-control").each(function(){
            let dataNumber = $(this).data("number");
            // if current time equals the data number in the element
            if(dataNumber == currentTime){
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
    
    // this function saved text and time to local storage
    function saveToLocalStorage(event){    
        event.preventDefault();
        let text = $(this).parent("div").children("textarea").val();
        let time = $(this).parent("div").children(".time-block").text();
        
        if(text === ""){
            alert("you have to write on the textarea to save it")
            return
            // localStorage.setItem(time, "");
        }
        else {
            // plan = {time: time, text: text};    
            localStorage.setItem(time, text);   
            // scheduleArr.push(plan);
            // localStorage.setItem("mySchedule", JSON.stringify(scheduleArr));  
        }    
        
        // scheduleArr = JSON.parse(localStorage.getItem("mySchedule"));
        // if(!scheduleArr){        
        //     localStorage.setItem("mySchedule", JSON.stringify([plan]));        
        // }    
        // else {
        //     scheduleArr.push(plan);
        //     localStorage.setItem("mySchedule", JSON.stringify(scheduleArr));
        // }    
        // $(this).parent("div").children(".inputText").children("textarea").val(text);
    }

    $("textarea").each(function(){    
        for(let i = 0; i < localStorage.length; i++){
            let id = $(this).attr("id");
            let key = localStorage.key(i);
            let text = localStorage.getItem(key);

            // console.log(id)
            console.log(key)
            // console.log(text)
            if(id === key ){
                $(this).text(text)
            }
        }        
    });
    

    // let storedPlan = localStorage.getItem("time");
    // $("#9AM").text(storedPlan)
    // console.log(storedPlan);

    $(".saveBtn").on("click", saveToLocalStorage)
    coloredTimeBlock();
    
    // $(".saveBtn").on("click", function(){
    //     storedArr = JSON.parse(localStorage.getItem("mySchedule"));

    // })     
});    
