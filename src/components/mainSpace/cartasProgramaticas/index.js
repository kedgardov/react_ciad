import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTabSpace } from '../../../actions';
import TabSpace from './tabSpace/';
import { createTab } from './createTab';

const Detalles = () => {
  const curso = useSelector((state) => state.curso);

  const dispatch = useDispatch();

  const handleSelectTab = (tabType) => {
    dispatch(setTabSpace(tabType, null));
  };

  if (!curso || !curso.nombre) {
    return (
      <div className="container-fluid">
        <h1>Loading Course Details...</h1>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h1>{curso.nombre}</h1>
      <ul className="nav nav-tabs">
        {createTab('general', handleSelectTab)}
        {createTab('unidades', handleSelectTab)}
        {createTab('fuentes', handleSelectTab)}
      </ul>
      <TabSpace />
    </div>
  );
};

export default Detalles;
