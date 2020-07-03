/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    }

    //adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter.
    addPhraseToDisplay() {
        let phraseBox = document.getElementById("phrase")
        let arrPhrase = this.phrase.split('')

        arrPhrase.forEach(letter => {
            let li = document.createElement('li')
            if (letter !== ' ') {
               let newLi = phraseBox.appendChild(li)
               newLi.innerHTML = `${letter}`
               newLi.classList.add(`hide`);
               newLi.classList.add(`letter`);
               newLi.classList.add(`${letter}`);
            } else {
               let newLi = phraseBox.appendChild(li)
               newLi.classList.add(`space`)
            }
        });
    }

    //checks to  if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        let arrPhrase = this.phrase.split('')
        arrPhrase.forEach( l => {
            if (l === letter ) {
                this.showMatchedLetter(letter)
            }
        })
        return this.phrase.includes(letter)
    }

    //reveals the letter(s) on the board that matches the player's selection.
    showMatchedLetter(letter) {
        let matches = document.getElementsByClassName(letter);
        for (let i = 0; i < matches.length; i++) {
            matches[i].classList.remove('hide')
            matches[i].classList.add('show')
        }
    }

 }



