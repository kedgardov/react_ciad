import React from 'react';
import { useDispatch } from 'react-redux';
import { setMainSpace } from '../../actions';


const SidebarConfiguracion = () => {

  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(setMainSpace('config',data));
  };

  return (
    <li className="nav-item">
      <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseConfiguracion" aria-expanded="true" aria-controls="collapseConfiguracion">
        <span>Configuración</span>
      </a>
      <div id="collapseConfiguracion" className="collapse" aria-labelledby="headingConfiguracion" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
          <a
            className="collapse-item"
            href="#"
            onClick={() => handleClick('modifyPassword')}
          >
            Cambiar Contraseña
          </a>
          <a
            className="collapse-item"
            href="#"
            onClick={() => handleClick('modifyDocente')}
          >
            Editar Perfil Docente
          </a>
        </div>
      </div>
    </li>
  );
};

export default SidebarConfiguracion;
