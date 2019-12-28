import React from 'react';
// import '/Header.css';

const Header = (props) => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container text-center">
				<h1 className="display-4 header-main">Clicky Game</h1>

				<h2 className="display-6">{props.status}</h2>
			</div>
		</div>
	);
};
export default Header;
