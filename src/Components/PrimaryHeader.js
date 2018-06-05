import React, { Component } from 'react';
import logo from '../logo.svg';
import '../static/primary-header.css';

class PrimaryHeader extends Component {
  render() {
    return (
      <div className="primary-header">
        <img src={ logo } className="logo" alt="logo" />
		<div className="buttonList">
			<a href="#" className="separator">Cart Icon Here</a>
			<a href="#">Register</a>
			<a href="#">Sign In</a>
			<a href="#" className="rounded">Sell Item</a>
		</div>
	  
	  </div>
    );
  }
}

export default PrimaryHeader;
