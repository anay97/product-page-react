import React, { Component } from 'react';
import logo from '../logo.svg';
import '../static/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="newsletter">
			Get our newsletter
			<form>
				<input type="text" placeholder="Enter your email" />
				<input type="submit" value="Subscribe" />
			</form>
		</div>
		
		<div className="linksleft">
		<img src={logo} alt="logo" />
		</div>
		
		<div className="linksleft">
		<a href="#">Home</a>
		<a href="#">About</a>
		<a href="#">Home</a>
		<a href="#">Home</a>
		</div>
		
		<div className="linksleft">
		<a href="#">Blog</a>
		<a href="#">Search</a>
		<a href="#">Home</a>
		<a href="#">Home</a>
		</div>
	  
	  </div>
    );
  }
}

export default Footer;
