/**
 * Bernie Warren 
 * 03-05-24 
 * ICE7 Pixabay API call demonstration 
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
const makePosts = (pictureData) => 
{
    getPictures();
    const blogColumn = $('.blog-column');
    if (pictureData?.length > 0) {
        for (let i = 0; i<IMAGE_COUNT; i++) {
            let id = i;
            let pixabayPicture = pictureData[i];
            let card = $('div class="card">hi</div>')
            .attr("id", "photo_" + id)
            .appendTo(blogColumn);

            let pic = $('<img>')
            .attr('id', "img-"+1)
            .attr("src", pixabayPicture.webFormatURL)
            .attr("alt", pixabayPicture.tags)
            .addClass('card-img-top')
            // Append pic to card
            .appendTo(card)
            let cardBody = $('<div class ="card-body"></div>')
            // Append card-body to the card elemtn 
            .appendTo(card)
            
            let cardParagraph = $('<p class = "card-text tags"></div>')
            // Append paragraph to card body 
            .appendTo(cardBody);
        }
    }
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
        if (data?.hits?.length > 0) {
            // Make sure data is not null 
            // Create posts for all pictures
            makePosts(data?.hits);
        }
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
