"use strict";

var gameSection = document.querySelector('section');
var dim = 8;

const getDimention = async () => {
    let dimention = 
        fetch('/api/playgame',{method:'GET'})
            .then(response => response.json())
            .then(response => {
                return response.dimension;
            })
            .catch(error => {
                console.log(error);
            });
    return dimention;
}
const cardData = () => {
        let data = [
            {src: 'images/1.jpg', name: '1'},
            {src: 'images/2.jpg', name: '2'},
            {src: 'images/3.jpg', name: '3'},
            {src: 'images/4.jpg', name: '4'},
            {src: 'images/5.jpg', name: '5'},
            {src: 'images/6.jpg', name: '6'},
            {src: 'images/7.jpg', name: '7'},
            {src: 'images/8.jpg', name: '8'},
        ];
        return data;
}

const randomize = () => {
    let cards = [];
    let data = cardData();
    // dim = getDimention();
    data.slice(0, 8);
    data.forEach(item => {
        cards.push(item);
        cards.push(item);
    });
    cards.sort(() => Math.random() - 0.5);
    return cards;
}
const cardsUI = () => {
    const cards = randomize();
    cards.forEach(item => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        face.src = item.src;
        card.setAttribute('name', item.name);
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
    const toggleCard = document.querySelectorAll('.toggleCard')
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
    if(toggleCard.length === dim*2) {
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