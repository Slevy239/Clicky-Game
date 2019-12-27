import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import friends from "./Friends.json";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };



  // Map over this.state.friends and render a Card component for each friend object
  render() {
    return (
      <div>

      <Navbar />
      <Header />
        <Container>
      {this.state.friends.map(friend =>(
        
        <Card
        id={friend.id}
        name={friend.name}
        image={friend.image}
        />
        ))}
        </Container>
        </div>
    );
  }
}

export default App;
