import React, { Component } from 'react';
import './App.css';
import PrimaryHeader from './Components/PrimaryHeader';
import SecondaryHeader from './Components/SecondaryHeader';
import MainBody from './Components/MainBody';
import ProfileDetails from './Components/ProfileDetails';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      
		<PrimaryHeader/>
        <SecondaryHeader/>
		<MainBody />
		<ProfileDetails />
		<Footer />
	  </div>
    );
  }
}

export default App;
