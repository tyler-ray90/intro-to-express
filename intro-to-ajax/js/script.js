// State Variable 

let movieData;

// Cached element references - selected DOM elements 

const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $input = $('input[type="text"]');

// event listeners
$('form').on('submit', handleSubmit);


// functions
function handleSubmit(evt) {
    // Prevents to stop refresh browser
    evt.preventDefault();

    const term = $input.val();
    
    
    $.ajax("http://www.omdbapi.com/?apikey=5ceecba4&t=" + term)
    .then(function(data) {
        console.log('Movie Data ', data);
        movieData = data;
        movieData = data;
    }, function(error) {
        console.log('Error ', error);
    });
    
    
}

function render() {
    if(movieData) {
    $title.text(movieData.Title);
    $year.text(movieData.Year);
    }
}