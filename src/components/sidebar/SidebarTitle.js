import React from 'react';
import { useDispatch } from 'react-redux';

import { setMainSpace } from '../../actions';

const SidebarTitle = () => {
  const dispatch = useDispatch();

  const handleClick = (spaceType) => {
    dispatch(setMainSpace(spaceType,null));
  };

  return (
    <a className="sidebar-brand d-flex align-items-center justify-content-center"
      href='#'
       onClick = { () => handleClick('mis_cursos')}
    >
      <div className="sidebar-brand-text mx-3">Cursos CIAD</div>
    </a>
  );
};

export default SidebarTitle;
