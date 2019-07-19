import {createStore,applyMiddleware} from 'redux'
import state from './state.js'
import reducer from './reducer.js'
import thunk from 'redux-thunk'


let store = createStore(
  reducer,state,applyMiddleware(thunk)
)

export default store
