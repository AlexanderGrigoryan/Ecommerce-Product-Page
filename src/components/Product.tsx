import React from "react";
import styled from "styled-components";
import CartWhite from "../svg/CartWhite";
import Minus from "../svg/Minus";
import Plus from "../svg/Plus";
import { ProductType } from "../types";
import miniImage from "../img/image-product-1-thumbnail.jpg";

interface Props {
  cartList: ProductType[];
  setCartList: React.Dispatch<React.SetStateAction<ProductType[]>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function Product(props: Props) {
  const { cartList, setCartList, count, setCount } = props;

  const addToCart = () => {
    if (
      count > 0 &&
      cartList.find(
        (element: ProductType) =>
          element.model === "Fall Limited Edition Sneakers"
      )
    ) {
      const updateQuantityAndTotal = [...cartList];
      updateQuantityAndTotal[0].quantity =
        updateQuantityAndTotal[0].quantity + count;
      updateQuantityAndTotal[0].total =
        updateQuantityAndTotal[0].total +
        count * updateQuantityAndTotal[0].price;
      setCartList(updateQuantityAndTotal);
      setCount(0);
    } else if (count > 0) {
      setCartList([
        ...cartList,
        {
          image: miniImage,
          model: "Fall Limited Edition Sneakers",
          price: 125,
          quantity: count,
          total: count * 125,
        },
      ]);
      setCount(0);
    }
  };

  return (
    <Container>
      <Brand>Sneaker Company</Brand>
      <Model>Fall Limited Edition Sneakers</Model>
      <Description>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Description>
      <PriceContainer>
        <PriceBlock>
          <Price>$125.00</Price>
          <DiscountPercent>50%</DiscountPercent>
        </PriceBlock>
        <Discount>$250.00</Discount>
      </PriceContainer>
      <CounterBtnContainer>
        <Counter>
          <CountButton
            onClick={() => (count !== 0 ? setCount(count - 1) : null)}
          >
            <Minus />
          </CountButton>
          <Number>{count}</Number>
          <CountButton onClick={() => setCount(count + 1)}>
            <Plus />
          </CountButton>
        </Counter>
        <Button onClick={addToCart}>
          <CartWhite />
          Add to cart
        </Button>
      </CounterBtnContainer>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  margin: 24px 0 88px;

  @media screen and (min-width: 768px) {
    width: 445px;
  }
`;

const Brand = styled.h1`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 1.8461538553237915px;
  text-transform: uppercase;
  color: #ff7e1b;
`;

const Model = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  margin: 15px 0 19px;
  color: #1d2026;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  color: #69707d;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }
`;

const PriceBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Price = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  color: #1d2026;
`;

const DiscountPercent = styled.div`
  width: 51px;
  height: 27px;
  background: #ffeee2;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #ff7e1b;
`;

const Discount = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-decoration: line-through;
  color: #b6bcc8;
`;

const CounterBtnContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f8fd;
  border-radius: 10px;
  height: 56px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const CountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Number = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #1d2026;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  border: none;
  cursor: pointer;
  margin-top: 16px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;
