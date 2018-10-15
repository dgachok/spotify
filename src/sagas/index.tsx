import {all} from "redux-saga/effects";
import {authSaga} from "./auth.saga";
import {songsSaga} from "./songs.saga";

export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...songsSaga,
    ]);
}