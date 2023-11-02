import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loginAsync = createAsyncThunk('users/login', async (data) => {
    const port = process.env.PORT
    const response = await fetch(`http://localhost:8000/api/login`, {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    })

    const result = await response.json()
    return result
})

export const logoutAsyn = createAsyncThunk('users/logout', async () => {
    const port = process.env.PORT
    const response = await fetch(`http://localhost:${port}/api/logout`, {
        method: 'POST',
        credentials: 'include',
    })

    const result = await response.json()
    return result
})

// add the rest of calls register ...

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
            .addCase(logoutAsyn.fulfilled, (state, action) => {
                state.user = null
                state.error = null
            })

            // add other reducers register, update ..
    }
})


export default userSlice.reducer