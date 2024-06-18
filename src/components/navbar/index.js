import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkSession } from '../../actions/sessionActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost/react_ciad/api/login/remove_session.php', {
        method: 'POST',
        credentials: 'include', // Include credentials
      });

      if (response.ok) {
        // Clear client-side session state
        localStorage.removeItem('user');
        dispatch(checkSession());
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar curso..."
            aria-label="Search" aria-describedby="basic-addon2">
          </input>
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search fa-sm"></i>
            </button>
          </div>
        </div>
      </form>

      <div className="navbar ml-auto d-flex align-items-center">
        <p className="mb-0 mr-3"><strong>{user ? user.docente : 'Nombre del Profesor'}</strong></p>
        <button className="btn btn-link" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
