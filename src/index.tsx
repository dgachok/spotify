import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from "react-redux";
import {configureStore} from "src/store";
import {sagaMiddleware} from "./store";
import rootSaga from "./sagas";

const store = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root") as HTMLElement
);

registerServiceWorker();
