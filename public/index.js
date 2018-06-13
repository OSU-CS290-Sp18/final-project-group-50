var cart = document.getElementById('shopping-cart-button');
var modal = document.getElementById('create-twit-modal');


cart.addEventListener('click',openModal);

function openModal()
{
console.log("button pressed");
modal.style.display = 'block';
modal.style.backgroundColor = 'rgba(0,0,0,0.85)';

}
