const cloneButton = document.getElementById('btn');
const deleteButton = document.getElementById('delete');
const titleButton = document.getElementById('title');


cloneButton.addEventListener('click', function(){
  const clonedCard = document.querySelector('.card').cloneNode(true);
  document.body.appendChild(clonedCard);
});

deleteButton.addEventListener('click', function(){

})
