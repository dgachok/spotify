import * as React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

interface Props {
    song: any

    onSongClick(id: string): void
}

class SongItem extends React.PureComponent<Props> {
    handleSongClick = () => {
        const {song, onSongClick} = this.props;
        if (song.artists[0]) onSongClick(song.artists[0].id);
    };

    render() {
        const {song} = this.props;
        return (
            <GridListTile key={song.id} onClick={this.handleSongClick}>
                <img src={song.images[1].url} alt={song.name}/>
                <GridListTileBar
                    title={song.name}
                    titlePosition="bottom"
                />
            </GridListTile>
        )
    }
}

export default SongItem;