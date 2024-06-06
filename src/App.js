import React, { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="app-wrapper">
      <div className="SidebarDiv">
        <Sidebar onSelectCourse={setSelectedCourse} />
      </div>
      <div className="main-layout">
        <div className="NavbarDiv">
          <Navbar />
        </div>
        <div className="main-content">
          <MainContent selectedCourse={selectedCourse} />
        </div>
        <div className="FooterDiv">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
