import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function makeStore() {
    let store;

    if (global.document) {
        store = createStore(reducer, window.pageDatas, composeWithDevTools(applyMiddleware(thunk)));
    } else {
        store = createStore(reducer, applyMiddleware(thunk));
    }
    return store
}



export default makeStore;