import './style.scss';

// define variables
const boardContainer = document.querySelector('.board-container');
const board = document.querySelector('.board');
const win = document.querySelector('.win');
const state = { flippedCards: 0 };

// randomimize the number of cards
function randommize(a) {
  const array = [...a];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const random = Math.floor(Math.random() * (i + 1));
    const currentArray = array[i];
    array[i] = array[random];
    array[random] = currentArray;
  }

  return array;
}

// pick the random of
function pickRandom(a, items) {
  const array = [...a];
  const randomPicks = [];

  for (let i = 0; i < items; i += 1) {
    const randomIndex = Math.floor(Math.random() * array.length);

    randomPicks.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return randomPicks;
}
// fetch API
async function applyNumber() {
  const abortApi = new AbortController();
  const { signal } = abortApi;
  const getApiTimer = setTimeout(() => abortApi.abort(), 3000);
  const dimension = await fetch('http://192.168.43.20:8000/dimension', signal)
    .then((response) => response.json())
    .then((response) => response.dimension)

  // if the response is faild the dimension is 8
    .catch(() => 8);
  clearTimeout(getApiTimer);
  return dimension;
}
// create the board game (:  column & row of game board  )
async function createGame() {
  // const dimensions = board.getAttribute('data-dimension');
  const dimensions = await applyNumber();
  // define numbers (card items )
  const itemArray = [...Array(dimensions * dimensions).keys()];

  const picks = pickRandom(itemArray, (dimensions * dimensions) / 2);
  const items = randommize([...picks, ...picks]);
  const cards = `
        <div class="board" style="grid-template-columns: repeat(${dimensions}, auto)">
            ${items.map((item) => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${item}</div>
                </div>
            `).join('')}
       </div>
    `;

  const parser = new DOMParser().parseFromString(cards, 'text/html');

  board.replaceWith(parser.querySelector('.board'));
}
function flipBackCards() {
  document.querySelectorAll('.card:not(.matched)').forEach((card) => {
    card.classList.remove('flipped');
  });

  state.flippedCards = 0;
}

function flipCard(card) {
  state.flippedCards += 1;

  if (state.flippedCards <= 2) {
    card.classList.add('flipped');
  }

  if (state.flippedCards === 2) {
    const flippedCards = document.querySelectorAll('.flipped:not(.matched)');

    if (flippedCards[0].innerText === flippedCards[1].innerText) {
      flippedCards[0].classList.add('matched');
      flippedCards[1].classList.add('matched');
    }

    setTimeout(() => {
      flipBackCards();
    }, 1000);
  }

  // If there are no more cards that we can flip, we won the game
  if (!document.querySelectorAll('.card:not(.flipped)').length) {
    setTimeout(() => {
      boardContainer.classList.add('flipped');
      win.innerHTML = `
                <span class="win-text">
                 Congrats :)))<br />
                </span>
            `;

      clearInterval(state.loop);
    }, 1000);
  }
}

function attachEventListeners() {
  document.addEventListener('click', (event) => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;

    if (eventTarget.className.includes('card') && !eventParent.className.includes('flipped')) {
      flipCard(eventParent);
    }
  });
}

createGame();
attachEventListeners();
