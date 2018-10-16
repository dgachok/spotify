import Search from "src/components/moleculus/Search";
import * as React from "react";
import logo from "src/logo.png"
import styled from "styled-components";
import Logout from "src/components/atoms/Logout";

interface Props {
    onSearchClick(query: string): void

    onLogoutClick(): void
}

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px 20px;
    flex-wrap: wrap;
`;

const LogoStyled = styled.img`
    width: 220px;
    height: 63px;
    padding: 10px;
`;
const SearchBarStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;

class Header extends React.PureComponent<Props> {
    render() {
        return (
            <HeaderStyled>
                <LogoStyled src={logo}/>
                <SearchBarStyled>
                    <Search onSearchClick={this.props.onSearchClick}/>
                    <Logout onLogoutClick={this.props.onLogoutClick}/>
                </SearchBarStyled>

            </HeaderStyled>
        )
    }
}

export default Header;
