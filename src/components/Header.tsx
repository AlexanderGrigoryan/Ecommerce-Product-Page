import React, { useState } from "react";
import styled from "styled-components";
import burgerIcon from "../img/icon-menu.svg";
import logo from "../img/logo.svg";
import Cart from "../svg/Cart";
import AvatarIcon from "../img/image-avatar.png";
import BurgerWindow from "../components/BurgerWindow";

function Header() {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  return (
    <>
      <Container>
        <NavContainer>
          <BurgerButton onClick={() => setBurgerMenu(true)}>
            <Burger src={burgerIcon} alt="burger icon" />
          </BurgerButton>
          <Logo src={logo} alt="logo" />
        </NavContainer>
        <UserContainer>
          <CartButton>
            <Cart />
          </CartButton>
          <Avatar src={AvatarIcon} alt="avatar" />
        </UserContainer>
      </Container>
      {burgerMenu ? <BurgerWindow setBurgerMenu={setBurgerMenu} /> : null}
    </>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 0 25px;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const BurgerButton = styled.button`
  width: 16px;
  height: 15px;
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Burger = styled.img``;

const Logo = styled.img``;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 22px;
`;

const CartButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  transition: all ease 0.2s;

  &:hover {
    border: 2px solid #ff7e1b;
    border-radius: 50%;
  }
`;
