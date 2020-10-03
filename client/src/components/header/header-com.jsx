import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assests/trello.svg";
import { getAvatarAPI } from "../../utils/user.utils";
import { signOutStart } from "./../../redux/users/user.actions";
import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from "./header-sty";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  let imgData = "data:image/png;base64,";
  imgData += useSelector((state) => state.user.avatar);

  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        {currentUser ? (
          <OptionLinkContainer
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/dashboard"
          >
            <img
              src={imgData}
              alt="avatar of user"
              style={{
                borderRadius: "50%",
                height: "50px",
              }}
            ></img>
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/login"
          >
            LOGIN
          </OptionLinkContainer>
        )}
        {currentUser ? (
          <OptionLinkContainer
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/"
            onClick={() => dispatch(signOutStart(currentUser.token))}
          >
            SIGNOUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/login"
          >
            SIGNUP
          </OptionLinkContainer>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
