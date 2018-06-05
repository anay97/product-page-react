import React, { Component } from 'react';
import '../static/secondary-header.css';

class SecondaryHeader extends Component {
  render() {
    return (
      <div className="secondary-header">
		
		<form action="#" className="search">
			<input id="query" type="text" placeholder="What are you looking for?" />
			<select id="locations" name="locations">
			<option value="v1">V1</option>
			<option value="v1">V1</option>
			<option value="v1">V1</option>
			</select>
			<select id="categories" name="categories">
			<option value="v1">All Categories</option>
			<option value="v1">V1</option>
			<option value="v1">V1</option>
			</select>
			<input type="submit" value="Go" id="go" />
		</form>
	  
	  </div>
    );
  }
}

export default SecondaryHeader;
