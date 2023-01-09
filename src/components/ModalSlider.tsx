import { useState } from "react";
import styled from "styled-components";
import product1 from "../img/image-product-1.jpg";
import product2 from "../img/image-product-2.jpg";
import product3 from "../img/image-product-3.jpg";
import product4 from "../img/image-product-4.jpg";
import miniProduct1 from "../img/image-product-1-thumbnail.jpg";
import miniProduct2 from "../img/image-product-2-thumbnail.jpg";
import miniProduct3 from "../img/image-product-3-thumbnail.jpg";
import miniProduct4 from "../img/image-product-4-thumbnail.jpg";
import Next from "../svg/Next";
import Previous from "../svg/Previous";
import Close from "../svg/Close";

interface Props {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
  modalIndex: number;
}

function ModalSlider(props: Props) {
  const { setSlider, modalIndex } = props;

  const [productIndex, setProductIndex] = useState<number>(modalIndex);

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
    <Backdrop>
      <Background>
        <Container>
          <CloseButton onClick={() => setSlider(false)}>
            <Close />
          </CloseButton>
          <Img src={gallery[productIndex]} />
          <MiniImages>
            <ImageButton onClick={() => setProductIndex(0)}>
              <MiniImage src={miniProduct1} alt="thumbnail image" />
            </ImageButton>
            <ImageButton onClick={() => setProductIndex(1)}>
              <MiniImage src={miniProduct2} alt="thumbnail image" />
            </ImageButton>
            <ImageButton onClick={() => setProductIndex(2)}>
              <MiniImage src={miniProduct3} alt="thumbnail image" />
            </ImageButton>
            <ImageButton onClick={() => setProductIndex(3)}>
              <MiniImage src={miniProduct4} alt="thumbnail image" />
            </ImageButton>
          </MiniImages>
          <Buttons>
            <PreviousButton onClick={minusHandler}>
              <Previous />
            </PreviousButton>
            <NextButton onClick={plusHandler}>
              <Next />
            </NextButton>
          </Buttons>
        </Container>
      </Background>
    </Backdrop>
  );
}

export default ModalSlider;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Background = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  display: none;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 550px;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
  align-self: end;
  margin-bottom: 10px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 550px;
  max-height: 550px;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const MiniImages = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 32px;
`;

const ImageButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const MiniImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 10px;
`;

const Buttons = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const PreviousButton = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: -27px;
  transform: translate(0, -40%);
`;

const NextButton = styled.button`
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  right: -27px;
  transform: translate(0, -40%);
`;
