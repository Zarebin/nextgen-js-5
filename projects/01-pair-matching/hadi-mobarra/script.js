window.onload = function() {

	//Fetch API to get the number of row and column
	async function chartNumberFunc() {
		let chartNumber = await fetch('http://192.168.43.126:8000/playgame')
			.then((response) => response.json()) 
			.then((data) => {
				return data.dimension;
			})
			.catch(err => alert(err));
		return chartNumber;
	}

	// Array of numbers for Game 
	let gameValues = [];
	for (let i = 1; i <= 32; i++) {
		gameValues.push(i);
		gameValues.push(i);
	}

	// shuffle Array
	gameValues.sort(() => 0.5 - Math.random());
	let firstHalf = gameValues.slice(0, gameValues.length/2);
	let secondHalf = gameValues.slice(gameValues.length/2, );
	var card = document.createElement('div');
    card.setAttribute('id', 'game');
    document.getElementById('box').appendChild(card);
    let newHalfTwo = gameValues.slice();

	//Generate Table with 8*8 squares
	async function tableGenerator() {
		let chartNumber = await chartNumberFunc();
		for (var i = 1; i <= chartNumber; i++) {
			var cardItem = document.createElement('div');
			cardItem.setAttribute('class', 'cardColumn');
			cardItem.setAttribute('card-id', i);
			card.appendChild(cardItem);
			for (var j = 0; j < chartNumber; j++) {
				var uniq = 'id' + (new Date()).getTime();
				let arrLastElement = newHalfTwo.pop();
				var cardItemTwo = document.createElement('div');
				cardItemTwo.setAttribute('class', 'cardRow');
				cardItemTwo.setAttribute('card-id', uniq );
				cardItemTwo.setAttribute('id', 'cr');
				cardItemTwo.setAttribute('inner', arrLastElement);
				cardItemTwo.addEventListener('click', cardMatcher);
				cardItemTwo.innerHTML = arrLastElement;
				cardItem.appendChild(cardItemTwo);
			}
		}
	}

	tableGenerator();

	// Change inner Value of each square to not be visible
	setTimeout( () => {
		let divs = document.getElementsByTagName('div'), i = divs.length;
		while(--i) {
			if (divs[i].getAttribute('class') == 'cardRow') {
				divs[i].innerHTML = '?'
			}
		}
	}, 5000);

	let choosenCards = [];
	let choosenId = [];
	let trueChoosenCards = [];
	let cardsInGame = 32;
	
	// Checks if two values of Table are equal or not 
	function cardMatcher() {
		if (choosenCards.length != 2 ) {
			let cardID = this.getAttribute('card-id');
			let inner = this.innerHTML;
			let innerHtml = this.getAttribute('inner');
			if (inner != 'True') {
				choosenCards.push(innerHtml);
				choosenId.push(cardID);
				if (choosenCards.length == 2) {
					setTimeout( function () { 
						let firstCard = choosenCards[0];
						let secondCard = choosenCards[1];
						let id1 = choosenId[0];
						let id2 = choosenId[1];
						if (firstCard == secondCard) {
							trueChoosenCards++;
							//Changes the value of found numbers to its own value.
							let divs2 = document.getElementsByTagName('div'), i = divs2.length;
							while(--i) {
								if (divs2[i].getAttribute('inner') == choosenCards[0]) {
									divs2[i].innerHTML = choosenCards[0];
								}
							}
							document.getElementById('Trues').innerHTML = trueChoosenCards;
							alert('Trueeee :)');
						} else {
							alert('Not True :( ')
						}
						// make arrays empty for the next step
						choosenCards = []
						choosenId = []
						//wining message 
						if (cardsInGame == trueChoosenCards) {
							alert('You Won!');
						}
					}, 300);
				}
			}
		}	
	}
}



















