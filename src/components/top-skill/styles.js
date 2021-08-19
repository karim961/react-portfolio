import styled from "styled-components";
import Tilt from "react-tilt/dist/tilt";
import { Description } from "../../styles/text";

export const Logo = styled.div`
  padding: 15px;
  margin: 5px;
  transform: translateZ(0px);
  transition: 0.2s;
  border-radius: 50%;
  border: 3px solid ${(props) => props.theme.colors.cyan};
  background: white;
  box-sizing: border-box;

  & img {
    width: 47px;
    height: 47px;
    fill: ${(props) => props.theme.colors.cyan};
    stroke: ${(props) => props.theme.colors.cyan};
  }
`;

export const Title = styled.div`
  padding: 10px;
  transform: translateZ(0px);
  transition: 0.5s;
  text-align: center;
`;

export const StyledTilt = styled(Tilt)`
  transform-style: preserve-3d;
  background: ${(props) => props.theme.colors.white75};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 32px 0 transparent;
  border-radius: 10px;
  padding: 15px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 8px 32px 0 rgba(120, 120, 120, 0.37);
  }

  &:hover ${Logo} {
    transform: translateZ(40px);
  }
  &:hover ${Title} {
    transform: translateZ(70px);
  }

  &:hover ${Description} {
    transform: translateZ(20px);
  }
`;
