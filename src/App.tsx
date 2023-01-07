import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import MobileSlider from "./components/MobileSlider";
import Product from "./components/Product";
import CartModal from "./components/CartModal";
import { ProductType } from "./types";
import DesktopSlider from "./components/DesktopSlider";
import ModalSlider from "./components/ModalSlider";

function App() {
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const [cartList, setCartList] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [slider, setSlider] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <Container>
        <Header
          cartMenu={cartMenu}
          setCartMenu={setCartMenu}
          cartList={cartList}
        />
      </Container>
      <MobileSlider />
      <DesktopContainer>
        <DesktopSlider setSlider={setSlider} />
        <Product
          cartList={cartList}
          setCartList={setCartList}
          count={count}
          setCount={setCount}
        />
      </DesktopContainer>
      {cartMenu ? (
        <CartModal cartList={cartList} setCartList={setCartList} />
      ) : null}
      {slider ? <ModalSlider setSlider={setSlider} /> : null}
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 0 24px;
`;

const DesktopContainer = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  column-gap: 80px;
`;
