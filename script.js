$(document).ready(function(){


    let timeNow = moment();    
    let hours = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM","3:00PM", "4:00PM", "5:00PM"]
    // format the time in military time to create a mathematical ease
    let currentTime = timeNow.format("H");

    // placing today's date as a text on an element containing a "currentDay" id
    $('#currentDay').text(timeNow.format("dddd, MMMM Do"));
    
    
    // this function compares currentTime with the data-number attribute and adds a class
    // that changes the color of the textarea based on past, present and future times
    function coloredTimeBlock(){
        $(".form-control").each(function(){
            let dataNumber = $(this).data("number");
            // if current time equals the data number in the element
            if(dataNumber == currentTime){
                // add a "present" class to the element
                $(this).addClass("present");                                
            }
            // if current time greater the data number in the element
            else if($(this).data("number") < currentTime){
                // add a "past" class to the element
                $(this).addClass("past");                
            }
            else {
                // add a "future" class to the element
                $(this).addClass("future");
            }    
        })
    }    
    
    // this function saved text to local storage using time as a key
    function saveToLocalStorage(event){    
        event.preventDefault();
        let text = $(this).parent("div").children("textarea").val();
        let time = $(this).parent("div").children(".time-block").text();
        
        if(text === ""){
            alert("you have to write on the textarea to save it")
            return           
        }
        else {               
            localStorage.setItem(time, text);               
        }            
    }
    // looping through textarea to place the local storage items in the textarea
    $("textarea").each(function(){    
        for(let i = 0; i < hours.length; i++){
            // let id = $(this).attr("id");
            let key = hours[i];
            // console.log(key)
            // let id = `#${key}`;
            // let text = localStorage.getItem(key);
            if(localStorage.getItem(key)){
                // let id = `#${key}`;                
                $("#"+key).text(localStorage.getItem(key))
            }
            // console.log(id)
            // console.log(key)
            // console.log(text)
            // if(id === key ){
            //     $(this).text(text)
            // }
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
