import styled from "styled-components";

function Next() {
  return (
    <Svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m2 1 8 8-8 8"
        stroke="#1D2026"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default Next;

const Svg = styled.svg`
  transition: all ease 0.2s;
  &:hover path {
    stroke: #ff7e1b;
  }
`;
