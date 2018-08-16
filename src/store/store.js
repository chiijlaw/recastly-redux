import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';


// var initialState = {
//     videoList: exampleVideoData,
//     currentVideo: exampleVideoData[0]
// };

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store
