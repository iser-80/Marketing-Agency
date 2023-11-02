import { configureStore } from '@reduxjs/toolkit'
import userAuthReducer from '../slices/userAuth'


const store = configureStore({
    reducer: {
        auth: userAuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
})

export default store
