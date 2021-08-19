import { StyledCol } from "./styles";
import { NAME } from "../../config/strings";
import { H2 } from "../../styles/text";
import { Col, Row } from "react-styled-flexboxgrid";

const RightCol = ({ width = 8 }) => {
  return (
    <StyledCol xs={12} sm={width}>
      <Row>
        <Col xs={12}>
          <H2>{NAME}</H2>
        </Col>
      </Row>
    </StyledCol>
  );
};

export default RightCol;
