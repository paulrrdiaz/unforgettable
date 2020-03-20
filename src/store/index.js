import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "store/reducers";
import sagas from "store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));
sagaMiddleware.run(sagas);
export default store;
