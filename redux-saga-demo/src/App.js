import "./App.css";
import Counter from "./components/counter";
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import { actions } from "./Actions";
import logger from "redux-logger";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const callActions = (type) => {
  store.dispatch({ type });
};

function App() {
  return (
    <>
      <Counter
        value={store.getState()}
        incrementHandler={() => callActions(actions.increment)}
        decrementHandler={() => callActions(actions.decrement)}
        increment2Handler={() => callActions(actions.incrementby2sec)}
      />
    </>
  );
}

export default App;
