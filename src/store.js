import { createSlice, configureStore } from "@reduxjs/toolkit";

let state1 = createSlice({
    name:"state1",
    initialState: {count : 0},
    reducers: {
        countChange(state) {
            state.count = state.count + 1;
        }
    }
})

export default configureStore({
    reducer: { 
      state1: state1.reducer,
    }
  })

export let {countChange} = state1.actions