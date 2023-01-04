import { createSlice } from '@reduxjs/toolkit'

const categoriesSelect = createSlice({
    name: "categoriesSelect",
    initialState: {
        value: "Month"
    },
    reducers: {
        increment: (state) => {
            console.log("HERE:", state.value)
        }
    }
})

export const { increment } = categoriesSelect.actions

export default categoriesSelect.reducer