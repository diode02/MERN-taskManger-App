import React from "react";
import { ReactComponent as Logo } from "../../assests/trello.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from "./header-sty";

const Header = (props) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLinkContainer to="/signin">LOGIN</OptionLinkContainer>
        <OptionLinkContainer to="/signup">SIGNUP</OptionLinkContainer>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
