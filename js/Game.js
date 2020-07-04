/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor(missed, phrases, activePhrase) {
         this.missed = 0;
         this.phrases = [
            {phrase: 'I Love You'},
            {phrase: 'Right as Rain'},
            {phrase: 'On Cloud Nine'},
            {phrase: 'Calm Before the Storm'},
            {phrase: 'Peace and Quiet'}
        ];
         this.activePhrase = null; 
     }

     //hides the start screen overlay, calls the getRandomPhrase() method, and sets the activePhrase property with the chosen phrase
     startGame() {
        document.getElementById("overlay").style.display = 'none'
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
     }

     //randomly retrieves one of the phrases stored in the phrases array and returns it
     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

     //checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess
     handleInteraction(key) {
        key.disabled = true;
        console.log(this.activePhrase)
        let letter = this.activePhrase.checkLetter(key.innerHTML)
        if (letter !== true) {
            this.removeLife();
        }
        this.checkForWin();
     }

     //method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image and increments the missed property
     removeLife() {
         this.missed += 1;
         const tries = document.querySelectorAll('.tries')
         tries[this.missed - 1].children[0].src = 'images/lostHeart.png'
         if (this.missed === 5 ) {
             this.gameOver();
         }
     }

     //checks to see if the player has revealed all of the letters in the active phrase.
     checkForWin() {
        let isShow = document.getElementsByClassName('show')
        let winPhrase = this.activePhrase.phrase.replace(/\s/g, '')
        if (isShow.length === winPhrase.length) {
            this.gameOver();
        }
     }

     //displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message
     gameOver() {
        document.getElementById("overlay").style.display = ''
        if (this.missed < 5) {
            document.getElementById('game-over-message').innerHTML = 'Congratulations! You Win!'
            document.getElementById("overlay").className = 'win'
        } else {
            document.getElementById('game-over-message').innerHTML = 'You Lose, Try Again'
            document.getElementById("overlay").className = 'lose'
        }
        this.missed = 0
        this.activePhrase = null;
        document.querySelectorAll('.key').forEach(key => {
            key.disabled = false;
        });
        document.querySelectorAll('.letter').forEach(li => {
            li.remove();
        })
        document.querySelectorAll('.space').forEach(li => {
            li.remove();
        })
        const tries = document.querySelectorAll('.tries')
        tries.forEach( t => {
            t.children[0].src = 'images/liveHeart.png'
        })
     }

 }
