import * as React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

interface Props {
    onLogoutClick(): void
}

const LogoutStyled = styled(Button)`
  height: 50px;
`;

class Logout extends React.PureComponent<Props> {
    render() {
        return (
            <LogoutStyled variant="contained" color="default" onClick={this.props.onLogoutClick}>
                Logout
            </LogoutStyled>
        )
    }
}

export default Logout;
