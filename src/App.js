import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./components/pups";
import "./App.css"
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    pups,
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if (clickedPuppyIds.includes(id)) {
      this.setState({ clickedPuppyIds: [], score: 0, status: "Game Over!" });
      return;
    } else {
      clickedPuppyIds.push(id);

      if (clickedPuppyIds.lenth === 8) {
        this.setState({ score: 8, status: "You won!", clickedPuppyIds: [] });
        return
      }
    }
    this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.lenth, status: " " });
    for (let i = pups.length - 1; i > 0; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [pups[i], pups[j]] = [pups[j], pups[i]]
    }
  }
}
render(){
  return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Clicky Game</h1>
        <p className="App-intro">
          Don't click the same picture twice!
        </p>
      </header>
      <Score total = {this.state.score}
      goal={8}
      status= {this.state.status}
      />
      <Wrapper>
        {this.state.pups.map(puppy => (
          <Card

          shuffleScoreCard={this.shuffleScoreCard}
          id={puppy.id}
          key={puppy.id}
          image={puppy.image}
          />
        ))}
      </Wrapper>
  
    </div>
  )
}

export default App;
