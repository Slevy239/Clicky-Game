import React from 'react';
import './Header.css'
const Header = (props) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container text-center">
				<h1 className="display-4 header-main">Click a 76er Game</h1>
				<h2 className="display-6">Try not to click the same player twice!</h2>
				<h5 className="display-6">{props.status}</h5>
			</div>
		</div>
	);
};
export default Header;
