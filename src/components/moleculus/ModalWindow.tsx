import * as React from "react";
import Modal from "@material-ui/core/Modal";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

interface Props {
    open: boolean
    songs: any

    handleClose(): void
}

const ModalStyled = styled.div`
    padding: 10px
    position: absolute;
    background-color: #fff;
    width: 350px;
    height: 400px;
    overflow-y: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

class ModalWindow extends React.PureComponent<Props> {
    render() {
        const {open, handleClose, songs} = this.props;
        return (
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <ModalStyled>
                        Related artists
                        <List>
                            {!!songs.length && songs.map((song: any) => (
                                <ListItem key={song.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img src={song.images[1].url} />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={song.name}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </ModalStyled>
                </Modal>
            </div>
        )
    }
}

export default ModalWindow;
