import { createSlice } from '@reduxjs/toolkit'
export const incdecSlice = createSlice({
    name: 'incdec',
    initialState:parseInt(0),
    reducers: {
        INC: (state, action) => {
            if (state === 0) return action.payload;

            else return state =parseInt(state)+parseInt(action.payload);
        },
        MUL: (state, action) => {

            return state *= action.payload;
        },

        RES: (state, action) => {
            return state * 0;
        },

        DIV: (state, action) => {
            return state /= action.payload;
        },
        DEC: (state, action) => {
            return state -= action.payload;
        }
    }
})
export const { INC, MUL, RES, DIV, DEC } = incdecSlice.actions;
export default incdecSlice.reducer;