import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ProductType } from "./types";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import Product from "./components/Product";
import MobileSlider from "./components/MobileSlider";
import DesktopSlider from "./components/DesktopSlider";
import ModalSlider from "./components/ModalSlider";

function App() {
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const [cartList, setCartList] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [slider, setSlider] = useState<boolean>(false);
  const [productIndex, setProductIndex] = useState<number>(0);

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
          setCartList={setCartList}
        />
      </Container>
      <MainContainer>
        <MobileSlider />
        <DesktopContainer>
          <DesktopSlider
            setSlider={setSlider}
            productIndex={productIndex}
            setProductIndex={setProductIndex}
          />
          <Product
            cartList={cartList}
            setCartList={setCartList}
            count={count}
            setCount={setCount}
          />
        </DesktopContainer>
        {slider ? (
          <ModalSlider setSlider={setSlider} modalIndex={productIndex} />
        ) : null}
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    margin-bottom: 132px;
  }
`;

const Container = styled.div`
  padding: 0 24px;
`;

const DesktopContainer = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  column-gap: 80px;
`;
