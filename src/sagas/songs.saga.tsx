import {call, put, takeLatest} from "redux-saga/effects";
import {
    ActionType,
    LoadNewSongsSuccess, LoadRelatedSongs,
    LoadRelatedSongsSuccess,
    LoadSongsBySearch,
    LoadSongsBySearchSuccess
} from "src/actions/songs.action";
import {API, authHeaders} from "src/utils/auth";
import {Logout} from "src/actions/auth.action";

function* loadNewSongs() {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: authHeaders()
    };
    const url: URL = new URL(`${API}/browse/new-releases`);
    url.searchParams.set('offset', '0');
    url.searchParams.set('limit', '20');
    const response = yield call(fetchSongs, url, requestOptions);

    if (response.error && response.error.status === 401) {
        yield put(new Logout())
    }
    if (response.albums) {
        yield put(new LoadNewSongsSuccess(response.albums.items));
    }
}

function* loadSongsBySearch(action: LoadSongsBySearch) {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: authHeaders()
    };
    const url: URL = new URL(`${API}/search`);
    url.searchParams.set('q', action.payload.query);
    url.searchParams.set('limit', '20');
    url.searchParams.set('type', 'album,track');
    const response = yield call(fetchSongs, url, requestOptions);

    if (response.error && response.error.status === 401) {
        yield put(new Logout())
    }
    if (response.albums) {
        yield put(new LoadSongsBySearchSuccess(response.albums.items));
    }
}

function* loadRelatedSongs(action: LoadRelatedSongs) {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: authHeaders()
    };
    const url: URL = new URL(`${API}/artists/${action.payload.id}/related-artists`);
    url.searchParams.set('limit', '20');
    const response = yield call(fetchSongs, url, requestOptions);

    if (response.error && response.error.status === 401) {
        yield put(new Logout())
    }
    if (response.artists) {
        yield put(new LoadRelatedSongsSuccess(response.artists));
    }
}

const fetchSongs = (url: URL, requestOptions: RequestInit) =>
    fetch(url.href, requestOptions).then(response => response.json());

export const songsSaga = [
    takeLatest(ActionType.LOAD_NEW_SONGS, loadNewSongs),
    takeLatest(ActionType.LOAD_SONGS_BY_SEARCH, loadSongsBySearch),
    takeLatest(ActionType.LOAD_RELATED_SONGS, loadRelatedSongs)
];


