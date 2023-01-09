import React from "react";
import styled from "styled-components";
import { ProductType } from "../types";
import deleteIcon from "../img/icon-delete.svg";

interface Props {
  cartList: ProductType[];
  setCartList: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

function CartModal(props: Props) {
  const { cartList, setCartList } = props;

  return (
    <Container>
      <Cart>Cart</Cart>
      {cartList.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <AddedProduct>
            <Image src={cartList[0].image} alt="image" />
            <Info>
              <Model>{cartList[0].model}</Model>
              <Price>${cartList[0].price + " x " + cartList[0].quantity}</Price>
              <Total>${cartList[0].total}</Total>
            </Info>
            <DeleteButton onClick={() => setCartList([])}>
              <Delete src={deleteIcon} alt="delete icon" />
            </DeleteButton>
          </AddedProduct>
          <CheckoutButton>Checkout</CheckoutButton>
        </>
      )}
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
`;

const Cart = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #1d2026;
  margin-bottom: 60px;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddedProduct = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const Info = styled.div``;

const Model = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #69707d;
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #69707d;
  margin-right: 10px;
`;

const Total = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: #1d2026;
`;

const DeleteButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Delete = styled.img``;

const CheckoutButton = styled.button`
  width: 312px;
  height: 56px;
  border-radius: 10px;
  border: none;
  background: #ff7e1b;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 24px;
  cursor: pointer;
  color: #ffffff;
  transition: all ease 0.2s;

  &:hover {
    background: #ffab6a;
  }
`;
