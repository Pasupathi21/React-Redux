import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import produce from "immer";
export const demoApiCall = createAsyncThunk("test/apiCall", async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/todos/1");
});
const initialValue = {} as any;
const apiSlice = createSlice({
  name: "test",
  initialState: initialValue,
  extraReducers: (builder: any) => {
    builder.addCase(demoApiCall.pending, (state: any, action: any) => {
      console.log("Pending state", state, action);
    });
    builder.addCase(demoApiCall.fulfilled, (state: any, action: any) => {
      console.log("fulfilled state", state, action);
    });
    builder.addCase(demoApiCall.rejected, (state: any, action: any) => {
      console.log("Reject state", state, action);
    });
  },
  reducers: {},
});

const ranVal = (input = 5) => Math.random() * +input;
const initialSte = {
  displayName: [],
}

const anotherSlice = createSlice({
  name: "arrayvalue",
  initialState: initialSte,
  reducers: {
    addvaluenew: (state: any, action: Record<any, any>) => {
      state.displayName =[ ...state.displayName, {id: state.displayName.length , value : ranVal(action.payload.name)}];
    },
  },
});

export const { addvaluenew } = anotherSlice.actions;
export const allReducers = { 
  another: anotherSlice.reducer,
  apiRed: apiSlice.reducer
};
console.log('R', anotherSlice.reducer)
// export default apiSlice.reducer;
