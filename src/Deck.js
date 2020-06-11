export default class Deck {
  constructor(props) {
    //some more code

    this.cardsLeft = 52;
    this.lastPick = 0;

    //some more code
  }

  pickCards() {
    this.lastPick = 4;
    this.cardsLeft -= this.lastPick;
    const deckElem = document.getElementById("deck");
    deckElem.innerHTML = this.cardsLeft;
    return this.lastPick;
  }

  //some more code
}