import './style.scss';


// Fetch API to get the number of row and column
async function chartNumberFunc() {
  const chartNumber = await fetch('/api')
		.then((response) => {
			response.json();
		//	console.log('res: ', response);
		} )
    .then((data) => console.log(data.dimension))
    .catch((err) => err);
  return chartNumber;
}

chartNumberFunc();

// Array of numbers for Game
const gameValues = [];
for (let i = 1; i <= 32; i += 1) {
  gameValues.push(i);
  gameValues.push(i);
}

// shuffle Array
gameValues.sort(() => 0.5 - Math.random());
const card = document.createElement('div');
card.setAttribute('id', 'game');
document.getElementById('box').appendChild(card);
const newHalfTwo = gameValues.slice();

let choosenCards = [];
let choosenId = [];
let trueChoosenCards = [];
// const cardsInGame = 32;

// Checks if two values of Table are equal or not
function cardMatcher() {
  if (choosenCards.length !== 2) {
    const cardID = this.getAttribute('card-id');
    const inner = this.innerHTML;
    const innerHtml = this.getAttribute('inner');
    if (inner !== 'True') {
      choosenCards.push(innerHtml);
      choosenId.push(cardID);
      if (choosenCards.length === 2) {
        setTimeout(() => {
          const firstCard = choosenCards[0];
          const secondCard = choosenCards[1];
          if (firstCard === secondCard) {
            trueChoosenCards += trueChoosenCards;
            // Changes the value of found numbers to its own value.
            const divs2 = document.getElementsByTagName('div');
            let i = divs2.length;
            while (i >= 0) {
              i -= 1;
              if (divs2[i].getAttribute('inner') === choosenCards[0]) {
                divs2[i].innerHTML = firstCard;
              }
            }
            document.getElementById('Trues').innerHTML = trueChoosenCards;
          }
          // make arrays empty for the next step
          choosenCards = [];
          choosenId = [];
          // wining message
          // if (cardsInGame === trueChoosenCards) {
          //  alert('You Won!');
          // }
        }, 300);
      }
    }
  }
}

// Generate Table with 8*8 squares
async function tableGenerator() {
  const chartNumber = await chartNumberFunc();
  // i <= chartNumber
  for (let i = 1; i <= 8; i += 1) {
    const cardItem = document.createElement('div');
    cardItem.setAttribute('class', 'cardColumn');
    cardItem.setAttribute('card-id', i);
    card.appendChild(cardItem);
    for (let j = 0; j < 8; j += 1) {
      const uniq = `id${(new Date()).getTime()}`;
      const arrLastElement = newHalfTwo.pop();
      const cardItemTwo = document.createElement('div');
      cardItemTwo.setAttribute('class', 'cardRow');
      cardItemTwo.setAttribute('card-id', uniq);
      cardItemTwo.setAttribute('id', 'cr');
      cardItemTwo.setAttribute('inner', arrLastElement);
      cardItemTwo.addEventListener('click', cardMatcher);
      cardItemTwo.innerHTML = arrLastElement;
      cardItem.appendChild(cardItemTwo);
    }
  }
}

tableGenerator();

// Change inner Value of each square to not be visible
setTimeout(() => {
  const divs = document.getElementsByTagName('div'); let
    i = divs.length;
  while (--i) {
   // i -= 1;
    if (divs[i].getAttribute('class') === 'cardRow') {
      divs[i].innerHTML = '?';
    }
  }
}, 5000);






