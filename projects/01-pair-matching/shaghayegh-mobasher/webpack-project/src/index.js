import './styles.sass';

let rowColNum;
let cardCount;
let score = 0;
let lastCard = -1;
const defaultRowCol = 8;

const delay = function delayWithTimeout(time) {
  return new Promise((resolve) => {
    resolve(setTimeout(resolve, time));
  });
};

const showFrontSide = function showFrontSideOfCard(cardEl) {
  const cardElement = cardEl;
  cardElement.disabled = true;
  cardEl.firstElementChild.style.removeProperty('visibility');
};

const turnCardsBack = function turnTwoCardsBack(cardEl, otherCardEl) {
  const cardElement = cardEl;
  const otherCardElement = otherCardEl;
  cardElement.firstElementChild.style.visibility = 'hidden';
  otherCardElement.firstElementChild.style.visibility = 'hidden';
  cardElement.disabled = false;
  otherCardElement.disabled = false;
};

const getNumber = async function fetchNumberOfRowsAndColumns() {
  const controller = new AbortController();
  const timeout = 4000;
  const id = setTimeout(() => controller.abort(), timeout);
  const num = await fetch('/api', {
    method: 'GET',
    signal: controller.signal,
  })
    .then((req) => req.json())
    .then((req) => req.dimension)
    .catch(() => defaultRowCol);

  clearTimeout(id);
  return num;
};

window.showCard = function cardClicked(cardEl) {
  const cardElement = cardEl;
  showFrontSide(cardElement);
  if (lastCard === -1) {
    lastCard = cardElement.id;
  } else {
    const otherCardElement = document.getElementById(`${lastCard}`);
    const otherValue = otherCardElement.firstElementChild.textContent;
    const thisValue = cardElement.firstElementChild.textContent;
    if (otherValue === thisValue) {
      score += 1;
      document.getElementById('score').innerHTML = score.toString();
      cardElement.style.backgroundColor = 'indianred';
      otherCardElement.style.backgroundColor = 'indianred';
      if (score === cardCount) {
        document.getElementById('win').style.removeProperty('visibility');
      }
    } else {
      document.getElementById('noclick').style.removeProperty('visibility');
      delay(1000).then(() => {
        turnCardsBack(cardElement, otherCardElement);
        document.getElementById('noclick').style.visibility = 'hidden';
      });
    }

    lastCard = -1;
  }
};

const shuffle = function shuffleArray(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const startOver = async function generateNewCards() {
  const cardbox = document.getElementById('card-box');
  cardbox.innerHTML = '<h1 style="color:indianred;">Getting new cards...</h1>';
  lastCard = -1;
  score = 0;
  document.getElementById('win').style.visibility = 'hidden';
  document.getElementById('score').innerHTML = score.toString();
  rowColNum = await getNumber();
  const columns = rowColNum;
  const rows = rowColNum;
  cardCount = parseInt((columns * rows) / 2, 10);
  cardbox.innerHTML = '';
  cardbox.style.gridTemplateColumns = `repeat(${rowColNum}, 1fr)`;
  cardbox.style.gridTemplateRows = `repeat(${rowColNum}, auto)`;
  const cards = shuffle([...Array(cardCount).keys()]
    .map((n) => (n + 1).toString()).flatMap((i) => [i, i]));
  for (let i = 0; i < cards.length; i += 1) {
    document.getElementById('card-box').innerHTML += `<button class="card" onclick="showCard(this)" id="${i}">
    <div class="character" style="visibility: hidden;">${cards[i]}</div>
    </button>`;
  }
};

window.startOver = startOver;
startOver();
