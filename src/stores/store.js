import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlide'
import categoriesSelect from './categoriesSelect'

export default configureStore({
    reducer: {
        counter: counterReducer,
        categoriesSelect: categoriesSelect
    },
})  