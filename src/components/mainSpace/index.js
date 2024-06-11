import React from 'react';
import { useSelector } from 'react-redux';
import CartasProgramaticas from './cartasProgramaticas';
import Configuraciones from './configuraciones';
import './index.css';


const MainContent = () => {
  const mainSpaceContent = useSelector(state => state.mainSpace);

  const renderContent = () => {
    if (!mainSpaceContent.spaceType) {
      return <div>Nothing Selected Yet</div>;
    }
    if (mainSpaceContent.spaceType === 'curso') {
      return <CartasProgramaticas />;
    }
    if (mainSpaceContent.spaceType === 'config') {
      return <Configuraciones/>
    }
    return <div>Unknown Selection</div>;
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default MainContent;
