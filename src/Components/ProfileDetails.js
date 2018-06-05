import React, { Component } from 'react';
import logo from '../logo.svg';
import '../static/profile-details.css';
import profilepic from '../assets/images/dp.png';
import mapPic from '../assets/images/mappic.jpg';
import Stars from './Stars';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

class ProfileDetails extends Component {
	
	constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    //this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  
    openModal() {
    this.setState({modalIsOpen: true});
  }

//  afterOpenModal() {
    // references are now sync'd and can be accessed.
//    this.subtitle.style.color = '#f00';
//  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="profile-details">
        <img src={profilepic} alt="dp" />
		<div className="person-details">
			<h3 className="name">Andrew C.</h3><br/>
			<div className="smaller in-line">Member Since 2018</div>
			<Stars rating="4.5" total="21" />
		</div>
			<img className="mapPic" src={mapPic} alt="mapPic" />
			<a className="button" href="#">Message Sender</a>
			<a className="button" onClick={this.openModal} href="#">040 X XX (reveal)</a>
			
			<Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >

          <h2>Hello</h2>
          <div>I am a modal</div>
          This is a demo Modal
        </Modal>
		
	  </div>
    );
  }
}

export default ProfileDetails;
