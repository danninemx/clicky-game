import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import friends from "./friends.json";
import "./App.css";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  // Call this to handle click
  handleClick = id => {
    // console.log(`Event target is of ${typeof id} type and is ${id}`);

    // If clicked hero was not previously clicked, increment point and add hero to array
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.handleIncrement();

    } else { // Otherwise reset point
      this.handleReset();
    }
  }; // End of handleClick


  // Call this to handle score addition
  handleIncrement = () => {
    // Declare new score and induce render
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });

    // If new score matches/exceeds top score, update the latter
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }

    // If max score is reached, reset score and congratulate user
    if (newScore === 12) {
      this.handleReset();
      this.setState({
        rightWrong: "Victory!"
      });
    }
    this.handleShuffle();
  }; // End of handleIncrement


  // Call this to reset score
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Civilian casualty!",
      clicked: []
    });
    this.handleShuffle();
  }; // End of handleReset


  // Call this to shuffle cards
  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };


  render() {
    return (
      <Wrapper>
        <Nav
          title="Superhero Clicky"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />

        <Title>
          Earth is under attack! Click a new hero to aid in her defense!
        </Title>

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;