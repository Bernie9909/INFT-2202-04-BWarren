console.log('xhr_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// instantiate the XMLHttpRequest object with the new keyword
const xhreq = new XMLHttpRequest();


// create a callback function to fire when the onreadystatechange happens
xhreq.onreadystatechange = function() {
    // check that the state is done
    if (xhr.readyState === 4) {
        // turn into json
        var jsonConversion = JSON.parse(xhr.responseText);
        // console log to see what we have
        console.log(data);
        // update the 1st image
        document.getElementById("photo1").src = data.image1;
        // update the 1st figcaption
        document.getElementById("figcap1")
        // update the 2nd image
        document.getElementById("photo2");
        // update the 2nd figcaption
        document.getElementById("figcap2");
    } else {
        // send error message
        console.log("Error during request: " + xhr.status);
    }
}

// use the .open() method to configure the object

// add datatype to header

// use the .send() method to send the request