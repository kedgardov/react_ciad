import React from 'react';
import { useSelector } from 'react-redux';
import General from './general';
import Fuentes from './fuentes';

const TabContent = () => {
  const selectedTab = useSelector(state => state.tabSpace.spaceType);
  const renderContent = () => {

    if(!selectedTab){
      return <div>Nothing Selected</div>;
    }
    if(selectedTab === 'general'){
      return <General />;
      //return <div>Selected the general tab</div>;
    }
    if(selectedTab === 'unidades'){
      return <div>Selected the unidades tab</div>;
    }
    if(selectedTab === 'fuentes'){
      return <Fuentes />;
    }

    return <div>Something Went Wrong</div>;
  };
  return <div className="tab-content">{renderContent()}</div>;
};

export default TabContent;
