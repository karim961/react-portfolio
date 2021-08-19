import styled from "styled-components";
import { Col } from "react-styled-flexboxgrid";
import { Description, H1 } from "../../styles/text";

export const StyledCol = styled(Col)`
  background: ${(props) => props.theme.colors.white75};
  padding: 30px;

  border-radius: 10px;
  & > div {
    position: sticky;
    top: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  & ${Description} {
    padding: 0 2rem;
  }

  & ${H1} {
    padding: 0 2rem;
    text-align: center;
    margin-bottom: 10px;
  }
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
