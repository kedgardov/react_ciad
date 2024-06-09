import React from 'react';
import { useSelector } from 'react-redux';
import Detalles from '../detalles/Detalles';
import ModPassword from '../modPassword/ModPassword';
import ModPerfil from '../modPerfil/ModPerfil';
import './MainContent.css';


const MainContent = () => {
  const mainSpaceContent = useSelector(state => state.mainSpace);

  const renderContent = () => {
    if (!mainSpaceContent.spaceType) {
      return <div>Nothing Selected Yet</div>;
    }
    if (mainSpaceContent.spaceType === 'curso') {
      return <Detalles />;
    }
    if (mainSpaceContent.spaceType === 'config') {
      if (mainSpaceContent.data === 'modifyPassword') {
        return <ModPassword />;
      }
      if (mainSpaceContent.data === 'modifyDocente') {
        return <ModPerfil />;
      }
    }
    return <div>Unknown Selection</div>;
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default MainContent;
