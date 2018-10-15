export enum ActionType {
    LOAD_NEW_SONGS = 'LOAD_NEW_SONGS',
    LOAD_NEW_SONGS_SUCCESS = 'LOAD_NEW_SONGS_SUCCESS',
    LOAD_SONGS_BY_SEARCH = 'LOAD_SONGS_BY_SEARCH',
    LOAD_SONGS_BY_SEARCH_SUCCESS = 'LOAD_SONGS_BY_SEARCH_SUCCESS',
    LOAD_RELATED_SONGS = 'LOAD_RELATED_SONGS',
    LOAD_RELATED_SONGS_SUCCESS = 'LOAD_RELATED_SONGS_SUCCESS',
}

export interface LoadSongsType {
    songs: any
}

export interface LoadSongsBySearchType {
    query: string
}

export interface LoadRelatedSongsType {
    id: string
}

export class LoadNewSongs {
    readonly type = ActionType.LOAD_NEW_SONGS;
}

export class LoadNewSongsSuccess {
    readonly type = ActionType.LOAD_NEW_SONGS_SUCCESS;

    constructor(public payload: LoadSongsType) {
    }
}

export class LoadSongsBySearch {
    readonly type = ActionType.LOAD_SONGS_BY_SEARCH;

    constructor(public payload: LoadSongsBySearchType) {
    }
}

export class LoadSongsBySearchSuccess {
    readonly type = ActionType.LOAD_SONGS_BY_SEARCH_SUCCESS;

    constructor(public payload: LoadSongsType) {
    }
}

export class LoadRelatedSongs {
    readonly type = ActionType.LOAD_RELATED_SONGS;

    constructor(public payload: LoadRelatedSongsType) {
    }
}

export class LoadRelatedSongsSuccess {
    readonly type = ActionType.LOAD_RELATED_SONGS_SUCCESS;

    constructor(public payload: LoadSongsType) {
    }
}

export type NewSongsAction =
    LoadNewSongs
    | LoadNewSongsSuccess
    | LoadSongsBySearch
    | LoadSongsBySearchSuccess
    | LoadRelatedSongs
    | LoadRelatedSongsSuccess