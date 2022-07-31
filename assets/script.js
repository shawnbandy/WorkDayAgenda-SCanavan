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
unorderedListEl.text("unorderedList");





//*this creates the list elements for non-12 hour time, compares it against the current time, and then adds classes past/present/future
var hourCountPastTwelve = 0;
for (var i = 9; i < 18; i++){

    var listElement = $("<li>");
    listElement.addClass("row");
    listElement.addClass("time-block");
    
    var saveBtnEl = $("<button>");
    saveBtnEl.addClass("saveBtn");
    saveBtnEl.text("Click here to save");

    var listTextEl = $(listElement.text());

    i > time ? listElement.addClass("future") :
    i == time ? listElement.addClass("present") :
    i < time ? listElement.addClass("past") : i = 10 

    if (i > 12){
        hourCountPastTwelve++;
        listElement.text("The hour is " + hourCountPastTwelve);
    }else { listElement.text("The hour is " + i); }

    listElement.append(saveBtnEl);
    unorderedListEl.append(listElement);
};




containerEl.append(unorderedListEl);


