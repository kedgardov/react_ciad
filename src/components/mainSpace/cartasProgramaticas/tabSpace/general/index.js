import React, { useEffect } from 'react';
import CursoForm from './cursoForm';
import SeriacionesForm from './seriacionesForm';
import SaveButton from './SaveButton';

const General = () => {

  return (<div className="general-tab">
            <CursoForm />
            {/*<SeriacionesForm />
               <SaveButton/>*/}
          </div>
         );
};


export default General;
