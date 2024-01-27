console.log("formValidation.js loaded");

/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    console.log('in ValidateEmailAddress');

    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/*
 * Validate the email address
* @param {string} emailString
* @returns {boolean}    validation result
*/
function validateEmailAddressRegex(emailString) {
    //the regular expression to validate the email address for string+string|number bewten 2-20 characters
    // note the / and / at the beginning and end of the expression
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

    //return true if the email address is valid - how to use regex
	return !!emailString && typeof emailString === 'string'
		&& emailString.match(emailRegex);
}

function validateUsernameRegex(usernameString) {
    // Using Regex and information found on Stackoverflow.com 
    // In response to user learning how to use regex, user Alan Moore responded with 
    // a series of Regex lines and explainations of their use and tips/tricks. 
    // https://stackoverflow.com/questions/1221985/how-to-validate-a-user-name-with-regex
    // I'll be using the first one in his list of responses, as it is the simplest and 
    // most akin to my needs for simple username vaildation.

    var usernameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/; // Allows only ASCII characters with hyphens, underscores, and spaces.
                                                                // Does not allow separators for 1st/last characters.
                                                                // Does not allow 2 separators in a row (forces char after separator).

    // Same logic as email, if username is a valid string that matches the regex, return true                                                            
    if (!!usernameString && typeof usernameString === 'string'
        && usernameString.match(usernameRegex)) {
        return true;     
    } else {
        // If the username does not match the regex or is not a valid string, 
        // Change the general error message, highlight it in red and return false. 
        var targetElement = document.getElementById("generalError");
        targetElement.textContent = "Error - invalid Username. Try something else.";
        targetElement.style.color = "red";
        return false; 
    }
}


//TODO:
// Make all fields required (HTML)                                                      ==========================
// Add a pattern attribute in the telephone element (HTML)                              ==========================
// Ensure the password is redacted into dots on screen when typed in (HTML)             ===========================
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)       ========================
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?) ========================
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
