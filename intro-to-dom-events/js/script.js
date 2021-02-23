// alert("JS has loaded!")
const btn = document.querySelector("button");
btn.addEventListener('click', function(evt){
  const li = document.createElement('li');
  const commentText = document.querySelector('input');
  li.textContent = commentText.value;
  console.log(li);
  document.querySelector('ul').appendChild(li);
})

document.querySelector('ul')
  .addEventListener('click', handleClick);

function handleClick(evt) {
  console.log(evt);
}

document.querySelector('ul')
    .addEventListener('click', handleClick);