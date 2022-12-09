"use strict";

import "./styles.sass"

let row_col_num;
let card_count;
let score = 0;
let last_card = -1;
const default_row_col = 8;

const delay = function delayWithTimeout(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const showFrontSide = function showFrontSideOfCard(card_el) {
  card_el.disabled = true;
  card_el.firstElementChild.style.removeProperty('visibility');
}

const turnCardsBack = function turnTwoCardsBack(card_el, other_card_el) {
  card_el.firstElementChild.style.visibility = "hidden";
  other_card_el.firstElementChild.style.visibility = "hidden";
  card_el.disabled = false;
  other_card_el.disabled = false;
}

const getNumber = async function fetchNumberOfRowsAndColumns() {
	const controller = new AbortController();
	let timeout = 4000;
  const id = setTimeout(() => controller.abort(), timeout);
	let num = await fetch('http://192.168.43.20:8000/playgame', {
		method:"GET", 
		signal: controller.signal
		})
	.then(req => req.json())
  .then(req => {
	    return req.dimension;
	    })
	.catch(err => {
		console.log(err);
		return default_row_col;
	  })
  
	clearTimeout(id);
	return num;
}

window.showCard = function cardClicked(card_el) {
  showFrontSide(card_el);
  if(last_card == -1) {
    last_card = card_el.id;
  } else {
    let other_card_el = document.getElementById(`${last_card}`);
    let other_value = other_card_el.firstElementChild.textContent;
    let this_value = card_el.firstElementChild.textContent;
    if(other_value == this_value) {
      score += 1;
      document.getElementById("score").innerHTML = score.toString();
      card_el.style.backgroundColor = "indianred";
      other_card_el.style.backgroundColor = "indianred";
      if (score == card_count) {
        document.getElementById("win").style.removeProperty('visibility');
      }
    } else {
      document.getElementById("noclick").style.removeProperty('visibility');
      delay(1000).then(() => {
        turnCardsBack(card_el, other_card_el);
        document.getElementById("noclick").style.visibility = "hidden";
      });
    }

    last_card = -1;
  }
}

const shuffle = function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array
}

const startOver = async function generateNewCards() {
	let cardbox = document.getElementById("card-box");
  cardbox.innerHTML = '<h1 style="color:indianred;">Getting new cards...</h1>';
  last_card = -1;
  score = 0;
  document.getElementById("win").style.visibility = "hidden";
  document.getElementById("score").innerHTML = score.toString();
	row_col_num = await getNumber();
  let columns = row_col_num;
  let rows = row_col_num;
  card_count = parseInt(columns * rows / 2);
  cardbox.innerHTML = "";
  cardbox.style.gridTemplateColumns = `repeat(${row_col_num}, 1fr)`;
  cardbox.style.gridTemplateRows = `repeat(${row_col_num}, auto)`;
  let cards = shuffle([...Array(card_count).keys()].map(n => (n + 1).toString()).flatMap(i => [i, i]));
  for (let i of Array(cards.length).keys()) {
    document.getElementById("card-box").innerHTML += `<button class="card" onclick="showCard(this)" id="${i}">
    <div class="character" style="visibility: hidden;">${cards[i]}</div>
    </button>`;
  }
}

window.startOver = startOver;
startOver();
