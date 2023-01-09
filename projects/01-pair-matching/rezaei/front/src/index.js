"use strict";
import "./style.css";

var gameSection = document.querySelector('section');
var dim = 4;

const getDimention = () => {
    let dimention = 
        fetch('/api',{method:'GET'})
            .then(response => response.json())
            .then(response => {
                return response.dimension;
            })
            .catch(error => {
                console.log(error);
                return 4;
            });
    return dimention;
}

const randomize = () => {
    let cards = [];
    dim = getDimention();
    for(let i = 1 ; i <= (dim * dim) /2; i++ ){
        cards.push(i);
        cards.push(i);
    }
    cards.sort(() => Math.random() - 0.5);
    return cards;
}
const cardsUI = () => {
    const cards = randomize();
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
            checkCards(event);
        })
    })
}
const checkCards = (event) => {
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
const restartGame = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    gameSection.style.pointerEvents = 'none'
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';
        faces[index].src = item.src;
        cards[index].setAttribute('name', item.name);
        gameSection.style.pointerEvents = 'all';
        },1500);
    })
}
cardsUI();
