import { createSlice } from '@reduxjs/toolkit'

export const thoughtSlice = createSlice({
  name: 'thought',
  initialState: {
    thoughts: localStorage.getItem("thought")
    ? JSON.parse(localStorage.getItem("thought"))
    : []
  },
  reducers: {
    addToThaught: (state,action) => {
      const thought = action.payload;
      state.thoughts.push(thought);
      localStorage.setItem("thoughts", state.thoughts);
    },
    updateToThaught: (state,action) => {
      
    },
    resetAllThaught: (state, action) => {
      
    },
    removeFromThaught: (state,action) => {

    }
  }
})

// Action creators are generated for each case reducer function
export const { addToThaught, updateToThaught, resetAllThaught, removeFromThaught } = thoughtSlice.actions

export default thoughtSlice.reducer