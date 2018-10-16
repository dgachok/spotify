import * as React from "react";
import {getToken, CLIENT_ID, REDIRECT_URL} from "src/utils/auth";
import history from "src/utils/history";
import {Button} from "@material-ui/core";
import logo from "src/logo.png"
import styled from "styled-components";

const LogoStyled = styled.img`
    width: 300px;
    padding: 20px;
`;
const LoginStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

class Login extends React.PureComponent {
    componentDidMount() {
        if (getToken()) history.push('/')
    }

    render() {
        const url = new URL('https://accounts.spotify.com/authorize');
        url.searchParams.set('response_type', 'token');
        url.searchParams.set('redirect_uri', REDIRECT_URL);
        url.searchParams.set('client_id', CLIENT_ID);

        return (
            <LoginStyled>
                <LogoStyled src={logo} />
                <Button color="default" href={url.href}>
                    Login to Spotify
                </Button>
            </LoginStyled>
        )
    }
}

export default Login;
