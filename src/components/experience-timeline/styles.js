import styled from "styled-components";
import { Col } from "react-styled-flexboxgrid";

export const SkillCol = styled(Col)`
  margin-bottom: 1.5rem;
  & h2 {
    display: none !important;
  }

  & .progress-bar-rect-wrapper > div {
    border-radius: 20px;
    margin: 5px 0;
  }
`;
