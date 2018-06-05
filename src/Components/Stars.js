import React, { Component } from 'react';

import '../static/profile-details.css';


class Stars extends Component {
  render() {
	  let x=parseFloat(this.props.rating);
	  let y=parseInt(x);
	  let displayStars='';
	  let displayHalfStars='';
	  for(var i=0;i<y;i++){
		  displayStars+='<i class="fas fa-star"></i>';
	  }
	  if(x!==y){
		  displayHalfStars='<i class="fas fa-star-half"></i>';
	  }	  
    return (
      <div className="stars">
        <div className="stars-fill" dangerouslySetInnerHTML={{__html: displayStars }}></div>
		<div className="stars-half-fill" dangerouslySetInnerHTML={{__html: displayHalfStars }}></div>
		<div className="smaller in-line">({this.props.total})</div>
	  </div>
    );
  }
}

export default Stars;
