import React, { Component } from 'react';
import './App.css';
import PrimaryHeader from './Components/PrimaryHeader';
import SecondaryHeader from './Components/SecondaryHeader';
import MainBody from './Components/MainBody';
import ProfileDetails from './Components/ProfileDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
      
		<PrimaryHeader/>
        <SecondaryHeader/>
		<MainBody />
		<ProfileDetails />
	  </div>
    );
  }
}

export default App;
