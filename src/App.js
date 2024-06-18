import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkSession } from './actions/sessionActions';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/protectedRoute';

const App = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.session.status);
    const loggedIn = useSelector((state) => state.session.loggedIn);

    useEffect(() => {
        dispatch(checkSession());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login />} />
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
