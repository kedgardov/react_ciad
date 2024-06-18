import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../../../templates/forms/Table';
import { addColaborador, fetchColaboradores, removeColaborador } from '../../../../../actions/colaboradoresActions';
import Colaborador from '../../../../../classes/Colaborador';
import axios from 'axios';

const ColaboradoresForm = () => {
  const dispatch = useDispatch();
  const selectedCourse = useSelector(state => state.curso);
  const colaboradores = useSelector(state => state.colaboradores.colaboradores || []);
  const [newColaborador, setNewColaborador] = useState({ id_docente: '', id_rol: '' });
  const [docentes, setDocentes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (selectedCourse && selectedCourse.id_curso) {
      dispatch(fetchColaboradores(selectedCourse.id_curso));
    }
    fetchDocentes();
    fetchRoles();
  }, [dispatch, selectedCourse]);

  const fetchDocentes = async () => {
    try {
      const response = await axios.get('http://localhost/react_ciad/api/docentes/select_all.php');
      setDocentes(response.data.docentes);
    } catch (error) {
      console.error('Error fetching docentes:', error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await axios.get('http://localhost/react_ciad/api/roles/select_all.php');
      setRoles(response.data.roles);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const toggleDropdown = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  const handleRemoveColaborador = (id_colaboracion) => {
    const colaboradorToRemove = colaboradores.find(c => c.id_colaboracion === id_colaboracion);
    dispatch(removeColaborador(colaboradorToRemove));
  };

  const handleAddColaborador = () => {
    if (newColaborador.id_docente && newColaborador.id_rol) {
      const docente = docentes.find(d => d.id_docente === parseInt(newColaborador.id_docente));
      const rol = roles.find(r => r.id_rol === parseInt(newColaborador.id_rol));
      if (docente && rol) {
        const newEntry = new Colaborador(
          null,
          rol.id_rol,
          rol.rol,
          selectedCourse.id_curso,
          docente.id_docente,
          docente.nombre
        );
        dispatch(addColaborador(newEntry));
        setNewColaborador({ id_docente: '', id_rol: '' });
      }
    }
  };

  const tableHeaders = ['docente', 'rol'];

  const enrichedColaboradores = (colaboradores || []).map(colab => ({
    ...colab,
    docente: docentes.find(d => d.id_docente === colab.id_docente)?.nombre || 'Unknown',
    rol: roles.find(r => r.id_rol === colab.id_rol)?.rol || 'Unknown'
  }));

  if (!Array.isArray(colaboradores)) {
    return <p>Loading...</p>;
  }

  return (
    <div className="colaboradores-form-div">
      <form className="colaboradores-form">
        <div className="form-group">
          <label htmlFor="docente">Docente</label>
          <select
            id="docente"
            value={newColaborador.id_docente}
            onChange={(e) => setNewColaborador({ ...newColaborador, id_docente: e.target.value })}
            className="form-control"
          >
            <option value="">Seleccione Docente</option>
            {docentes.map(docente => (
              <option key={docente.id_docente} value={docente.id_docente}>
                {docente.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rol">Rol</label>
          <select
            id="rol"
            value={newColaborador.id_rol}
            onChange={(e) => setNewColaborador({ ...newColaborador, id_rol: e.target.value })}
            className="form-control"
          >
            <option value="">Seleccione Rol</option>
            {roles.map(rol => (
              <option key={rol.id_rol} value={rol.id_rol}>
                {rol.rol}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddColaborador}
        >
          Agregar Colaborador
        </button>
        <Table
          title="Colaboradores"
          data={enrichedColaboradores}
          headers={tableHeaders}
          idKey={'id_colaboracion'}
          onRemove={handleRemoveColaborador}
        />
      </form>
    </div>
  );
};

export default ColaboradoresForm;
