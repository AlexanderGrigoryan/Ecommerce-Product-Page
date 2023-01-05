import React, { useState } from "react";
import styled from "styled-components";
import product1 from "../img/image-product-1.jpg";
import product2 from "../img/image-product-2.jpg";
import product3 from "../img/image-product-3.jpg";
import product4 from "../img/image-product-4.jpg";
import Next from "../svg/Next";
import Previous from "../svg/Previous";

function MobileSlider() {
  const [productIndex, setProductIndex] = useState<number>(0);

  const gallery = [product1, product2, product3, product4];

  const minusHandler = () => {
    if (productIndex === 0) {
      return;
    } else {
      setProductIndex(productIndex - 1);
    }
  };

  const plusHandler = () => {
    if (productIndex === gallery.length - 1) {
      return;
    } else {
      setProductIndex(productIndex + 1);
    }
  };

  return (
    <Container>
      <Img src={gallery[productIndex]} />
      <Buttons>
        <PreviousButton onClick={minusHandler}>
          <Previous />
        </PreviousButton>
        <NextButton onClick={plusHandler}>
          <Next />
        </NextButton>
      </Buttons>
    </Container>
  );
}

export default MobileSlider;

const Container = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PreviousButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 232px;
  left: 8px;
`;

const NextButton = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 232px;
  right: 8px;
`;
