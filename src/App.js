import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import friends from './Friends.json';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends
	};

	removeFriend = (id) => {
		// Filter this.state.friends for friends with an id not equal to the id being removed
		const friends = this.state.friends.filter((friend) => friend.id !== id);
		// Set this.state.friends equal to the new friends array
		this.setState({ friends });
	};

	// Map over this.state.friends and render a Card component for each friend object
	render() {
		return (
			<div>
				<Navbar />
				<Header />
				<Container>
					{this.state.friends.map((friend) => (
            <Card
            removeFriend = {this.removeFriend}
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
