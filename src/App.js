import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import friends from './Friends.json';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends,
		clickedId: [],
		score: 0,
		goal: 10,
		status: ""
	};

	shuffleCard = (id) => {
		console.log('clicked');
		let clickedId = this.state.clickedId;

		if (clickedId.includes(id)) {
			this.setState({ clickedId: [], score: 0, status:"click to start"});
			return;
		} else {
			clickedId.push(id);
			if (clickedId.length === 10) {
				this.setState({ score: 10, clickedId: [], status: "You won!" });
				return;
			}
			this.setState({ clickedId, score: clickedId.length });

			for (let i = 0; i < friends.length; i++) {
				let j = Math.floor(Math.random() * (i + 1));
				[ friends[i], friends[j] ] = [ friends[j], friends[i] ];
			}
		}
	};
	// Map over this.state.friends and render a Card component for each friend object
	render() {
		return (
			<div>
				<Navbar total={this.state.score} goal={10} status={this.state.status} />
				<Header />
				<Container>
					{this.state.friends.map((friend) => (
						<Card shuffleCard={this.shuffleCard} id={friend.id} name={friend.name} image={friend.image} />
					))}
				</Container>
			</div>
		);
	}
}

export default App;
