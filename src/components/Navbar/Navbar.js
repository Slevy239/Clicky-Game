import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<nav class="navbar navbar-light bg-light">
			<ul className="navbar-nav">
				<li className="nav-item">Clicky Game</li>
			</ul>

			<ul className="navbar-nav">
				<li className="nav-item">{props.status}</li>
			</ul>
			<ul className="navbar-nav">
				<li className="nav-item">Score: {props.total} </li>
			</ul>
		</nav>
	);
};
export default Navbar;
