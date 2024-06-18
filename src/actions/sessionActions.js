import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkSession = createAsyncThunk('session/check', async () => {
    try {
        const response = await fetch('http://localhost/react_ciad/api/login/check_session.php', {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (!data.loggedIn) {
            localStorage.removeItem('user');
        }
        return data;
    } catch (error) {
        console.error('Error in checkSession:', error);
        localStorage.removeItem('user');
        throw error;
    }
});

export const createSession = createAsyncThunk('session/create', async ({ username, password }) => {
    try {
        const response = await fetch('http://localhost/react_ciad/api/login/create_session.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return data;
    } catch (error) {
        console.error('Error in createSession:', error);
        throw error;
    }
});
