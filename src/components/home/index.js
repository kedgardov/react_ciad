import React from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import MainSpace from '../mainSpace';
import Footer from '../footer';
import './home.css';

const Home = () => {

  console.log('We are getting here');
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <MainSpace/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
