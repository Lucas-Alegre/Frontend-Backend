import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Recucers';
import thunk from 'redux-thunk';

/*const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    || compose;*/

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    //composeEnhancers(applyMiddleware(thunk)),
);

export default store;