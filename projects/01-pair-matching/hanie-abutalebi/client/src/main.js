import './style.scss';

const selectClass = {
  board: document.querySelector('.board'),
  board_box: document.querySelector('.board-box'),
  win: document.querySelector('.win'),
};
let flippedCards = 0;
// let dimNumber;

// fetch('/api')
//   .then((response) => response.json()).then((data) => {
//     dimNumber = data.dimension;
//     console.log(dimNumber);
//     setEventListeners();
//     generateGame();
//   });
const shuffle = (array) => {
  const newArray = [...array];
  for (let index = newArray.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const original = newArray[index];
    newArray[index] = newArray[randomIndex];
    newArray[randomIndex] = original;
  }
  return newArray;
};
const selectRandom = (array, items) => {
  const newArray = [...array];
  const randomPicks = [];

  for (let index = 0; index < items; index += 1) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    randomPicks.push(newArray[randomIndex]);
    newArray.splice(randomIndex, 1);
  }
  return randomPicks;
};

const generateGame = (dimNumber) => {
//   const; dimensions = selectClass.board.getAttribute('data-dimension');
//   if (dimensions % 2 !== 0) {
//   alert('The dimension should be an even number.Please check.');
//   }
  const emojis = ['🌂', '🧶', '🎓', '🐹', '🐳', '🌴', '🦦', '🏹', '🎹', '🪐'];
  const picks = selectRandom(emojis, (dimNumber * dimNumber) / 2);
  const items = shuffle([...picks, ...picks]);
  selectClass.board_box.innerHTML = `
    <div class="board" style="grid-template-columns: repeat(${dimNumber}, auto)">
          ${items
    .map(
      (item) => `
    <div class="card">
      <div class="card-front"></div>
      <div class="card-back">${item}</div>
    </div>`,
    ).join('')}
     </div>
  `;
};
//  flipback card
const flipBack = () => {
  document.querySelectorAll('.card:not(.equal)').forEach((card) => {
    card.classList.remove('flipped');
  });
  flippedCards = 0;
};

//  win function
const win = () => {
  selectClass.win.innerHTML = `
            <span class="win-inner">
              congratulations ! <br /> You won! <br />
            </span>
        `;
};

const flipCard = (card) => {
  flippedCards += 1;
  // less than 2 card fliped
  if (flippedCards <= 2) {
    card.classList.add('flipped');
  }
  //  exactly 2 card fliped
  if (flippedCards === 2) {
    flippedCards = document.querySelectorAll('.flipped:not(.equal)');

    if (flippedCards[0].innerText === flippedCards[1].innerText) {
      flippedCards[0].classList.add('equal');
      flippedCards[1].classList.add('equal');
    }
    setTimeout(() => {
      flipBack();
    }, 1000);
  }
  // all cards fliped
  if (!document.querySelectorAll('.card:not(.flipped)').length) {
    setTimeout(() => {
      win();
    }, 500);
  }
};
// event listener and restart button
const setEventListeners = (dimNumber) => {
  document.addEventListener('click', (event) => {
    if (event.target.className.includes('card-front')) {
      flipCard(event.target.parentElement);
    } else if (event.target.className.includes('restart')) {
      setTimeout(() => {
        window.location.reload();
      }, 10);
      generateGame(dimNumber);
      setEventListeners(dimNumber);
    }
  });
};
// generateGame();
// setEventListeners();
async function getNumber() {
  await fetch('/api')
    .then((response) => response.json())
    .then((data) => {
      generateGame(data.dimension);
      setEventListeners(data.dimension);
    })
    .catch((err) => err);
}
getNumber();
