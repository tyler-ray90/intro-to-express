// Selecting a DOM element by ID
const titleEl = document.getElementById('title');

// console.log(titleEl);

// Select a DOM element by it's CSS selector 
const otherTitleElSel = document.querySelector('#title-top');

// console.log(otherTitleEl);

const pEl = document.querySelector('.cool');

// console.log(pEl);

// changing the content of our html elements 

// element.innerText

// pEl.innerText = 'Hello World'

// element.innerHTML 

// pEl.innerHTML = 'Comments for <strong>Today</strange>'

// Changing the style of an element 

// element.style

pEl.style.textAlign = 'center';

const aEl = document.querySelector('a');
console.log(aEl);

aEl.setAttribute('href', 'https://www.google.com');

// Select mulitple elements with querySelctorAll

const commentEls = document.querySelectorAll('.comment');

console.log(commentEls);

commentEls.forEach(function(comment) {
    comment.style.color = "rebeccapurple";
});

