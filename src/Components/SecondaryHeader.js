import React, { Component } from 'react';
import '../static/secondary-header.css';
import data from '../assets/data.json';
let categories;
let locations;
class SecondaryHeader extends Component {
	constructor(){
		super();
		categories=data.categories;
		locations=data.locations;
		
	}
  render() {
	  
	  let categoryOptions=categories.map((category)=>
		<option value={category}>{category}</option>
	  );
	  let locationOptions=locations.map((location)=>
		<option value={location}>{location}</option>
	  );
	  
    return (
      <div className="secondary-header">
		
		<form action="#" className="search">
			<input id="query" type="text" placeholder="&#128269; What are you looking for?" />
			<select id="locations" name="locations">
			{locationOptions}
			</select>
			<select id="categories" name="categories">
			<option value="v1">All Categories</option>
			{categoryOptions}
			</select>			
			<input type="submit" value="Go" id="go" />
		</form>
	  
	  </div>
    );
  }
}

export default SecondaryHeader;
