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

    /**
     * Hides the start screen overlay
     * calls the getRandomPhrase() method
     * Begins game by setting a random phrase and displaying it
     */

     startGame() {
        document.getElementById("overlay").style.display = 'none'
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
     }

      /**
     * Randomly retrieves one of the phrases stored in the phrases array and returns it 
     * @return {Object} Phrase to be used 
     */

     getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
     }

     /**
     * checks to see if the button clicked by the player matches a letter in the phrase
     * directs the game based on a correct or incorrect guess
     * @param (htmlButtonElement) letter button on keyboard 
     */

     handleInteraction(key) {
        key.disabled = true;
        console.log(this.activePhrase)
        let letter = this.activePhrase.checkLetter(key.innerHTML)
        if (letter !== true) {
            key.className = 'wrong'
            this.removeLife();
        } else {
            key.className = 'chosen'
        }
        this.checkForWin();
     }

     /**
     * Increments missed by 1
     * Removes a life from scoreboard
     * Ends game if there are no lives
     */

     removeLife() {
         this.missed += 1;
         const tries = document.querySelectorAll('.tries')
         tries[this.missed - 1].children[0].src = 'images/lostHeart.png'
         if (this.missed === 5 ) {
             this.gameOver();
         }
     }

     /**
     * checks to see if the player has revealed all of the letters in the active phrase
     * @return {boolean} true if won, false if it wasn't
     */

     checkForWin() {
        let isShow = document.getElementsByClassName('show')
        let winPhrase = this.activePhrase.phrase.replace(/\s/g, '')
        if (isShow.length === winPhrase.length) {
            this.gameOver();
        }
     }

     /**
     * Displays original start screen overlay
     * Depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message
     * Resets so player can try again 
     */

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
        document.querySelectorAll('.keyrow button').forEach( btn => {
            btn.className = 'key';
        })
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
