import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row row-center">             
                    <div className="col-4 col-sm-3 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/ryan_f3/"><i className="fa fa-instagram" /></a>{'   '}
                        <a className="btn btn-social-icon btn-flickr" href="https://www.flickr.com/people/127115414@N06/"><i className="fa fa-flickr" /></a>{'  '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" />  1-408-476-9035</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> ryanfdez3@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;