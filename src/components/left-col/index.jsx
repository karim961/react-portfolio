import { ProPic, StyledCol } from "./styles";
import { NAME, PROFILE_PIC_ALT, TITLE } from "../../config/strings";
import { PROFILE_IMAGE } from "../../config/config";
import { Description, H1 } from "../../styles/text";
import { Col } from "react-styled-flexboxgrid";

const LeftCol = ({ width = 4 }) => {
  return (
    <StyledCol xs={12} sm={width}>
      <Col>
        <Description>{TITLE}</Description>
        <H1>{NAME}</H1>
      </Col>
      <ProPic>
        <img src={PROFILE_IMAGE} alt={PROFILE_PIC_ALT} />
      </ProPic>
    </StyledCol>
  );
};

export default LeftCol;
