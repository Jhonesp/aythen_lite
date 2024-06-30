import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arrayOne: [],
    arrayTwo: [],
    arrayThree: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addItemToArrayOne: (state, action) => {
            state.arrayOne.push(action.payload);
        },
        removeItemFromArrayOne: (state, action) => {
            state.arrayOne = state.arrayOne.filter(item => item.id !== action.payload);
        },
        addItemToArrayTwo: (state, action) => {
            state.arrayTwo.push(action.payload);
        },
        removeItemFromArrayTwo: (state, action) => {
            state.arrayTwo = state.arrayTwo.filter(item => item.id !== action.payload);
        },
        addItemToArrayThree: (state, action) => {
            state.arrayThree.push(action.payload);
        },
        removeItemFromArrayThree: (state, action) => {
            state.arrayThree = state.arrayThree.filter(item => item.id !== action.payload);
        },
    },
});

export const {
    addItemToArrayOne,
    removeItemFromArrayOne,
    addItemToArrayTwo,
    removeItemFromArrayTwo,
    addItemToArrayThree,
    removeItemFromArrayThree
} = dataSlice.actions;

export default dataSlice.reducer;
