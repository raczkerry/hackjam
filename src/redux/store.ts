import initialState from './initialState'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'

const composeEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composeEnhancers())

export default store
