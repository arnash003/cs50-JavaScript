

// Go to local storage and get the counter;
// The exclamation mark in JavaScript means "not"
//  The code below demonstrates as the following:
//  If there is NOT something in local storage called counter, go ahead and set the value in local storage. 
// Before anything else happens, we are checking local storage if there is a value for counter and if there is not a value set that value to 0;
// 
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}
function count() {
    // Goes into local storage and gets the value for the key counter
    let counter = localStorage.getItem('counter');  
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);





    if (counter % 10 === 0) {
        alert (`Count is now ${counter}`)
    }
}   

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onclick = count;
});


 
// Manipulating variables
// JavaScript allows us to manipulate the DOM
       


            // When the button is clicked on, then and only then, its runs this count function. Functions
            // can be seen as value of their owns. 
            // functional programming


            // Events in JavaScript 
            // onclick
            // onmouseover
            // onkeydown
            // onload
            // onblur

            // In JavaScript we can also use intervals where a function runs for example, every some number of milliseconds
            // Local storage is a way for user to store information inside of the web browser. 
            // A page can ask to store particular values to a pages web browser and upon subsequent visits to that page 
            //  we can access that information, or extract those values that were previously stored. We can store and retrieve information from the browser


            // Local Storage
            // localStorage.getItem(key) gets something out of local storage based on its key 
            // localStorage.setItem(key, value) sets or replaces a new value inside of local storage based, settings its key to a particular value


            // API's Application Programming Interfaces which in the context of the web
            // is a structured way of communicating or talking to another service.
            // It is a mechanism by sending a request and receiving data back in a 
            // well structured format, which in the context of JavaScript is something known as JSON. 
            // This transforms data in the form of JavaScript Objects

            // example of a javaScript object representing a flight could look like this:
            // {

//              "origin": "New York",
//              "destination": "London",
//              "duration": 415
            // }
            // This both human and computer readable to access these values above
            // It offers a convenient representation 
            // It is very conducive to represent many data types like strings or values



            // We will look at something called Ajax which is asynchronous JavaScript where even if a page is loaded, we can make additional web requests to ask for additional information. 
            // We want this page to make an asychronous request  