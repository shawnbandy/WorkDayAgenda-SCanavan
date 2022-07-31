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
console.log(time);

var containerEl = $(".container");

var unorderedListEl = $("<ul>");
unorderedListEl.addClass("time-block");
unorderedListEl.text("unorderedList");





//*this creates the list elements for non-12 hour time, compares it against the current time, and then adds classes past/present/future
var hourCountPastTwelve = 0;
for (var i = 9; i < 18; i++){

    var divHolder = $("<div>");
    divHolder.addClass("row");

    var pHourEl = $("<p>");
    pHourEl.addClass("hour");
    pHourEl.attr("style", "width: 10%");

    var listElement = $("<li>");
    listElement.attr("style", "width: 80%");
    i > time ? listElement.addClass("future") :
    i == time ? listElement.addClass("present") : listElement.addClass("past"); 

    if (i > 12){
        hourCountPastTwelve++;
        pHourEl.text(hourCountPastTwelve + "PM");
    }else if (i == 12){
        pHourEl.text(i + "PM");
    }else { pHourEl.text(i + "AM"); }
    


    var DescriptionEl = $("<p1>")
    DescriptionEl.addClass("description");
    DescriptionEl.text("test");

    var formEl = $("<input>")
    formEl.attr("style", "background-color: transparent; border: none; text-align: center;");
    formEl.attr("placeholder", "text");
    
    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn");
    saveBtnEl.attr("style", "width: 10%")
    saveBtnEl.text("💾");

    listElement.append(formEl);
    divHolder.append(pHourEl);
    divHolder.append(listElement);
    divHolder.append(saveBtnEl);

    unorderedListEl.append(divHolder);

};


containerEl.append(unorderedListEl);


var saveBtn = $(".saveBtn");

saveBtn.on("click", function(){
    console.log("go");
    var inputText = saveBtn.parent();
    console.log(inputText)
});





