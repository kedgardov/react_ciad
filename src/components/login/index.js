import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createSession } from '../../actions/sessionActions';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await dispatch(createSession({ username, password })).unwrap();

        if (result.success) {
            setMessage('Login successful');
            navigate('/');
        } else {
            setMessage(result.message || 'Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                {message && <div className="alert alert-danger mt-3">{message}</div>}
            </div>
        </div>
    );
};

export default Login;
