import * as React from "react";
import {getUrlParams} from "src/utils/params";
import {Action, Dispatch} from "redux";
import {getToken, setToken} from "src/utils/auth";
import {LoadNewSongs, LoadRelatedSongs, LoadSongsBySearch} from "src/actions/songs.action";
import {connect} from "react-redux";
import {getRelatedSongs, getSongs} from "src/selectors/songs.selector";
import {createStructuredSelector} from "reselect";
import history from "src/utils/history";
import SongsGrid from "src/components/moleculus/SongsGrid";
import Header from "src/components/moleculus/Header";
import ModalWindow from "src/components/moleculus/ModalWindow";
import {Logout} from "src/actions/auth.action";
import styled from "styled-components";

interface Props {
    dispatch: Dispatch<Action>
    songs: any
    relatedSongs: any
}

interface State {
    open: boolean
}

const NoSongsStyled = styled.div`
    width: 100%;
    text-align: center;
`;

class Home extends React.PureComponent<Props, State> {
    state: State = {
        open: false,
    };

    componentDidMount() {
        if (!getToken()) {
            const params = getUrlParams(window.location.href);
            setToken(params.access_token);
            if (params.access_token) {
                setToken(params.access_token);
            } else {
                history.push('/login')
            }
        }
        this.props.dispatch(new LoadNewSongs())
    }

    onSearchClick = (query: string) =>
        this.props.dispatch(new LoadSongsBySearch({query}));

    handleClose = () =>
        this.setState(() => ({open: false}));

    onSongClick = (id: string) => {
        this.setState(() => ({open: true}));
        this.props.dispatch(new LoadRelatedSongs({id}));
    };

    onLogoutClick = () =>
        this.props.dispatch(new Logout());

    render() {
        const {songs, relatedSongs} = this.props;
        return (
            <div>
                <Header onSearchClick={this.onSearchClick} onLogoutClick={this.onLogoutClick}/>
                {
                    songs.length
                        ? (<SongsGrid songs={songs} onSongClick={this.onSongClick}/>)
                        : (<NoSongsStyled>No songs found</NoSongsStyled>)
                }
                <ModalWindow songs={relatedSongs} open={this.state.open} handleClose={this.handleClose}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    songs: getSongs,
    relatedSongs: getRelatedSongs,
});

export default connect(mapStateToProps)(Home);
