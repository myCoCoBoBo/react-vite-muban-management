
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from 'redux-thunk'

import NumReducer from "./NumStatus/reducer"
import ArrReducer from "./ArrStatus/reducer"
//组合各个模块的reducer
const reducers=combineReducers({NumReducer,ArrReducer})


const store= legacy_createStore(reducers,applyMiddleware(thunk))

export default store 