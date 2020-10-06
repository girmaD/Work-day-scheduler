$(document).ready(function(){

    // global variables
    let todayDate = moment();   
    // format the time in military time to create a mathematical ease
    let currentTime = todayDate.format("H");

    // placing today's date as a text on an element containing a "currentDay" id
    $('#currentDay').text(todayDate.format("dddd, MMMM Do"));    
    
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
        let text = $(this).parent("div").children(".form-control").val();
        let time = $(this).parent("div").children(".time-block").text();
        
        if(text === ""){
            alert("you have to write on the textarea to save it")
            return           
        }
        else {               
            localStorage.setItem(time, text);               
        }            
    }

    //this function loops through textarea  and whenever id matches with the local storage key - it places the local storage value on the matching textarea    
    function renderSchedule(){
        $(".form-control").each(function(){
            let id = $(this).attr("id");
            let text = localStorage.getItem(id);
            if(text){            
                $(this).text(text);
            }
        });  
    }     
    // when the saveBtn is clicked call the function - saveToLocalStorage
    $(".saveBtn").on("click", saveToLocalStorage)
    // call the coloredTimeBlock function declared above
    coloredTimeBlock();  
    renderSchedule(); 
       
});    
