let resetBtn = document.querySelector('.btn');
// console.log(resetBtn);

document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [{
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'red',
            img: 'images/red.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'green',
            img: 'images/green.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'yellow',
            img: 'images/yellow.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'black',
            img: 'images/black.png'
        },
        {
            name: 'black',
            img: 'images/black.png'
        },
        {
            name: 'brown',
            img: 'images/brown.png'
        },
        {
            name: 'brown',
            img: 'images/brown.png'
        },
        {
            name: 'lightblue',
            img: 'images/lightblue.png'
        },
        {
            name: 'lightblue',
            img: 'images/lightblue.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'pink',
            img: 'images/pink.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'orange',
            img: 'images/orange.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'purple',
            img: 'images/purple.png'
        },
        {
            name: 'cerem',
            img: 'images/cerem.png'
        },
        {
            name: 'cerem',
            img: 'images/cerem.png'
        },
        {
            name: 'lightgreen',
            img: 'images/lightgreen.png'
        },
        {
            name: 'lightgreen',
            img: 'images/lightgreen.png'
        },
        {
            name: 'bluegreen',
            img: 'images/bluegreen.png'
        },
        {
            name: 'bluegreen',
            img: 'images/bluegreen.png'
        },
        {
            name: 'navyblue',
            img: 'images/navyblue.png'
        },
        {
            name: 'navyblue',
            img: 'images/navyblue.png'
        },
        {
            name: 'grey',
            img: 'images/grey.png'
        },
        {
            name: 'grey',
            img: 'images/grey.png'
        },
        {
            name: 'okr',
            img: 'images/okr.png'
        },
        {
            name: 'okr',
            img: 'images/okr.png'
        },
        {
            name: 'darkgrey',
            img: 'images/darkgrey.png'
        },
        {
            name: 'darkgrey',
            img: 'images/darkgrey.png'
        },
        {
            name: 'darkpurple',
            img: 'images/darkpurple.png'
        },
        {
            name: 'darkpurple',
            img: 'images/darkpurple.png'
        },
        {
            name: 'lightcoral',
            img: 'images/lightcoral.png'
        },
        {
            name: 'lightcoral',
            img: 'images/lightcoral.png'
        },
        {
            name: 'zereshki',
            img: 'images/zereshki.png'
        },
        {
            name: 'zereshki',
            img: 'images/zereshki.png'
        },
        {
            name: 'sabzlagani',
            img: 'images/sabzlagani.png'
        },
        {
            name: 'sabzlagani',
            img: 'images/sabzlagani.png'
        },
        {
            name: 'khaki',
            img: 'images/khaki.png'
        },
        {
            name: 'khaki',
            img: 'images/khaki.png'
        },
        {
            name: 'olivi',
            img: 'images/olivi.png'
        },
        {
            name: 'olivi',
            img: 'images/olivi.png'
        },
        {
            name: 'phiroze',
            img: 'images/phiroze.png'
        },
        {
            name: 'phiroze',
            img: 'images/phiroze.png'
        },
        {
            name: 'golbehi',
            img: 'images/golbehi.png'
        },
        {
            name: 'golbehi',
            img: 'images/golbehi.png'
        },
        {
            name: 'purple2',
            img: 'images/purple2.png'
        },
        {
            name: 'purple2',
            img: 'images/purple2.png'
        },
        {
            name: 'pink2',
            img: 'images/pink2.png'
        },
        {
            name: 'pink2',
            img: 'images/pink2.png'
        },
        {
            name: 'brown2',
            img: 'images/brown2.png'
        },
        {
            name: 'brown2',
            img: 'images/brown2.png'
        },
        {
            name: 'purple3',
            img: 'images/purple3.png'
        },

        {
            name: 'purple3',
            img: 'images/purple3.png'
        },
        {
            name: 'green3',
            img: 'images/green3.png'
        },
        {
            name: 'green3',
            img: 'images/green3.png'
        },
        {
            name: 'redyellow',
            img: 'images/redyellow.png'
        },
        {
            name: 'redyellow',
            img: 'images/redyellow.png'
        },
        {
            name: 'redgreen',
            img: 'images/redgreen.png'
        }, {
            name: 'redgreen',
            img: 'images/redgreen.png'
        },

    ];

    cardArray.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.style.width = '50px';
            card.style.height = '50px';
            card.style.padding = '10px';
            card.setAttribute('src', 'images/questionMark.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);

        }

    }



    //CHECK FOR MATCHES 
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert('You found a match ');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/questionMark.png');
            cards[optionTwoId].setAttribute('src', 'images/questionMark.png');
            // alert('sorry , try again ')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'تبریک میگم شما برنده شدید  :)'
        }
    }


    //FLIP YOUR 
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }
    createBoard();
    resetBtn.addEventListener('click', () => {


        cardsChosen.length = 0;
        cardsChosenId.length = 0;
        cardsWon.length = 0;
        // console.log(cardsWon.length)
        resultDisplay.textContent = cardsWon.length ;
        // if(resultDisplay.textContent == ) {
        //     cardsWon.length = 0;
        // }
        // checkForMatch();
        var cards = document.querySelectorAll('img');
        console.log(cards.length);
        for (let i in cards) {
            console.log(cardsWon.length);
            let card = cards[i];
            card.setAttribute('src', 'images/questionMark.png')

        }



    })

})