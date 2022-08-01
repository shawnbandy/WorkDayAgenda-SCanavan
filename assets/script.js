//! EVERYTHING SHOULD BE IN JQUERY, AND NOT VANILLA

//*planning: 
//TODO: Initialize a list that goes from 9AM-5PM, so that's a total of 8 list elements/blocks
    //? Maybe add some tag within the for loop so each list element is separate for local storage?
    //* will have to have a check to see if there's anything in local storage when list is created, and assign text accordingly
//TODO: append a button to each block to allow it to save the .text() to local storage
    //* have the initial .text() content as a placeholder as "click to add" or something like that, and changes on user input
//TODO: color all the list elements the same, and then run through a check to see what time it is, and that will affect the color of the element
    //? probably have to do this in the for loop
//TODO: add functionality to the button

//!CSS has a class for time block, row, hour, past, present, future, savebtn

/*
*pseudo-code for the for loop i reference 
*for (var i = 0; i < 9; i++){
*       createList element with id of i, set the hour part of the text to i+9 (and change it if it's after 12pm)
*       if (localStorage.getItem(listelement[i]Text == true) { listelement[i] = localstoragething })
*       set the list element with the styling
*       create a button element and append it to the list item
*       append list item to unordered list that will be created prior to this loop
*       
*}
*/

var dt = new Date();
var time = dt.getHours();




var containerEl = $(".container");

var unorderedListEl = $("<ul>");
unorderedListEl.addClass("time-block");
unorderedListEl.text("text")

var dataNumber = 0;


//*this creates the list elements for non-12 hour time, compares it against the current time, and then adds classes past/present/future
var hourCountPastTwelve = 0;
for (var i = 9; i < 18; i++){

    //*creates div and gives it the respective data number
    var divHolder = $("<div>");
    divHolder.addClass("row");
    divHolder.attr("data-number", dataNumber);

    //*creates the hour element, sets the width
    var pHourEl = $("<p>");
    pHourEl.addClass("hour");
    pHourEl.attr("style", "width: 10%");

    //*creates the list element, sets the time class in comparison to local time
    // var listElement = $("<li>");
    // listElement.attr("style", "width: 80%");
    // i > time ? listElement.addClass("future") :
    // i == time ? listElement.addClass("present") : listElement.addClass("past"); 


    // //*throwing this in there to make it 12 hour time and not 24 hour time
    // //!may delete later after finding out more about moment.js
    if (i > 12){
        hourCountPastTwelve++;
        pHourEl.text(hourCountPastTwelve + "PM");
    }else if (i == 12){
        pHourEl.text(i + "PM");
    }else { pHourEl.text(i + "AM"); }
    

    //*creates the input type to type in
    var formEl = $("<input>")
    formEl.attr("style", "border: none; width: 80%; height: 100%; color: black; padding: 0; margin: 0;");
    
    i > time ? formEl.addClass("future") :
    i == time ? formEl.addClass("present") : formEl.addClass("past"); 

    
    //*checks to see if there localstorage for the div, and then ets it accordingly
    if (localStorage.getItem(dataNumber) == null ||
        localStorage.getItem(dataNumber) == ""){
        formEl.attr("placeholder", "Click here to type.");
    }else {
        formEl.attr("placeholder", localStorage.getItem(dataNumber));
    }
    
    
    //*savebutton element
    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn");
    saveBtnEl.attr("style", "width: 10%");
    saveBtnEl.attr("data-number", dataNumber);
    saveBtnEl.text("💾");


    //*appends the form to the list, then appends the hour, list, and savebtn to the div
    // listElement.append(formEl);
    divHolder.append(pHourEl);
    divHolder.append(formEl); //!changed from listEl
    divHolder.append(saveBtnEl);

    //*finally, appends everything to the unordered list created outside the loop
    unorderedListEl.append(divHolder);

    //*increases dataNumber so no div has the same one
    dataNumber++;
};



containerEl.append(unorderedListEl);


var saveBtn = $(".saveBtn");

//*going to be honest, didn't think this would work at all
//*this function fires on button click, which get's the div's data number, then assigns the localstorage to that datanumber for recalling
//*second thing that is done, is the value of the input is stored in localstorage
saveBtn.on("click", function(event){

    var target = $(event.target);
    var parent = target.parent();
    var dataType = parent.attr("data-number")
    var test = parent.children("input").val()
    
    localStorage.setItem(dataType, test);
});



