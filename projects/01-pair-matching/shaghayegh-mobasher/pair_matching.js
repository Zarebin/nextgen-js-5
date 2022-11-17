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


function showCard(card_el){
    turn_card_front(card_el);
    state_el = document.getElementById("state");
    state = Number(state_el.textContent);
    if(state == -1){
        state_el.innerHTML = card_el.id.toString()
    }
    else{
        other_card_el = document.getElementById(`${state}`);
        other_value = other_card_el.firstElementChild.textContent;
        this_value = card_el.firstElementChild.textContent;
        if(other_value == this_value){
            document.getElementById("score").innerHTML = 1 + parseInt(document.getElementById("score").textContent);
            card_el.style.backgroundColor = "indianred";
            other_card_el.style.backgroundColor = "indianred";
            if (document.getElementById("score").innerHTML == "32"){
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
        state_el.innerHTML = "-1";
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function startOver(){
    columns = 8; //style of the cards is hardcoded with 8 columns, so other numbers for columns won't change the number of columns displayed.
    rows = 8;
    document.getElementById("state").innerHTML = "-1";
    document.getElementById("score").innerHTML = "0";
    document.getElementById("card-box").innerHTML = "";
    document.getElementById("win").style.visibility = "hidden";
    cards = shuffleArray([...Array(columns * rows / 2).keys()].map(n => (n+1).toString()).flatMap(i => [i,i]))
    for(let i of Array(columns * rows).keys()){
        document.getElementById("card-box").innerHTML += `<button class="card" onclick="showCard(this)" id="${i}">
        <div class="character" style="visibility: hidden;">${cards[i]}</div>
        </button>`;
    }
}

startOver()