"use strict";
import "./style.css";

var gameSection = document.querySelector('section');

const getDimention = async () => {
    let data = 
        await fetch('/api')
            .then((response) => response.json())
            .then((data) => data)
            .catch((error) => {
                console.log(error);
                return 4;
            });
    return data;
}

const randomize = (dim) => {
    let cards = [];
    for(let i = 1 ; i <= (dim * dim) /2; i++ ){
        cards.push(i);
        cards.push(i);
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
}
const cardsUI = (dim) => {
    const cards = randomize(dim);
    cards.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('span');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        face.textContent = item;
        card.setAttribute('name', item);
        document.getElementById("cardbox").style.gridTemplateColumns = `repeat(${(dim)}, 8rem)`;
        document.getElementById("cardbox").style.gridTemplateRows = `repeat(${(dim)}, 8rem)`;
        gameSection.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
        
        card.addEventListener('click', (event) => {
            card.classList.toggle('toggleCard');
            checkCards(event, dim);
        })
    })
}
const checkCards = (event, dim) => {
    const clickedCard = event.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    if(flippedCards.length === 2) {
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })
        }
        else {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'),1000);
            })
        }
    }
    if(toggleCard.length === dim * dim) {
        window.alert('You Won !')
        restartGame();
    }
}
const restartGame = async () => {
    var cardbox = document.getElementById('cardbox');
    cardbox.innerHTML = "";
    await StartGame();
}

const StartGame = async () => {
    let data = await getDimention();
    cardsUI(parseInt(data.dim));
}

StartGame();
