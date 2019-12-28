import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import friends from './Friends.json';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer'

class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends,
		clickedId: [],
		score: 0,
		goal: 10,
		status: 'Click an image to begin the game!'
	};

	shuffleCard = (id) => {
		let clickedId = this.state.clickedId;

		if (clickedId.includes(id)) {
			this.setState({ clickedId: [], score: 0 });
			return;
		} else {
			clickedId.push(id);
			if (clickedId.length === 10) {
				this.setState({ score: 10, clickedId: [], status: 'You won!' });
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
				<Navbar total={this.state.score} goal={10} />
				<Header status={this.state.status} />
				<Container>
					{this.state.friends.map((friend) => (
						<Card shuffleCard={this.shuffleCard} id={friend.id} name={friend.name} image={friend.image} />
					))}
				</Container>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
