/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter.
    addPhraseToDisplay() {
        let arrPhrase = this.phrase.split(''); 
        arrPhrase.forEach(letter => console.log(letter));
    

        /*<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
    */
    }

    //checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter() {
        
    }

    //reveals the letter(s) on the board that matches the player's selection.
    showMatchedLetter() {

    }

 }

 let ph = new Phrase("I LOVE YOU")

console.log(ph)
console.log(ph.phrase)
ph.addPhraseToDisplay();