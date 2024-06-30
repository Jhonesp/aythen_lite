import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload;
        },
        clearText: (state) => {
            state.text = '';
        },
    },
});

export const { setText, clearText } = globalSlice.actions;
export default globalSlice.reducer;
