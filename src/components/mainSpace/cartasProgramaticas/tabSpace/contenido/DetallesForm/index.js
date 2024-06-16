import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateField, updateFieldLocal } from '../../../../../../actions';
import Objetivo from './Objetivo';
import Actividades from './Actividades';
import Evidencias from './Evidencias';
import './index.css';

const MainForm = ({unidad}) => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);

  const [catHabilidades, setCatHabilidades] = useState([]);
  const [catActividades, setCatActividades] = useState([]);
  const [catTaxBloom, setCatTaxBloom] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedHabilidad, setSelectedHabilidad] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost/react_ciad/api/catalogos/select_all.php');
        setCatHabilidades(response.data.habilidades);
        setCatActividades(response.data.actividades);
        setCatTaxBloom(response.data.tax_bloom);
        console.log(response.data.habilidades, response.data.actividades, response.data.tax_bloom);
      } catch (error) {
        console.error('Error fetching catalog data', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const [formState, setFormState] = useState({
    area: '',
    habilidad: '',
    verboBloom: '',
    objetivo: '',
    presenciales: { sugerencia: '', textarea: '' },
    independientes: { sugerencia: '', textarea: '' },
    presencialesEvidencia: '',
    independientesEvidencia: ''
  });

  const handleChange = (field, value) => {
    setFormState(prevState => ({ ...prevState, [field]: value }));
    dispatch(updateFieldLocal(field, value));

    if (field === 'area') {
      setSelectedArea(value);
      setSelectedHabilidad('');
      setFormState(prevState => ({ ...prevState, habilidad: '', verboBloom: '' }));
    } else if (field === 'habilidad') {
      setSelectedHabilidad(value);
      setFormState(prevState => ({ ...prevState, verboBloom: '', presenciales: { sugerencia: '', textarea: '' }, independientes: { sugerencia: '', textarea: '' } }));
    } else if (field === 'presencialesSugerencia' || field === 'independientesSugerencia') {
      const selectedActividad = catActividades.find(actividad => actividad.id_actividad === parseInt(value));
      if (field === 'presencialesSugerencia') {
        setFormState(prevState => ({ ...prevState, presenciales: { sugerencia: value, textarea: selectedActividad ? selectedActividad.descripcion : '' } }));
      } else if (field === 'independientesSugerencia') {
        setFormState(prevState => ({ ...prevState, independientes: { sugerencia: value, textarea: selectedActividad ? selectedActividad.descripcion : '' } }));
      }
    }
  };

  const handleBlur = (field, value) => {
    dispatch(updateField(selectedCourse.id_curso, field, value));
  };

  const filteredHabilidades = selectedArea
    ? catHabilidades.filter(habilidad => habilidad.tipo === selectedArea)
    : [];

  const filteredVerbosBloom = selectedHabilidad
    ? catTaxBloom.filter(bloom => bloom.id_habilidad === parseInt(selectedHabilidad))
    : [];

  const filteredActividades = selectedHabilidad
    ? catActividades.filter(actividad => actividad.id_habilidad === parseInt(selectedHabilidad))
    : [];

  const uniqueTipos = Array.from(new Set(catHabilidades.map(habilidad => habilidad.tipo)));

  const areaOptions = uniqueTipos.map(tipo => ({ value: tipo, label: tipo }));

  console.log('Filtered Habilidades:', filteredHabilidades);
  console.log('Filtered Verbos Bloom:', filteredVerbosBloom);
  console.log('Filtered Actividades:', filteredActividades);

  return (
    <div className="main-form">
      <form className="course-form">
        <Objetivo
          areas={areaOptions}
          habilidades={filteredHabilidades.map(habilidad => ({ value: habilidad.id_habilidad, label: habilidad.habilidad }))}
          verbosBloom={filteredVerbosBloom.map(verbo => ({ value: verbo.id_bloom, label: verbo.verbo }))}
          objetivo={formState.objetivo}
          onChange={handleChange}
          selectedArea={selectedArea}
          selectedHabilidad={selectedHabilidad}
        />
        <Actividades
          presenciales={formState.presenciales}
          independientes={formState.independientes}
          sugerencias={filteredActividades.map(actividad => ({ value: actividad.id_actividad, label: actividad.actividad }))}
          onChange={handleChange}
        />
        <Evidencias
          presenciales={formState.presencialesEvidencia}
          independientes={formState.independientesEvidencia}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default MainForm;
