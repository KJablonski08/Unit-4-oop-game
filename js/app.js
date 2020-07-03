/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

let startButton = document.getElementById("btn__reset")
startButton.addEventListener("click", () => {
        game.startGame();
});

document.querySelectorAll('.key').forEach( key => {
        key.addEventListener('click', e => {
                game.handleInteraction(e.target);
        })
})

