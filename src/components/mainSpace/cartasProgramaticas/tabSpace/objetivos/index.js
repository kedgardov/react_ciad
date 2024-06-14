import React from 'react';
import ObjetivoGeneral from './objetivoGeneral';
import ObjetivoEspecifico from './objetivoEspecifico';
import './index.css';

const Objetivos = () => {
  return (
    <div className="objetivos-form">
      <h3>Objetivo General</h3>
      <ObjetivoGeneral/>
      <h3>Objetivo Especifico</h3>
      <ObjetivoEspecifico/>
    </div>
  );
};

export default Objetivos;
