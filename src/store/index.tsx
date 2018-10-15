import {createStore, applyMiddleware, combineReducers, Reducer, Store} from "redux";
import createSagaMiddleware from "redux-saga"
import songsReducer, {SongsState} from "src/reducers/songs.reducer";
import {actionToPlainObject} from "src/middlewares";
import { composeWithDevTools } from 'redux-devtools-extension';

export interface ApplicationState {
    songs: SongsState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    songs: songsReducer,
});

export const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}): Store<ApplicationState> =>
    createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(actionToPlainObject, sagaMiddleware))
    );