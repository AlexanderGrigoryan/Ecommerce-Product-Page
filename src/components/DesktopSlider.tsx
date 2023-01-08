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

interface Props {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
}

function DesktopSlider(props: Props) {
  const { setSlider } = props;

  const [productIndex, setProductIndex] = useState<number>(0);

  const gallery = [product1, product2, product3, product4];

  // const minusHandler = () => {
  //   if (productIndex === 0) {
  //     return;
  //   } else {
  //     setProductIndex(productIndex - 1);
  //   }
  // };

  // const plusHandler = () => {
  //   if (productIndex === gallery.length - 1) {
  //     return;
  //   } else {
  //     setProductIndex(productIndex + 1);
  //   }
  // };

  return (
    <Container>
      <MainImageButton onClick={() => setSlider(true)}>
        <Img src={gallery[productIndex]} />
      </MainImageButton>
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
      {/* <Buttons>
        <PreviousButton onClick={minusHandler}>
          <Previous />
        </PreviousButton>
        <NextButton onClick={plusHandler}>
          <Next />
        </NextButton>
      </Buttons> */}
    </Container>
  );
}

export default DesktopSlider;

const Container = styled.div`
  position: relative;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const MainImageButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  max-width: 445px;
  max-height: 445px;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const MiniImages = styled.div`
  display: flex;
  justify-content: space-between;
  /* column-gap: 20px; */

  /* @media screen and (min-width: 1024px) {
    margin-bottom: 32px;
  } */
`;

const ImageButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`;

const MiniImage = styled.img`
  width: 100%;
  max-width: 88px;
  height: 100%;
  max-width: 88px;
  border-radius: 10px;
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
  top: 50%;
  left: 8px;
  transform: translate(0, -50%);
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
  top: 50%;
  right: 8px;
  transform: translate(0, -50%);
`;
