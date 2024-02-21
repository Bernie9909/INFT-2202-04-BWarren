console.log("xhr_script.js loaded");

// get the button for xhr
let btn_Xhr = $('#xhrJoke');

// create a url variable
let url_Xhr = "https://icanhazdadjoke.com/";

// create a click callback that handles the API call
$(btn_Xhr).click(() => {
    // instantiate an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // confiture with open()
    xhr.open("GET", url_Xhr);
    // set the necessary headers for icanhazdadjoke.com
    xhr.setRequestHeader("Accept", "application/json");
    // create the callback to handle the onreadystatechange
    xhr.onreadystatechange = function () {
        // only execute when done and status is 200
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

        
        // get the responseText
        let joke = xhr.responseText;
        // console log
        console.log(joke);
        // JSON.parse the joke
        let convertedJoke = JSON.parse(joke);
        // set the output (target the p not the div)
        $('#output').text(convertedJoke.joke);
        }
    }
        
    // send the request
    xhr.send();
});

