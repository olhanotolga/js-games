window.onload = () => {
	// 0. load:
	// a) "start game" button
	// b) motionless icons
	// c) computer icon displays a fist
	// d) "reset button" is present
	// ??? e) score is 0:0

	console.log("the game has started");
	
	const rockPaperScissorsArray = ["ROCK", "PAPER", "SCISSORS"];
	const iconsArray = ["./images/cave.png", "./images/paper.png", "./images/scissors.png"];
	const arrayLength = rockPaperScissorsArray.length;

	const iconThatChanges = document.querySelector(".fist");
	console.log(iconThatChanges);
	const playersChoiceIcons = document.querySelectorAll(".player-choice >.r-p-s-icon");
	const fistImage = "./images/strong.png";
	
	const computerScore = document.querySelector(".score-computer");
	const playerScore = document.querySelector(".score-player");

	const resultDisplay = document.querySelector(".result-display");

	// 1. button "start game":
	const startGameBtn = document.querySelector("#startBtn");
	// + function that starts the game:
	const playRockPaperScissors = () => {
		console.log("start game clicked!")
		// a) fist icon animated
		// b) player icons blink
		const animateIcons = () => {
			iconThatChanges.classList.add("throwing");
			console.log("icons:", playersChoiceIcons);
			for (const icon of playersChoiceIcons) {
				icon.classList.add("blink");
			}
		}
		animateIcons();
		
		// c) event listeners are added to player icons
		for (const choice of playersChoiceIcons) {
			choice.addEventListener("click", makeAndDisplayChoices);
		}

		// d) fist icon
		iconThatChanges.setAttribute("src", fistImage);
	}
	// function is called upon the button click:
	startGameBtn.addEventListener("click", playRockPaperScissors);


	const stopIconsAnimation = () => {
		iconThatChanges.classList.remove("throwing");
		for (const icon of playersChoiceIcons) {
			icon.classList.remove("blink");
		}
	}
	// 2. click on one of player icons:
	const makeAndDisplayChoices = (event) => {
		// a) both animations stop
		stopIconsAnimation();
		// b) fist icon changes to a random RPS one
		const getAndSetRandomIcon = () => {
			const randomNumber = Math.floor(Math.random() * arrayLength);
			const randomItem = rockPaperScissorsArray[randomNumber];
			const itemImage = iconsArray[randomNumber];
		
			iconThatChanges.setAttribute("src", itemImage);
		
			return randomItem;
		}

		// c) choices are comparted and results are displayed
		// d) score is incremented
		const computersChoice = getAndSetRandomIcon();
		const playersChoice = event.target.alt;
		console.log(`computer says: ${computersChoice}, you say: ${playersChoice}`);

		const incrementComputerScore = () => {
			// console.log(computerScore.innerText);
			computerScore.innerText = Number(computerScore.innerText) + 1;
		}
		const incrementPlayerScore = () => {
			playerScore.innerText = Number(playerScore.innerText) + 1;
		}

		const showMatchResult = (comp, player) => {
			resultDisplay.classList.add("emerging");
			
			if (comp === player) {
				resultDisplay.innerText = "It's a draw!";
				incrementPlayerScore();
				incrementComputerScore();
			} else if ((comp === "ROCK" && player === "PAPER") || (comp === "PAPER" && player === "SCISSORS") || (comp === "SCISSORS" && player === "ROCK")) {
				resultDisplay.innerText = "You win!";
				incrementPlayerScore();
			} else {
				resultDisplay.innerText = "Computer wins!";	
				incrementComputerScore();	
			}
			resultDisplay.classList.add("display");
		}

		showMatchResult(computersChoice, playersChoice);
		
		// e) "start game" button changes to "once again"
		startGameBtn.innerText = "once again";

		// f) event listeners are removed from the icons ???

	}
	
	// 3. "reset" button
	// --> brings everything back to "load" state
	const resetGameBtn = document.querySelector("#resetBtn");
	const resetGame = () => {
		// a) "start game" button
		startGameBtn.innerText = "start game";
		// b) motionless icons
		stopIconsAnimation();
		// c) computer icon displays a fist
		iconThatChanges.setAttribute("src", fistImage);
		// d) "reset button" is present
		// ??? e) score is 0:0
		computerScore.innerText = "0";
		playerScore.innerText = "0";
	}
	resetGameBtn.addEventListener("click", resetGame);
};


