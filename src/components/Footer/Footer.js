import React from 'react';
import './Footer.css'
const Footer = (props) => {
    return (
        <div className="row footer">
            <div className="col-6">
                <h5 className="text-uppercase font-weight-bold">Created by Sam Levy</h5>
                <p>University of Pennsylvania Coding Bootcamp</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-3"></hr>
            <div className="footer-copywright text-center py-3">© 2020 Sam Levy
             <a href="https://github.com/Slevy239"> Github</a>
            </div>
        </div>
    )
}

export default Footer;
