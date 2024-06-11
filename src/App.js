import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import MainSpace from './components/mainSpace';
import Footer from './components/footer';
import './App.css';

function App() {

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

export default App;
