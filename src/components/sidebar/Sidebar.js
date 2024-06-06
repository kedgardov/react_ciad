import React from 'react';
import SidebarTitle from './SidebarTitle';
import SidebarCursos from './SidebarCursos';
import SidebarConfiguracion from './SidebarConfig';
import SidebarAyuda from './SidebarAyuda';

const Sidebar = ({onSelectCourse}) => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <SidebarTitle />
      <hr className="sidebar-divider my-0" />
      <SidebarCursos onSelectCourse={onSelectCourse}/>
      <hr className="sidebar-divider my-0" />
      <SidebarConfiguracion />
      <hr className="sidebar-divider my-0" />
      <SidebarAyuda />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default Sidebar;
