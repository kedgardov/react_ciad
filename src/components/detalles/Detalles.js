import React, { useState } from 'react';
import TabContent from '../tabcontent/TabContent';


const Detalles = ({ course }) => {
  const [selectedTab, setSelectedTab] = useState('general');

  function handleSelectTab(tabName) {
    // Remove 'active' class from all elements with class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the selected element
    const selectedElement = document.getElementById(tabName);
    if (selectedElement) {
      selectedElement.classList.add('active');
    }

    // Update the selected tab state
    setSelectedTab(tabName);
  };

  return (
   <div className="container-fluid">
    <h1>{course.nombre}</h1>
     <ul className="nav nav-tabs">
       <li className="nav-item">
         <button className="nav-link"
            id='general'
            type="button"
            onClick={() => handleSelectTab('general')}
         >
           General
         </button>
       </li>
       <li className="nav-item">
         <button className="nav-link"
           id='unidades'
           type="button"
           onClick={() => handleSelectTab('unidades')}
         >
           Unidades
         </button>
       </li>
     </ul>
     <TabContent selectedTab={selectedTab}/>
   </div>
  );
};

export default Detalles;
