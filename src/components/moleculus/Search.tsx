import * as React from "react";
import {TextField} from "@material-ui/core";

interface Props {
    onSearchClick(query: string): void
}

interface State{
    query: string
}

class Search extends React.PureComponent<Props, State> {
    state: State = {
        query: ''
    };

    onChangeSearch = (event: any): void =>
        this.setState({query: event.target.value});

    onKeyPressSearch = (event: any): void => {
        const keycode = event.keyCode || event.which;
        if (keycode === 13 && this.state.query) {
            this.props.onSearchClick(this.state.query)
        }
    };

    render() {
        return (
            <div>
                <TextField
                    onChange={this.onChangeSearch}
                    onKeyPress={this.onKeyPressSearch}
                    label="Song's search"
                    helperText="Click enter for searching"
                    margin="normal"
                />
            </div>
        )
    }
}

export default Search;
