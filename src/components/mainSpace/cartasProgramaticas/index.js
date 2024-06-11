import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setTabSpace } from '../../../actions';
import TabSpace from './tabSpace';


const Detalles = () => {

  //const curso = useSelector(state => state.mainSpace.data);
  const curso = useSelector(state => state.selectedCourse);

  const dispatch = useDispatch();
  const handleSelectTab = (tabType) => {
    dispatch(setTabSpace(tabType,null))
  };



  return (
   <div className="container-fluid">
    <h1>{curso.nombre}</h1>
     <ul className="nav nav-tabs">
       <li className="nav-item">
         <button className="nav-link"
            id='general'
            type="button"
            onClick={() => handleSelectTab('general')}
         >
           General
         </button>
       </li>
       <li className="nav-item">
         <button className="nav-link"
           id='unidades'
           type="button"
           onClick={() => handleSelectTab('unidades')}
         >
           Unidades
         </button>
       </li>
     </ul>
     <TabSpace/>
   </div>
  );
};

export default Detalles;
