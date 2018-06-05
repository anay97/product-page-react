import React, { Component } from 'react';
import '../static/main-body.css';

import img1 from '../assets/images/a1.jpg';
import img2 from '../assets/images/a2.jpg';
import img3 from '../assets/images/a3.jpg';

import data from '../assets/data.json';
import { Fade  } from 'react-slideshow-image';
let item,itemDetails,negotiable;

const images = [img1,img2,img3];




class MainBody extends Component {
	constructor(){
		super();
		item=data.item;
		itemDetails=data.item.item_details;
		console.log(images);
		if(itemDetails.negociable===true){
			negotiable='Negotiable';
		}
		else{
			negotiable='Non-Negotiable';
		}
	}
  render() {
    return (
      <div className="main-body">
        <h2 id="name">{item.title}</h2>
		
		<div id="scroll">
		<div className="smaller">{item.location}</div>
		<div className="slideshow">
			<Fade images={images} duration={5000} transitionDuration={1000} />
		</div>
		<div className="date">23rd May, 2018</div><br />
		</div>
		<div className="details">
			<h2 className="item-details">Item Details</h2>
			<div className="cost">{itemDetails.currency} {itemDetails.price} <small>{negotiable}</small></div><br /><br />
			<table>
			<tbody>
			<tr>
			<td>Make: <span className="table-key">{itemDetails.Make}</span></td>
			<td>Year: <span className="table-key">{itemDetails.Year}</span></td>
			<td>Category: <span className="table-key">{itemDetails.Category}</span></td>
			</tr>
			<tr>
			<td>Model: <span className="table-key">{itemDetails.Model}</span></td>
			<td>Condition: <span className="table-key">{itemDetails.Condition}</span></td>
			<td>Registration: <span className="table-key">{itemDetails.Registration}</span></td>
			</tr>
			</tbody>
			</table>
		</div>
		<h2 className="item-details">Description</h2>
		<div className="description">{item.description}
		</div>
	  </div>
    );
  }
}

export default MainBody;
