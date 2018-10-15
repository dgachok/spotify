import {Reducer} from "redux";
import {ActionType, NewSongsAction} from "src/actions/songs.action";

export interface SongsState {
    songs: any
    relatedSongs: any
}
const initialState: SongsState = {
    songs: [],
    relatedSongs: []
};

const loadSongs = (state: SongsState, songs: any): SongsState => ({...state, songs: songs});
const loadRelatedSongs = (state: SongsState, songs: any): SongsState => ({...state, relatedSongs: songs});

const reducer: Reducer<SongsState> = (state: SongsState = initialState, action: NewSongsAction) => {
    switch (action.type) {
        case ActionType.LOAD_NEW_SONGS_SUCCESS:
        case ActionType.LOAD_SONGS_BY_SEARCH_SUCCESS:
            return loadSongs(state, action.payload);
        case ActionType.LOAD_RELATED_SONGS_SUCCESS:
            return loadRelatedSongs(state, action.payload);
        default:
            return state
    }
};

export default reducer;