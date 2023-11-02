import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginAsync = createAsyncThunk('users/login', async (data) => {
    const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();

    return result;
});


export const logoutAsync = createAsyncThunk('users/logout', async () => {
    const port = process.env.PORT
    const response = await fetch(`http://localhost:8000/api/logout`, {
        method: 'POST',
        credentials: 'include',
    })

    const result = await response.json()
    return result
})

// add the rest of calls register ...

export const registerAsync = createAsyncThunk('users/register', async (data) => {
    const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
    })

    const result = response.json()
    return result
})

const userSlice = createSlice({
    name: 'userLogin',
    initialState: {
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.user = action.payload
                state.error = null
            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                state.user = null
                state.error = null
            })
            .addCase(registerAsync.fulfilled, (state, action) => {
                state.user = null
                state.user = null
            })
        }
})


export default userSlice.reducer