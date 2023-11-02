const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    userInfo: localStorage.getItem('userInfo') || null
};

    

const userAuth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials : (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout : (state, action) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})

export const { setCredentials, logout } = userAuth.actions
export default userAuth.reducer