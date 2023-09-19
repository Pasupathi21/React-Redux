import { AnyAction, configureStore } from '@reduxjs/toolkit'
// import ApiReducer from './features/first-apis'
import { demoApiCall, allReducers } from '../redux/features/first-apis'
import newReducer  from './features/new-feature'

const store = configureStore({
    reducer: {
        // test: allReducers.apiRed,
        second: allReducers.another,
        newRed: newReducer
    }
})

export default store