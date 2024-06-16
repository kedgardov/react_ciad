import React from 'react';
import FormGroup from '../../../../../templates/forms/FormGroup';
import HorizontalGroup from '../../../../../templates/forms/HorizontalGroup';
import TextArea from '../../../../../templates/forms/TextAreaForm';
const Evidencias = ({ presenciales, independientes, onChange }) => {
  return (
    <div className="evidencias-section">
      <h3>Evidencias</h3>
      <HorizontalGroup>
        <div className="evidencia">
          <h6>Presencial</h6>
          <TextArea label="" id="presencialEvidencia" value={presenciales} onChange={onChange} />
        </div>
        <div className="evidencia">
          <h6>Independiente</h6>
          <TextArea label="" id="independienteEvidencia" value={independientes} onChange={onChange} />
        </div>
      </HorizontalGroup>
    </div>
  );
};

export default Evidencias;
