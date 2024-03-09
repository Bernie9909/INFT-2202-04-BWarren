/**
 * Bernie Warren 
 * 03-05-24 
 * ICE7 Pixabay API call demonstration 
 */
console.log('pixabay.js loaded');

// API Key for Pixabay
const PIXABAY_API_KEY = '42719380-662aa52e23b2caef87a34807f';
// URL for Pixbay request
const PIXABAY_URL = 'https://pixabay.com/api/?key=<API_KEY>';
// Constant for image count
const IMAGE_COUNT = 30;

/**
 * makePosts
 * Creates posts for pictures.
 */
const makePosts = (pictureData) => {
    const blogColumn = $('.blog-column');
    if (pictureData?.length > 0) {
        for (let i = 0; i < IMAGE_COUNT; i++) {
            let id = i;
            let pixabayPicture = pictureData[i];
            let card = $('<div>').addClass("card")
            .attr("id", "photo_" + id)
            .appendTo(blogColumn);

            let pic = $('<img>')
            .attr('id', "img-"+1)
            .attr("src", pixabayPicture.webformatURL)
            .attr("alt", pixabayPicture.tags)
            .addClass('card-img-top')
            .appendTo(card);
            
            let cardBody = $('<div>').addClass("card-body")
            .appendTo(card);
            
            let cardParagraph = $('<p>').addClass("card-text").text(pixabayPicture.tags)
            .appendTo(cardBody);
        }
    }
};

/**
 * getPictures
 * retrieves the pictures from Pixabay API
 */
const getPictures = () => {
    // Get images matching the following: 30 per page, query value of cars, all horizontal ONLY (no vert), type photo only. 
    const url = `${PIXABAY_URL.replace('<API_KEY>', PIXABAY_API_KEY)}&q=cars&orientation=horizontal&image_type=photo&per_page=${IMAGE_COUNT}`;
    // use fetch to get the pictures from the API
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        if (data?.hits?.length > 0) {
            // Create posts for all pictures
            makePosts(data.hits);
        }
    })
    .catch((err) => {
        // log to console 
        console.log(err);
    });
};

getPictures();
