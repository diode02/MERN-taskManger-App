import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assests/trello.svg";
import HeaderOverlay from "../headerOverlay/headerOverlay-com";
import { Toast } from "primereact/toast";

import { signOutStart } from "./../../redux/users/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from "./header-sty";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  let toast;
  let imgData = "data:image/png;base64,";
  imgData += useSelector((state) => state.user.avatar);

  let items = [
    {
      label: "Account",
      icon: "pi pi-user",
      url: "/dashboard",
    },
    {
      label: "Signout",
      icon: "pi pi-sign-out",
      command: () => {
        dispatch(signOutStart(currentUser.token));
        toast.show({
          severity: "success",
          summary: "signout",
          detail: "Signout Successfully",
          life: 3000,
        });
      },
    },
  ];
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Toast
        ref={(el) => {
          toast = el;
        }}
      ></Toast>

      <OptionsContainer>
        {currentUser ? (
          <HeaderOverlay items={items} imgData={imgData} />
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
        {currentUser ? null : (
          <OptionLinkContainer
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
            to="/signup"
          >
            SIGNUP
          </OptionLinkContainer>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
