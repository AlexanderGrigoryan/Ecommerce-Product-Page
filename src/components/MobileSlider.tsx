import React from "react";
import styled from "styled-components";
import product1 from "../img/image-product-1.jpg";
import product2 from "../img/image-product-2.jpg";
import product3 from "../img/image-product-3.jpg";
import product4 from "../img/image-product-4.jpg";

function MobileSlider() {
  const gallery = [product1, product2, product3, product4];

  return (
    <Container>
      <Img src={product1} />
    </Container>
  );
}

export default MobileSlider;

const Container = styled.div``;

const Img = styled.img`
  width: 100%;
`;
