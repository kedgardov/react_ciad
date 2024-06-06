import React from 'react';

const SidebarConfiguracion = () => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseConfiguracion" aria-expanded="true" aria-controls="collapseConfiguracion">
        <span>Configuración</span>
      </a>
      <div id="collapseConfiguracion" className="collapse" aria-labelledby="headingConfiguracion" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <a className="collapse-item" href="#">Cambiar Contraseña</a>
          <a className="collapse-item" href="#">Editar Perfil Docente</a>
        </div>
      </div>
    </li>
  );
};

export default SidebarConfiguracion;
