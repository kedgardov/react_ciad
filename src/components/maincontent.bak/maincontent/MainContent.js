import React, { useEffect } from 'react';
import Detalles from '../detalles/Detalles';
import ModPassword from '../modPassword/ModPassword';
import ModPerfil from '../modPerfil/ModPerfil';
import './MainContent.css';


const MainContent = ({ selectedSidebarElement, onSelectSidebarElement }) => {
  const handleSelectCurso = (newCursoValue) => {
    onSelectSidebarElement({
      type: 'curso',
      value: newCursoValue
    });
  };

  useEffect( () => {
    console.log('MainContent->modified selectedSidebarElement');
  },[selectedSidebarElement]);


  const renderContent = () => {
    if (!selectedSidebarElement.type) {
      return <div>Nothing Selected Yet</div>;
    }
    if (selectedSidebarElement.type === 'curso') {
      return <Detalles selectedCourse={selectedSidebarElement.value} onSelectCurso={handleSelectCurso} />;
    }
    if (selectedSidebarElement.type === 'conf') {
      if (selectedSidebarElement.value === 'modifyPassword') {
        return <ModPassword />;
      }
      if (selectedSidebarElement.value === 'modifyDocente') {
        return <ModPerfil />;
      }
    }
    return <div>Unknown Selection</div>; // Optional: handle unknown cases
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default MainContent;
