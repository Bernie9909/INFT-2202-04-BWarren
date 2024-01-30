// ICE3 part 2 
// #100881644
// Bernie Warren 
// 01-30-24

console.log("Selectors.js loaded")
$(function() {
    console.log("DOM is ready.")
});

// 
function highlight(element) {
    element.css('background-color', "#fcf30040");
}

function cssSelectors() {
    // Updating by tag
    $('p').css('background-color', "2a9d8f");
    // Updating by class
    $('.red-box').css('background-color', "#2a9d8f");
    // Updating by ID
    $('#list').css('font-size', "40px");

    $('li:even').css('background-color', "#2a9d8f");
}

cssSelectors();