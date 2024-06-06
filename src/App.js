import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [selectedSidebarElement, setSelectedSidebarElement] = useState({ type: null, value: null });
  return (
    <div className="app-wrapper">
      <Sidebar onSelectSidebarElement={setSelectedSidebarElement}/>
      <div className="main-layout">
        <Navbar />
        <MainContent selectedSidebarElement={selectedSidebarElement} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
