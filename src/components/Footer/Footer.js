import React from 'react';
import './Footer.css';
const Footer = (props) => {
	return (
		<div className="page-footer font-small cyan darken-3">
			<div className="container">
				<div className="row">
					<div className="col-md-12 py-5">
						<div className="mb-5 flex-center">
							<div className="footer-copyright text-center py-3">
								© 2020 Sam Levy <a href="https://github.com/Slevy239"> Github</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

