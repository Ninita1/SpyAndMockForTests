class User {
  constructor(name, deck) {
    this.name = name;
    this.tableDeck = deck;
    this.cards = 0;
    //some more code
  }

  //some more code

  pickCards() {
    const newCards = this.tableDeck.pickCards();
    this.cards += newCards;
    //some code
  }

  //some more code
}

export default User;