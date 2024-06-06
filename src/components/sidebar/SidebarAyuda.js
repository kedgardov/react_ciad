import React from 'react';

const SidebarAyuda = () => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseAyuda" aria-expanded="true" aria-controls="collapseAyuda">
        <span>Ayuda</span>
      </a>
      <div id="collapseAyuda" className="collapse" aria-labelledby="headingAyuda" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <a className="collapse-item" href="#">Tutorial Agregar Curso</a>
          <a className="collapse-item" href="#">Tutorial Modificar Curso</a>
          <a className="collapse-item" href="#">Tutorial Editar Perfil</a>
        </div>
      </div>
    </li>
  );
};

export default SidebarAyuda;
