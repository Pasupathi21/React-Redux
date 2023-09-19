import { createSlice } from "@reduxjs/toolkit";

const newSlice = createSlice({
  name: "new-slice",
  initialState: {
    displayName: [],
  },
  reducers: {
    newOneSlice: (state: any, action: Record<any, any>) => {
      state.displayName =[ ...state.displayName, action.payload.name];
    },
  },
});

export const { newOneSlice } = newSlice.actions
export default newSlice.reducer
