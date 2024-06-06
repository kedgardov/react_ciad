import React from 'react';
import Detalles from '../detalles/Detalles';

const MainContent = ({ selectedCourse }) => {
  const renderContent = () => {
    if (!selectedCourse) {
      return <div>Select a course from the sidebar</div>;
    }

    return <Detalles course={selectedCourse} />;
  };

  return <div className="main-content">{renderContent()}</div>;
};

export default MainContent;
