import React from "react";
import styled from "styled-components";
import closeIcon from "../img/icon-close.svg";

interface Props {
  setBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerWindow(props: Props) {
  const { setBurgerMenu } = props;

  return (
    <MainBackground>
      <BurgerBlock>
        <CloseButton onClick={() => setBurgerMenu(false)}>
          <Close src={closeIcon} alt="close" />
        </CloseButton>
        <NavList>
          <ListItem>
            <ListLink href="">Collections</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="">Men</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="">Women</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="">About</ListLink>
          </ListItem>
          <ListItem>
            <ListLink href="">Contact</ListLink>
          </ListItem>
        </NavList>
      </BurgerBlock>
    </MainBackground>
  );
}

export default BurgerWindow;

const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.75);
  width: 100%;
  z-index: 10;
`;

const BurgerBlock = styled.div`
  padding: 25px 0 0 24px;
  background: #ffffff;
  width: 250px;
  height: 100vh;
`;

const CloseButton = styled.button`
  margin-bottom: 54px;
  cursor: pointer;
  border: none;
  background: inherit;
`;

const Close = styled.img``;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const ListItem = styled.li``;

const ListLink = styled.a`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-decoration: none;
  color: #1d2026;

  &:hover {
    text-decoration: underline;
  }
`;
