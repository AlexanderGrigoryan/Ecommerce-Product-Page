import styled from "styled-components";

function Previous() {
  return (
    <Svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 1 3 9l8 8"
        stroke="#1D2026"
        strokeWidth="3"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default Previous;

const Svg = styled.svg`
  transition: all ease 0.2s;
  &:hover path {
    stroke: #ff7e1b;
  }
`;
