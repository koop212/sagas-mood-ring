import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { put, takeEvery } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga';
import axios from 'axios'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_IMAGES', fetchImages);
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('ADD_IMGTAG', addImgTag);
    yield takeEvery('FETCH_IMG_TAG', fetchImgTag);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store images returned from the server
const images = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return action.payload;
        default:
            return state;
    }
}


// Get images from server
function* fetchImages() {
    try{
        let imageResponse = yield axios.get('/api/image');
        console.log(imageResponse);
        yield put({type: 'SET_IMAGES', payload: imageResponse.data})
    }catch(error) {
        console.log('Error in fetchImage', error);
        
    }
}

// fetch all tags from server
function* fetchTags() {
    try{
        let tagResponse = yield axios.get('/api/tag');
        yield put({type: 'SET_TAGS', payload: tagResponse.data})
    }catch(error) {
        console.log('Error in fetchTags', error);
    }
}

// Add tag_id and image_id to database
function* addImgTag(action) {
    yield axios.post('/api/image_tag', action.payload);
    yield put({ type:'FETCH_IMG_TAG'});
}

// Fetch the Tag names and Image id from the juntion table in the database.
function* fetchImgTag() {
    try {
        let imgTagResponse = yield axios.get('/api/image_tag');
        yield put({ type: 'SET_IMG_TAGS', payload: imgTagResponse.data })
    } catch (error) {
        console.log('Error in fetchImgTag', error);
    }
}

// Used to store the images tags (e.g. 'Inspirational', 'Calming', 'Energy', etc.)
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the matching tag names and image id
const imgTags = (state = [], action) => {
    switch (action.type) {
        case 'SET_IMG_TAGS':
            return action.payload;
            default: 
                return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        images,
        tags,
        imgTags
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
