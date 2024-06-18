import { createSlice } from '@reduxjs/toolkit';
import { checkSession, createSession } from '../actions/sessionActions';

const initialState = {
    loggedIn: false,
    status: 'idle',
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(checkSession.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(checkSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loggedIn = action.payload.loggedIn;
                state.user = action.payload.user || null;
            })
            .addCase(checkSession.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(createSession.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createSession.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loggedIn = action.payload.success;
                state.user = action.payload.user || null;
            })
            .addCase(createSession.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default sessionSlice.reducer;
