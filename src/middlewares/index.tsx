import {AnyAction, Dispatch, Middleware} from 'redux'
import {ApplicationState} from "src/store";
import {AuthAction} from "src/actions/auth.action";
import {NewSongsAction} from "src/actions/songs.action";

type Actions = AuthAction | NewSongsAction // all action unions

export const actionToPlainObject: Middleware<ApplicationState, Actions> =
    store => (next: Dispatch) => (action: AnyAction) => {
        if (isObjectLike(action)) {
            return next({...action})
        }
        throw new Error(`action must be an object`)
    };

function isObjectLike(val: any): val is {} {
    return isPresent(val) && typeof val === 'object'
}

function isPresent(obj: any) {
    return obj !== undefined && obj !== null
}