import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import registerReducer from '../reducers/register'

const configureStore=()=>{
    const store=createStore(combineReducers({
        register:registerReducer,
    }),applyMiddleware(thunk))
    return store
}

export default configureStore