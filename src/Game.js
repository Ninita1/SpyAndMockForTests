import React from 'react';
import User from './User';
import Board from './Board';
import Deck from './Deck';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.board = new Board();
    this.deck = new Deck();

    //some more code
  }

  componentDidMount() {
    this.initializeUser("xpto");
    //some more code
  }

  //some more code

  initializeUser(name) {
    const user = new User(name, this.deck);
    //some more code

    user.pickCards();
    //some more code
  }

  //some more code

  render() {
    return (
      <div className="game-container">
          something to show
          <div id="deck"></div>
      </div>
    );
  }
}


Game.propTypes = {
};

Game.defaultProps = {
};

export default Game;