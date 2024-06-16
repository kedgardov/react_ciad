import React from 'react';
import HorizontalGroup from '../../../../../templates/forms/HorizontalGroup';
import DropdownFormGroup from './DropdownFormGroup';
import FormGroup from '../../../../../templates/forms/FormGroup';

const Objetivo = ({ areas, habilidades, verbosBloom, objetivo, onChange, selectedArea, selectedHabilidad }) => {
  return (
    <div className="objetivo-section">
      <h3>Objetivo</h3>
      <HorizontalGroup>
        <DropdownFormGroup label="Area" id="area" value={selectedArea} onChange={onChange} options={areas} />
        <DropdownFormGroup label="Habilidad" id="habilidad" value={selectedHabilidad} onChange={onChange} options={habilidades} />
        <DropdownFormGroup label="Verbo Bloom" id="verboBloom" value={objetivo.verboBloom} onChange={onChange} options={verbosBloom} />
      </HorizontalGroup>
      <FormGroup label="Objetivo" type="textarea" id="objetivo" value={objetivo} onChange={onChange} />
    </div>
  );
};

export default Objetivo;
