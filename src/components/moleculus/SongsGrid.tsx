import * as React from "react";
import GridList from "@material-ui/core/GridList";
import SongItem from "src/components/atoms/SongItem";
import styled from "styled-components";

interface Props {
    songs: any

    onSongClick(id: string): void
}

const SongsGridStyled = styled(GridList)`
    display: flex;
    justify-content: center;
`;

class SongsGrid extends React.PureComponent<Props> {
    render() {
        const {songs, onSongClick} = this.props;
        return (
            <div>
                <SongsGridStyled>
                    {songs.map((song: any) => (
                        <SongItem key={song.id} song={song} onSongClick={onSongClick} />
                    ))}
                </SongsGridStyled>
            </div>
        )
    }
}

export default SongsGrid;
