import React, { Component } from 'react';
import '../static/main-body.css';
import img1 from '../assets/images/a1.jpg';
//import img2 from '../assets/images/a2.jpg';
//import img3 from '../assets/images/a3.jpg';

class MainBody extends Component {
  render() {
    return (
      <div className="main-body">
        <h2 id="name">2016 Audi RSS Hatchback</h2>
		
		<div id="scroll">
		<div className="smaller">Sydnew, NSW</div>
			<img id="img1" src={img1} alt="img1" />			
		</div>
		<div className="date">23rd May, 2017</div><br />
		<div className="details">
			<h2 className="item-details">Item Details</h2>
			<div className="cost">58 000$ <small>Negotiable</small></div><br /><br />
			<table>
			<tr>
			<td>Make: <span id="make">Audi</span></td>
			<td>Year: 2016</td>
			<td>Category: Semi Luxury Car</td>
			</tr>
			<tr>
			<td>Model: RSS</td>
			<td>Condition: New</td>
			<td>Registration: YH2-005</td>
			</tr>
			</table>
		</div>
		<h2 className="item-details">Description</h2>
		<div className="description">Enter Description Here</div>
	  </div>
    );
  }
}

export default MainBody;
