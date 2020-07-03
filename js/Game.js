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
     handleInteraction() {
        let phrase = this.activePhrase
        document.getElementById("qwerty").addEventListener("click", function(){
            console.log(phrase.checkLetter(event.target.innerHTML) ) 
            
            
        })
     }

     //method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png image and increments the missed property
     removeLife() {

     }

     //checks to see if the player has revealed all of the letters in the active phrase.
     checkForWin() {
     

     }

     //displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message
     gameOver() {

     }

 }
