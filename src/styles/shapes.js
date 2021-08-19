import styled from "styled-components";

export const Circle1 = styled.div`
  position: fixed;
  height: 200px;
  width: 200px;
  bottom: 14%;
  left: 7%;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.orange} 41%,
    ${(props) => props.theme.colors.lightOrange} 100%
  );
  z-index: -1;
`;
export const Circle2 = styled.div`
  position: fixed;
  height: 200px;
  width: 200px;
  top: 9%;
  right: 9%;
  border-radius: 50%;
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.colors.darkPurple},
    ${(props) => props.theme.colors.purple}
  );
  z-index: -1;
`;
export const Donut1 = styled.div`
  position: fixed;
  height: 100px;
  width: 100px;
  top: 55%;
  right: 35%;
  display: none;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 0) 0%,
    rgba(116, 87, 211, 0) 45%,
    #ff6542 46%,
    #ffbcb3 96%
  );
  border-radius: 50%;
  z-index: -1;
`;
export const Donut2 = styled.div`
  position: fixed;
  height: 100px;
  width: 100px;
  top: 65%;
  left: 40%;
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 0) 0%,
    rgba(116, 87, 211, 0) 45%,
    #65c9b8 46%,
    transparent 96%
  );
  border-radius: 50%;
  z-index: -1;
`;
