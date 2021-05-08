/* Game functionality:
  - create library of images
  - assign each image to one of the squares
  - click on the first square
  - clicked square gets saved to selectedOne variable
  - div image changes to one of the images from the library
  - click on the second square
  - clicked square gets saved to the selectedTwo variable
  - div image changes to one of the images from the library
  - if both images are the same, keep them visible
  - else change the background back to the default one
  - when all images are matched the game is over
  - on game restart images are randomly assigned to each of the squares 
*/

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
for(var i = 0; i < card.length; i++) {
  // <img src="" alt="">
  card[i].innerHTML = "<img src='" + images[i] + "' alt='img' class='hidden'>";
  
  card[i].addEventListener('click', e => {
    console.log(e.target);
  }); 
}

