import React from 'react';
import TextArea from '../../../../templates/forms/TextAreaForm';

const ObjetivoGeneral = () => {
  return (
    <div className="objetivo-general-form">
      <TextArea
        id='objetivo-general'
        value={"Empece a Escribir Aqui"}
      />
    </div>
  );
};

export default ObjetivoGeneral;
