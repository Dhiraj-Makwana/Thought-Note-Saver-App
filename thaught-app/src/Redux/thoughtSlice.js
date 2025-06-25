import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const thoughtSlice = createSlice({
  name: "thought",
  initialState: {
    thoughts: localStorage.getItem("thoughts")
      ? JSON.parse(localStorage.getItem("thoughts"))
      : [],
  },
  reducers: {
    addToThought: (state, action) => {
      const newThought = action.payload;

      // Check if the title already exists
      const isTitleDuplicate = state.thoughts.some(
        (thought) =>
          thought.title.trim().toLowerCase() ===
          newThought.title.trim().toLowerCase()
      );

      if (isTitleDuplicate) {
        toast.error("A thought with this title already exists.");
        return; // ❌ Don't proceed
      }

      // Check if the content already exists
      const isContentDuplicate = state.thoughts.some(
        (thought) =>
          thought.content.trim().toLowerCase() ===
          newThought.content.trim().toLowerCase()
      );

      if (isContentDuplicate) {
        toast.error("A thought with the same content already exists.");
        return; // ❌ Don't proceed
      }

      // If no duplicates, add the thought
      state.thoughts.push(newThought);
      localStorage.setItem("thoughts", JSON.stringify(state.thoughts));
      toast.success("Thought created successfully");
    },

    updateToThought: (state, action) => {
      const thought = action.payload
      const  index = state.thoughts.findIndex((item) => item._id === thought._id)

      if (index >= 0) {
        state.thoughts[index] = thought;

        localStorage.setItem("thoughts", JSON.stringify(state.thoughts));

        toast.success("Thought updated")
      }
    },

    resetAllThought: (state) => {
      state.thoughts = [];

      localStorage.removeItem("Thoughts");
      toast.success("All thoughts removed");
    },

    removeFromThought: (state, action) => {
      const thoughtId = action.payload;

      console.log(thoughtId);
      const index = state.thoughts.findIndex((item) => item.id === thoughtId);

      if (index >= 0) {
        state.thoughts.splice(index, 1);

        localStorage.setItem("thoughts", JSON.stringify(state.thoughts));
        toast.success("Thought deleted");
      }
      else {
        toast.error("Thought not found");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToThought,
  updateToThought,
  resetAllThought,
  removeFromThought,
} = thoughtSlice.actions;

export default thoughtSlice.reducer;
