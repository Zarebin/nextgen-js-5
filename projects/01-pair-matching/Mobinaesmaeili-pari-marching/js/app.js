$(function(){

	let isStarting; 
	let doCompare;
	let paused;
	let turns;
	let stars; 
	let activeCards; 
	let time;
	let timer; 


	const symbols =
	[
		'female',
		'clock',
		'snowflake',
		'star',
		'heart',
		'tree',
		'music',
		'search'
	];

	let cards = symbols;

	
	cards.push(...symbols);

	
	function shuffle(array)
	{
		let currentIndex = array.length, temporaryValue, randomIndex;

		while (currentIndex !== 0)
		{
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}


	function newGame()
	{
		cards = shuffle(cards); 

		isStarting = true;
		doCompare = false;
		turns = 0;
		stars = 3;
		time = 0;
		paused = false;
		activeCards = [];

		clearInterval(timer);
		$('.timer').html(time);

		setTurns(false);
		setStars(false);
		$('#game').html('');
		for(let card of cards)
		{
			$('#game').append(
				`<div class="cell">
					<div class="memory-card" name="${card}">
						<figure class="front"></figure>
						<figure class="back"><i class="fa fa-${card}"></i></figure>
					</div>
				</div>`
			);
		}

		resizeCards(); 
		setTimeout(function()
		{
			$('.memory-card').addClass('flipped');
			setTimeout(function()
			{
				$('.memory-card').removeClass('flipped');
				isStarting = false;
				startTimer();
			}, 3000);
		}, 500);
	}


	function setStars(decrement)
	{
		if(decrement)
			stars--;

		$('.rating').html('');

		//Full stars
		// for(let i = 0; i < stars; i++)
		// {
		// 	$('.rating').append('<i class="fa fa-star">');
		// }

		// Empty stars
	// 	let x = 3 - stars;

	// 	if(x > 0)
	// 	{
	// 		for(let i = 0; i < x; i++)
	// 		{
	// 			$('.rating').append('<i class="fa fa-star-o">');
	// 		}
	// 	}
	 }

	function setTurns(increment)
	{
		if(increment)
			turns++;

		$('.turns').html(turns);
		checkScore(); 
	}

	function startTimer()
	{
		timer = setInterval(function()
		{
			if(!paused)
			{
				time++;
				$('.timer').html(time);
			}
		}, 1000);
	}

	function checkScore()
	{

		if(turns === 16 || turns === 21)
			setStars(true);
	}

	function checkWin()
	{
		if($('.matched').length === 16)
		{
			clearInterval(timer);
			$('.modal').modal('show');
		}
	}


	function flipCard(card, position)
	{
		switch(position)
		{
			case 'up':
				card.addClass('flipped');
				checkCard(card);
			break;
			case 'down':
				card.effect('shake', 400, function()
				{
					setTimeout(function()
					{
						card.removeClass('flipped');
					}, 600);
				});
			break;
			case 'matched':
				setTimeout(function()
				{
					card.find('.back').html('<i class="fa fa-check"></i>'); // Change symbol to checkmark
					card.toggleClass('flipped matched');
					checkWin();
				}, 400);
			break;
		}
	}

	function checkCard(card)
	{
		saveCard(card)

		if(doCompare)
			compareCards();
		else
			doCompare = true;
	}

	function saveCard(card)
	{
		activeCards.push(card);
	}

	function compareCards()
	{

		let cards = [];
		cards.push(...activeCards);
		clearActiveCards();

		if(cards[0].attr('name') === cards[1].attr('name'))
			matchCards(cards);
		else
			hideCards(cards);

		doCompare = false;
		setTurns(true);
	}

	function clearActiveCards()
	{
		activeCards = [];
	}

	function matchCards(cards)
	{
		for(let card of cards)
		{
			flipCard(card, 'matched');
		}
	}

	function hideCards(cards)
	{
		for(let card of cards)
		{
			flipCard(card, 'down');
		}
	}

	function resizeCards()
	{
		let height = $('.cell').width();
		$('.cell').height(height + 'px');
		$('.memory-card').css('line-height', height + 'px');
	}


	$('#game').on('click', '.memory-card', function(e)
	{

		if(!$(this).hasClass('flipped') && !$(this).hasClass('matched') && activeCards.length < 2 && !isStarting && !paused)
			flipCard($(this), 'up');
	});

	$('.restart').on('click', function(e)
	{
		e.preventDefault();

		$('.pause').html('<i class="fa fa-pause"></i>');

		if($('body').hasClass('modal-open'))
			$('.modal').modal('hide');

		newGame();
	});

	$('.pause').on('click', function(e)
	{
		e.preventDefault();

		if(paused)
			$('.pause').html('<i class="fa fa-pause"></i>');
		else
			$('.pause').html('<i class="fa fa-play"></i>');

		paused = !paused;
	});

	$(this).on('resize', function(e)
	{
		resizeCards();
	});

	newGame();

});