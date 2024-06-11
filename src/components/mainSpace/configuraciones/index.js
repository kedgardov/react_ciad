import React from 'react';
import { useSelector } from 'react-redux';
import ModifyPassword from './modPassword';
import MoifyProfile from './modPerfil';


const Configuraciones = () => {
  const mainSpaceContent = useSelector(state => state.mainSpace);

  const renderContent = () => {
    if (mainSpaceContent.spaceType === 'config') {
      if(mainSpaceContent.data === 'modifyPassword'){
        return <ModifyPassword/>;
      }
      if(mainSpaceContent.data === 'modifyDocente'){
        return <MoifyProfile/>;
      }
    }
    return <h1>Unknown Selection</h1>;
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default Configuraciones;
