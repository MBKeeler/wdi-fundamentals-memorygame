console.log("Up and running!");

var cards =[
  {
      rank: "Queen",
      suite: "hearts",
      cardImage: "images/queen-of-hearts.png"
  },
  {
      rank: "Queen",
      suite: "diamonds",
      cardImage: "images/queen-of-diamonds.png"
  },
  {
      rank: "King",
      suite: "hearts",
      cardImage:"images/king-of-hearts.png"
  },
  {
      rank: "King",
      suite: "diamonds",
      cardImage: "images/king-of-diamonds.png"
  }
];


var cardsInPlay = [];

// Had to look up why location.reload had to be wrapped in function. no clue.
var gameReload = function () {
  window.location.reload(window.location);
}

var checkForMatch = function() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
    alert("You found a match!");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry, try again.");
  }

};

var resetBoard = function() {


    var rButton = document.getElementById('resetButton');
    rButton.setAttribute('src', 'images/reset.png');
    rButton.addEventListener('click', gameReload);

 };

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
    resetBoard();
  }

  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log('suite: ' + cards[cardId].suite);
};

//var flipCard= function() {

//  var cardId = this.getAttribute('data-id');
//
//  this.setAttribute('src', cards[cardId].cardImage);

//  if (cardsInPlay.length === 2) checkForMatch();

//  console.log("User flipped " + cards[cardId].rank);
//  console.log(cards[cardId].suite);
//  console.log(cards[cardId].cardImage);
// };

var createBoard = function() {
  for (i = 0; i < cards.length; ++i) {
  var cardElement = document.createElement('img');

  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  cardElement.addEventListener('click', flipCard);

  document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();
//resetBoard();
