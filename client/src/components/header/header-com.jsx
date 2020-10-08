import React from 'react';

import { Dropdown } from 'primereact/dropdown';

import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../assests/trello.svg';
import { signOutStart } from './../../redux/users/user.actions';
import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from './header-sty';

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <Dropdown>Dropdown</Dropdown>
        {currentUser ? (
          <OptionLinkContainer
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
            to='/dashboard'
          >
            ACCOUNT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
            to='/login'
          >
            LOGIN
          </OptionLinkContainer>
        )}
        {currentUser ? (
          <OptionLinkContainer
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
            to='/'
            onClick={() => dispatch(signOutStart(currentUser.token))}
          >
            SIGNOUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
            }}
            to='/signup'
          >
            SIGNUP
          </OptionLinkContainer>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
