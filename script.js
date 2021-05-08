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
  
];

var card = document.querySelectorAll(".card");
for(var i = 0; i < card.length; i++) {
  card[i].addEventListener('click', event => {
    console.log("I've been clicked!");
  }); 
}