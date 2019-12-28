import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<nav class="navbar navbar-light bg-light">
			<ul className="navbar-nav">
				<li className="nav-item"></li>
			</ul>

			<ul className="navbar-nav">
				<li className="nav-item">Score: {props.total} | Goal: {props.goal} </li>
			</ul>

			<ul className="navbar-nav">
				<li className="nav-item"></li>
			</ul>
			
		</nav>
	);
};
export default Navbar;
