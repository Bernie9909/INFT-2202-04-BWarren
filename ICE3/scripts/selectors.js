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

function traversingTheDOM() {
    $('#list').prev().css('background-color', "#fcf30040");
    $('#list').next().css('background-color', "#fcf30040");

    $('#list').find('li').css('background-color', "#fcf300040");
    // Traverse up one level 
    $('#list').parent('div').css('font-size', "24px");
    // Traverse all the way up to the body through all parents, grandparents etc. 
    $('#list').parents('body').css('font-size', "24px");
}   

function filtering() {
    // Short version of the same thing below 
    $('#list').find('li').filter(':even').css('background-color', "#2a9d8f");

    // Long version of the same thing above ^^^
    $('#list').find('li').filter(function (i) {
        return i % 2 == 0;
    }).css('background-color','red');
}

function addReplaceRemove() {
    // Selects the first li in any ul
    $('ul li:first').append($('<ul><li>Im going to be the last item of the first sub-list</li></ul>'));

    $('ul li').prepend($('<ul><li>Prepended</li></ul>'));

    $('.red-box').after("<div class=\"orange-box\">New Red Box</div>")

    let newText = "Last night, darth vader came down from the planet Vulcan.";
    $('p.grumpy').replaceWith('<p>' + newText + '</p>');
}

// filtering();
// cssSelectors();
addReplaceRemove();