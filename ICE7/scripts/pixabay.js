/**
 * ADD HEADER COMMENTS WITH YOUR NAME + DATE
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
// normally we would load a key through the .env file
const PIXABAY_API_KEY = '42719380-662aa52e23b2caef87a34807f';
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
// Constant for image count
const IMAGE_COUNT = 30;

// https://pixabay.com/api/?key=42719380-662aa52e23b2caef87a34807f&per_page=30



/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = () => 
{
    getPictures();
    const blogColumn = $('.blog-column');
    for (let i = 0; i<IMAGE_COUNT; i++) {
        let id = i;
        let card = $('div class="card">hi</div>')
        .attr("id", "photo_" + id)
        .appendTo(blogColumn);

        let pic = $('<img>')
        .attr('id', "img-"+1)
        .addClass('card-img-top')
        // Append pic to card
        .appendTo(card)
        let cardBody = $('<div class ="card-body"></div>');
        // Append card-body to the card elemtn 
        
        let cardParagraph = $('<p class = "card-text tags"></div>');
        // Append paragraph to card body 
    }
    // make HTML elements for posts using jQuery, same number as images retrieving
        // use bootstrap cards and append to
        // i.e. https://getbootstrap.com/docs/5.2/components/card/#about
        // create card
        // card body 
        // card title
        // image
        // card text
        // use tags for img alt= and card text 
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => 
{
    // Get images matching the following: 30 per page, query value of cars, all horizontal ONLY (no vert), type photo only. 
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&q=cars&orientation=horizontal&image_type=photo&per_page=${IMAGE_COUNT}`;
    // use fetch to get the pictures from the API
    fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data => {
        console.log(data);
        console.log(data?.hits);
        // Data retrieved 
        //create posts
        // makePosts();
    }))
    .catch((err) => {
        // log to console 
        console.log(err);
    })
    // handle error(s) with .catch()
};

makePosts();
