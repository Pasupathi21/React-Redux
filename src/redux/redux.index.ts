import { AnyAction, configureStore } from '@reduxjs/toolkit'
import ApiReducer from './features/first-apis'
import { demoApiCall, actions, secondReducer } from '../redux/features/first-apis'

const store = configureStore({
    reducer: {
        test: ApiReducer,
        second: secondReducer
    }
})

export default store