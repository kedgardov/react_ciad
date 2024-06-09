import React from 'react';
import CursoForm from './cursoForm/CursoForm';
import SeriacionesForm from './seriacionesForm/SeriacionesForm';


const General = () => {
  return (<div className="general-tab">
            <CursoForm />
            <SeriacionesForm />
            <button type="button" className="btn btn-primary mt-3" >Modificar Curso</button>
          </div>
         );
};


export default General;
