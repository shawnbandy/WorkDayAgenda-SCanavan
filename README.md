# WorkDayAgenda-SCanavan

Goals of the Assignment: 
1. Current Day is displayed on top of the agenda 
2. Time blocks are present for stardard business hours, 9-5
3. Time blocks are color coded depending on the current time (green, gray, red for future, present, past)
4. Time block text can be edited to enter events
5. A save function works for each individual time block, and saved text persists through refresh

These were accomplished by:
1. Using moment.js to display the current time on the jumbotron page element
2. Using JQ to create page elements in a for loop and creating a time block with an hour, editable block, and save button
3. Using JQ page elements and comparing the time block to current time from moment.js, then assigning the future, present, or past class to it
4. Setting the time block as an input element to allow user to change the text
5. Having an on-click function for the save button to set the localStorage of the input element value to user's input, which is called upon during time block creation

Link to website: 

Link to REPO:
