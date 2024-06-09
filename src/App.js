import React from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import MainContent from './components/maincontent';
import Footer from './components/footer';
import './App.css';

function App() {

  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
