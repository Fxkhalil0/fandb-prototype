import { configureStore } from '@reduxjs/toolkit'
import TableSlice from './slices/TableSlice'

export const Store = configureStore({
    reducer: {
         TableSlice
    }
});