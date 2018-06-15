var button = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var button5 = document.querySelector('.button5');
var button6 = document.querySelector('.button6');

button.addEventListener('click', print1);
button2.addEventListener('click', print2);
button3.addEventListener('click', print3);
button4.addEventListener('click', print4);
button5.addEventListener('click', print5);
button6.addEventListener('click', print6);

function print1() {

    console.log("button 1 clicked");

    var image = "https://i5.walmartimages.com/asr/d9ca8a3e-7155-42cd-b9cf-b77f14a25718_1.52be72f9444f75ad5b8d36fde3455cfb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF";

    var request = new XMLHttpRequest();
    n = 1;

    var url = "/cart/add/" + n;

    request.open("POST", url);

    var requestBody = JSON.stringify({
        photo: image,

    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);

}

function print2() {

    console.log("button 2 clicked");
    var image = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    var request = new XMLHttpRequest();
    n = 2;

    var url = "/cart/add/" + n;
    request.open("POST", url);
    var requestBody = JSON.stringify({
        photo: image,
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
}

function print3() {

    console.log("button 3 clicked");
    var image = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    var request = new XMLHttpRequest();
    n = 3;

    var url = "/cart/add/" + n;
    request.open("POST", url);
    var requestBody = JSON.stringify({
        photo: image,
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
}
function print4() {

    console.log("button 4 clicked");
    var image = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    var request = new XMLHttpRequest();
    n = 4;

    var url = "/cart/add/" + n;
    request.open("POST", url);
    var requestBody = JSON.stringify({
        photo: image,
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
}
function print5() {

    console.log("button 5 clicked");
    var image = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    var request = new XMLHttpRequest();
    n = 5;

    var url = "/cart/add/" + n;
    request.open("POST", url);
    var requestBody = JSON.stringify({
        photo: image,
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
}
function print6() {

    console.log("button 3 clicked");
    var image = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    var request = new XMLHttpRequest();
    n = 6;

    var url = "/cart/add/" + n;
    request.open("POST", url);
    var requestBody = JSON.stringify({
        photo: image,
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
}






/*


cart.addEventListener('click',openModal);

function openModal()
{
console.log("button pressed");
modal.style.display = 'block';
modal.style.backgroundColor = 'rgba(0,0,0,0.85)';

}


document.getElementById("put-in-cart").addEventListener("click", AddingCart);





function handleModalAcceptClick() {

  var photoURL = document.getElementById('photo-url-input').value.trim();
  var caption = document.getElementById('photo-caption-input').value.trim();



    var request = new XMLHttpRequest();
    var personID = getPersonIdFromURL();
    var url = "/cart";
    request.open("POST", url);

    var requestBody = JSON.stringify({
      photoURL: photoURL,
      caption: caption
    });

    request.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var photoCardTemplate = Handlebars.templates.photoCard;
        var newPhotoCardHTML = photoCardTemplate({
          photoURL: photoURL,
          caption: caption
        });
        var photoCardContainer = document.querySelector('.photo-card-container');
        photoCardContainer.insertAdjacentHTML('beforeend', newPhotoCardHTML);
      } else {
        alert("Error storing photo: " + event.target.response);
      }
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);

    hideModal();

  }

}


function showModal() {

  var modal = document.getElementById('add-photo-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');

  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');

}
*/