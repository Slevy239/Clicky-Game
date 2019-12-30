import React, { Component } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import friends from './Friends.json';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

class App extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		friends,
		clickedId: [],
		TopScore: [0],
		maxScore: 0,
		score: 0,
		goal: 10,
		status: ''
	}




	shuffleCard = id => {

		let clickedId = this.state.clickedId;

		if (clickedId.includes(id)) {
			this.setState({ clickedId: [], score: 0, status: "GG", })
			return;
		} else {
			clickedId.push(id);

			if (clickedId.length === 10) {
				this.setState({ score: 10, status: "Winner", clickedId: [] })
				return;
			}
			this.setState({ friends, clickedId, score: clickedId.length, status: " " });


			for (let i = friends.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[friends[i], friends[j]] = [friends[j], friends[i]];
			}
		}

	}
	render() {
		return (
			<div>
				<Navbar total={this.state.score} goal={this.state.goal} maxScore={this.state.maxScore} />
				<Header status={this.state.status} />
				<Container>
					{this.state.friends.map((friend) => <Card shuffleCard={this.shuffleCard} image={friend.image} />)}
				</Container>
				<Footer />
			</div>
		);
	}
}


export default App;
