import {ApplicationState} from "src/store";
import {createSelector} from "reselect";

export const getData = (state: ApplicationState) => state.songs;

export const getSongs = createSelector(getData, data => data.songs);
export const getRelatedSongs = createSelector(getData, data => data.relatedSongs);
