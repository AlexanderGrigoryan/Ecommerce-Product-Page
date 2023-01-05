import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import Header from "./components/Header";
import MobileSlider from "./components/MobileSlider";
import Product from "./components/Product";
import CartModal from "./components/CartModal";

function App() {
  const [cartMenu, setCartMenu] = useState<boolean>(false);

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
        <Header cartMenu={cartMenu} setCartMenu={setCartMenu} />
      </Container>
      <MobileSlider />
      <Container>
        <Product />
      </Container>
      {cartMenu ? (
        <CartModal cartMenu={cartMenu} setCartMenu={setCartMenu} />
      ) : null}
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 0 24px;
`;
