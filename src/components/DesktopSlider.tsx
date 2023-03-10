import styled, { css } from "styled-components";
import product1 from "../img/image-product-1.jpg";
import product2 from "../img/image-product-2.jpg";
import product3 from "../img/image-product-3.jpg";
import product4 from "../img/image-product-4.jpg";
import miniProduct1 from "../img/image-product-1-thumbnail.jpg";
import miniProduct2 from "../img/image-product-2-thumbnail.jpg";
import miniProduct3 from "../img/image-product-3-thumbnail.jpg";
import miniProduct4 from "../img/image-product-4-thumbnail.jpg";

interface Props {
  setSlider: React.Dispatch<React.SetStateAction<boolean>>;
  productIndex: number;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
}

function DesktopSlider(props: Props) {
  const { setSlider, productIndex, setProductIndex } = props;

  const gallery = [product1, product2, product3, product4];

  return (
    <Container>
      <MainImageButton onClick={() => setSlider(true)}>
        <Img src={gallery[productIndex]} />
      </MainImageButton>
      <MiniImages>
        <ImageButton
          active={productIndex === 0}
          onClick={() => setProductIndex(0)}
        >
          <MiniImage
            active={productIndex === 0}
            src={miniProduct1}
            alt="thumbnail image"
          />
        </ImageButton>
        <ImageButton
          active={productIndex === 1}
          onClick={() => setProductIndex(1)}
        >
          <MiniImage
            active={productIndex === 1}
            src={miniProduct2}
            alt="thumbnail image"
          />
        </ImageButton>
        <ImageButton
          active={productIndex === 2}
          onClick={() => setProductIndex(2)}
        >
          <MiniImage
            active={productIndex === 2}
            src={miniProduct3}
            alt="thumbnail image"
          />
        </ImageButton>
        <ImageButton
          active={productIndex === 3}
          onClick={() => setProductIndex(3)}
        >
          <MiniImage
            active={productIndex === 3}
            src={miniProduct4}
            alt="thumbnail image"
          />
        </ImageButton>
      </MiniImages>
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
`;

interface ImageButtonProps {
  active: boolean;
}

const ImageButton = styled.button(
  (props: ImageButtonProps) => css`
    border: none;
    cursor: pointer;
    opacity: ${props.active ? "0.25" : "1"};
    border-radius: 10px;
    width: 100%;
    max-width: 88px;
    height: 100%;
    max-height: 88px;
  `
);

interface MiniImageProps {
  active: boolean;
}

const MiniImage = styled.img(
  (props: MiniImageProps) => css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all ease 0.2s;

    &:hover {
      opacity: ${!props.active ? 0.5 : "none"};
    }
  `
);
