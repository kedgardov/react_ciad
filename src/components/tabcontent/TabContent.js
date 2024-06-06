import React from 'react';


const TabContent = ({ selectedTab }) => {
  const renderContent = () => {
    if(!selectedTab){
      return <div>Nothing Selected</div>;
    }
    if(selectedTab === 'general'){
      return <div>Selected the general tab</div>;
    }
    if(selectedTab === 'unidades'){
      return <div>Selected the unidades tab</div>;
    }
    return <div>Something Went Wrong</div>;
  };
  return <div className="tab-content">{renderContent()}</div>;
};

export default TabContent;
