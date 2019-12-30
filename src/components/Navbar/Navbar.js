import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<nav class="navbar navbar-light">
			<ul className="navbar-nav">
				<li className="nav-item"></li>
			</ul>

			<ul className="navbar-nav">
				<li className="nav-item">Score: {props.total} | Goal: {props.goal} </li>
			</ul>

			<ul className="navbar-nav">
				<li className="nav-item">Score to Beat: {props.topScore} </li>
			</ul>
			
		</nav>
	);
};
export default Navbar;
