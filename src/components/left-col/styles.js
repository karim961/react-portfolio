import styled from "styled-components";
import { Col } from "react-styled-flexboxgrid";

export const StyledCol = styled(Col)`
  background: ${(props) => props.theme.colors.white75};
  position: sticky;
  top: 0;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  height: auto;
`;

export const ProPic = styled.div`
  border-radius: 50%;
  width: 150px;
  position: relative;
  display: block;

  & img {
    width: 150px;
    border-radius: 50%;
    margin-left: -20px;
  }

  &:after {
    content: " ";
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    background: ${(props) => props.theme.colors.cyan};
    z-index: -1;
  }
`;
