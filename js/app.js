/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 //creates new game object 
const game = new Game();

/**
 * Click event on button that starts the game
 */

let startButton = document.getElementById("btn__reset")
startButton.addEventListener("click", () => {
        game.startGame();
});

/**
 * Click event for qwerty events
 */

document.querySelectorAll('.key').forEach( key => {
        key.addEventListener('click', e => {
                game.handleInteraction(e.target);
        })
})

