import React from "react";
import styled from "styled-components";

interface Props {
  cartMenu: boolean;
  setCartMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartModal(props: Props) {
  const { cartMenu, setCartMenu } = props;

  return (
    <Container>
      <Cart>Cart</Cart>
    </Container>
  );
}

export default CartModal;

const Container = styled.div`
  width: 360px;
  height: 256px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  padding: 24px 24px 32px 24px;
  position: absolute;
  top: 80px;
  left: 8px;
`;

const Cart = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #1d2026;
`;
