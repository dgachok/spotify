import {takeLatest} from "redux-saga/effects";
import {ActionType} from "src/actions/auth.action";
import history from "src/utils/history"
import {setToken} from "src/utils/auth";

function* logout() {
    yield setToken('');
    history.push('/login');
}

export const authSaga = [
    takeLatest(ActionType.LOGOUT, logout)
];