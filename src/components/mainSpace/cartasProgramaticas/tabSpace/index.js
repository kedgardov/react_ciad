import React from 'react';
import { useSelector } from 'react-redux';
import General from './general';
import Fuentes from './fuentes';
import Objetivos from './objetivos';
import Contenido from './contenido';
import Evaluacion from './evaluacion';
import Coolaboradores from './colaboradores';

const TabContent = () => {
  const selectedTab = useSelector(state => state.tabSpace.spaceType);
  const renderContent = () => {

    if(!selectedTab){
      return <div>Nothing Selected</div>;
    }
    if(selectedTab === 'general'){
      return <General />;
    }
    if(selectedTab === 'objetivos'){
      return <Objetivos/>;
    }
    if(selectedTab === 'contenido'){
      return <Contenido/>;
    }
    if(selectedTab === 'coolaboradores'){
      return <Coolaboradores/>;
    }
    if(selectedTab === 'fuentes'){
      return <Fuentes />;
    }
    if(selectedTab === 'evaluacion'){
      return <Evaluacion/>;
    }

    return <div>Something Went Wrong</div>;
  };
  return <div className="tab-content">{renderContent()}</div>;
};

export default TabContent;
