"use strict";

var row_col_num;
var card_count;
var score = 0;
var last_card = -1;

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function turn_card_front(card_el){
    card_el.disabled = true;
    card_el.firstElementChild.style.removeProperty('visibility');
}

function turn_cards_back(card_el, other_card_el){
    card_el.firstElementChild.style.visibility = "hidden";
    other_card_el.firstElementChild.style.visibility = "hidden";
    card_el.disabled = false;
    other_card_el.disabled = false;
}



async function get_number(){
	const controller = new AbortController();
	let timeout = 4000;
  	const id = setTimeout(() => controller.abort(), timeout);
  	
	let num = await fetch('http://192.168.43.20:8000/playgame', 
		{
		method:"GET", 
		signal: controller.signal
		}
	)
	.then(req => req.json())
	.then(req => {
	    console.log(req);
	    return req.dimension;	
	    })
	.catch(err => {
		console.log(err);
		return 8;
	})
	clearTimeout(id);
	return num;
}

function showCard(card_el){
    turn_card_front(card_el);
    if(last_card == -1){
        last_card = card_el.id
    }
    else{
        let other_card_el = document.getElementById(`${last_card}`);
        let other_value = other_card_el.firstElementChild.textContent;
        let this_value = card_el.firstElementChild.textContent;
        if(other_value == this_value){
        	score += 1;
            document.getElementById("score").innerHTML = score.toString();
            card_el.style.backgroundColor = "indianred";
            other_card_el.style.backgroundColor = "indianred";
            if (score == card_count){
                document.getElementById("win").style.removeProperty('visibility');
            }
        }
        else{
            document.getElementById("noclick").style.removeProperty('visibility');
            delay(1000).then(() => 
                {
                    turn_cards_back(card_el, other_card_el);
                    document.getElementById("noclick").style.visibility = "hidden";
                }
            );
        }
        last_card = -1;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

async function startOver(){
	let cardbox = document.getElementById("card-box");
    cardbox.innerHTML = '<h1 style="color:indianred;">Getting new cards...</h1>';
    last_card = -1;
    score = 0;
    document.getElementById("win").style.visibility = "hidden";
	row_col_num = await get_number();
    let columns = row_col_num;
    let rows = row_col_num;
    card_count = parseInt(columns * rows / 2);
    document.getElementById("score").innerHTML = score.toString();
    cardbox.innerHTML = "";
    cardbox.style.gridTemplateColumns = `repeat(${row_col_num}, 1fr)`;
    cardbox.style.gridTemplateRows = `repeat(${row_col_num}, auto)`;
    let cards = shuffleArray([...Array(card_count).keys()].map(n => (n+1).toString()).flatMap(i => [i,i]));
    for(let i of Array(cards.length).keys()){
	document.getElementById("card-box").innerHTML += `<button class="card" onclick="showCard(this)" id="${i}">
	<div class="character" style="visibility: hidden;">${cards[i]}</div>
	</button>`;
    }
}

startOver()
