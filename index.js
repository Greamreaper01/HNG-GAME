const colorBox = document.getElementById('colorBox');
const colorOptions = document.querySelectorAll('.color-option');
const gameInstructions = document.getElementById('gameInstructions');
const gameStatus = document.getElementById('gameStatus');
const scoreElement = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');

let score = 0;
let targetColor = '';
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C'];

// Function to get a random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start a new game
function startNewGame() {
    // Set a random target color
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;

    // Set random colors for the color options
    colorOptions.forEach(button => {
        const color = getRandomColor();
        button.style.backgroundColor = color;
        button.onclick = () => checkGuess(color);
    });

    // Reset game status and score
    gameStatus.textContent = '';
    gameInstructions.textContent = 'Guess the correct color!';
    scoreElement.textContent = `Score: ${score}`;
}

// Function to check if the guess is correct
function checkGuess(guessColor) {
    if (guessColor === targetColor) {
        score++;
        gameStatus.textContent = 'Correct! Well done!';
        gameStatus.style.color = 'green';
        setTimeout(startNewGame, 1000);  // Start a new round after 1 second
    } else {
        gameStatus.textContent = 'Wrong! Try again.';
        gameStatus.style.color = 'red';
    }
}

// Initialize the game on page load
startNewGame();

// Event listener for new game button
newGameButton.addEventListener('click', startNewGame);

if (guessColor === targetColor) {
    score++;
    gameStatus.textContent = 'Correct! Well done!';
    gameStatus.classList.add('celebrate');
    setTimeout(() => gameStatus.classList.remove('celebrate'), 1000);  // Remove animation after 1 second
    setTimeout(startNewGame, 1000);
} else {
    gameStatus.textContent = 'Wrong! Try again.';
    gameStatus.classList.add('fade-out');
    setTimeout(() => gameStatus.classList.remove('fade-out'), 1000);  // Remove fade-out after 1 second
}