import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assests/trello.svg";
import { signOutStart } from "./../../redux/users/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from "./header-sty";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <OptionLinkContainer to="/dashboard">ACCOUNT</OptionLinkContainer>
        ) : (
          <OptionLinkContainer to="/login">LOGIN</OptionLinkContainer>
        )}
        {currentUser ? (
          <OptionLinkContainer
            to="/"
            onClick={() => dispatch(signOutStart(currentUser.token))}
          >
            SIGNOUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer to="/login">SIGNUP</OptionLinkContainer>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
