import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import logo from '../App/logo.png'
import ComingSoon from '../ComigSoon/ComigSoon'
import MorePopular from '../MorePopular/MorePopular'

function App() {
  return (
    <div className="App">
  <Header/>
  <div className="movies"> 
  <div className="wrapper">
  <p className="movies_text">Kaboodle</p>
  <img src={logo} alt="logo" className="movies_logo"/>
  </div>
  </div>
  <ComingSoon/>
  <MorePopular/>
    </div>
  
  );
}

export default App;
