import React, { useState } from "react";
import styled from "styled-components";
import burgerIcon from "../img/icon-menu.svg";
import logo from "../img/logo.svg";
import Cart from "../svg/Cart";
import AvatarIcon from "../img/image-avatar.png";
import BurgerWindow from "../components/BurgerWindow";
import { ProductType } from "../types";

interface Props {
  cartMenu: boolean;
  setCartMenu: React.Dispatch<React.SetStateAction<boolean>>;
  cartList: ProductType[];

}

function Header(props: Props) {
  const { cartMenu, setCartMenu, cartList} =
    props;

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
          <CartButton onClick={() => setCartMenu(!cartMenu)}>
            <Cart />
            {cartList.length === 0 ? null : (
              <ItemsCounter>{cartList[0].quantity}</ItemsCounter>
            )}
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
  position: relative;
`;

const CartButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const ItemsCounter = styled.div`
  width: 19px;
  height: 13px;
  border-radius: 6.5px;
  background: #ff7e1b;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  color: #ffffff;
  position: absolute;
  top: -4px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
