import React from 'react';
import HorizontalGroup from '../../../../../templates/forms/HorizontalGroup';
import DropdownFormGroup from './DropdownFormGroup';
//import FormGroup from '../../../../../templates/forms/FormGroup';
import TextArea from './TextArea';
const Actividades = ({ presenciales, independientes, sugerencias, onChange }) => {
  return (
    <div className="actividades-section">
      <h3>Actividades</h3>
      <HorizontalGroup>
        <div className="actividad">
          <h4>Presencial</h4>
          <DropdownFormGroup label="Sugerencia" id="presencialesSugerencia" value={presenciales.sugerencia} onChange={onChange} options={sugerencias} />
          <TextArea label="" type="textarea" id="presencialesTextarea" value={presenciales.textarea} onChange={onChange} />
        </div>
        <div className="actividad">
          <h4>Independiente</h4>
          <DropdownFormGroup label="Sugerencia" id="independientesSugerencia" value={independientes.sugerencia} onChange={onChange} options={sugerencias} />
          <TextArea label="" type="textarea" id="independientesTextarea" value={independientes.textarea} onChange={onChange} />
        </div>
      </HorizontalGroup>
    </div>
  );
};

export default Actividades;
