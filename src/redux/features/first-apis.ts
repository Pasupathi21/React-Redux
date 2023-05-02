import { createAsyncThunk, createSlice, PayloadAction, State }from '@reduxjs/toolkit'
import axios from 'axios'
import produce from 'immer'
export const demoApiCall = createAsyncThunk('test/apiCall', async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos/1')
})
const initialValue = {} as any
const apiSlice = createSlice({
    name: 'test',
    initialState: initialValue,
    extraReducers: (builder: any) => {
        builder.addCase(demoApiCall.pending, (state: any, action: any) => {
            console.log('Pending state', state, action)
        })
        builder.addCase(demoApiCall.fulfilled, (state: any, action: any) =>{
            console.log('fulfilled state', state, action)
        })
        builder.addCase(demoApiCall.rejected, (state: any, action: any) => {
            console.log('Reject state', state, action)
        })
    },
    reducers: {}
})

const ranVal = (input = 5) => Math.random() * +input

const dataArray = [
    {
        id: 1,
        value: ranVal()
    }
] as any

const anotherSlice = createSlice({
    name: 'arrayValue',
    initialState: dataArray,
    reducers: {
        addvalue: (state: any, action: any | never) => {
            console.log('value', action)
            console.log('state', state)
            produce(state, (draft: any) => {
                draft.second = [...state.second, { id: state.length + 1, value: ranVal(action.payload.val)}]
            })
            // state = [...state.second, { id: state.length + 1, value: ranVal(action.payload.val)}]
        }
    }
})

export const { actions } = anotherSlice
export const  secondReducer  = anotherSlice.reducer
export default  apiSlice.reducer