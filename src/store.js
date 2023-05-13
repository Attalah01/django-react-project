// import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';


// const initialState = {}

// const middleware = [thunk, logger]

// const store = createStore(
//     rootReducer,
//     initialState,
//     // applyMiddleware(...middleware)
//     composeWithDevTools(applyMiddleware(...middleware))
// );

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;