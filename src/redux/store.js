import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../redux/slices/filterSlice'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
})

console.log(store)