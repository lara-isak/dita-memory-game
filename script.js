/* Game functionality:
  - create library of images
  - assign each image to one of the squares
  - click on the first square
  - clicked square gets saved to selectedOne variable
  - click on the second square
  - clicked square gets saved to the selectedTwo variable
  - div image changes to one of the images from the library
  - if both images are the same, keep them visible
  - else change the background back to the default one
  - when all images are matched the game is over
  - on game restart images are randomly assigned to each of the squares 
*/

// create library of images
var images = [
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/dita_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/elsa1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/olaf1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/rihanna1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/taylor1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/torta1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/dita_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/elsa1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/olaf1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/rihanna1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/taylor1_120x120.jpg?raw=true',
  'https://github.com/lara-isak/dita-memory-game/blob/main/img/torta1_120x120.jpg?raw=true',
];

var card = document.querySelectorAll(".card");
var cardsFrame = document.querySelector("main");

// assigning images to the squares
function addImages() {
  // loop through the divs which represent cards
  for(var i = 0; i < card.length; i++) {
    
    // create a random number between 0 - 11
    var rand = Math.floor(Math.random() * (images.length-1));

    /* 
      - add an image element to each card div
      - image src will be one of the images from images array
      - rand is used to randomize index of an image from array
      - innerHTML method can be used in this case because div element doesn't have any prior children
      - if it did have, the innerHTML() method would replace all prior children with the new child    below, img element
      - if we just need to insert new element(s) without eplacing the existing ones, we can use 
      .insertAdjacentHTML() method
     */
    card[i].innerHTML = "<img src='" + images[rand] + "' alt='img' class='hidden'>";

    // after an image has been added to the card div, we're removing that image from the images field so we don't have images repeating more than 2 times
    images.splice(rand, 1);
  } 
}

addImages();


// reveal image on square click
function imgReveal() {
  cardsFrame.addEventListener('click', e => {
    e.target.firstChild.classList.remove('hidden');
  });
}

imgReveal();



