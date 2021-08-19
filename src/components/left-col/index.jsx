import { ProPic, StyledCol } from "./styles";
import { PROFILE_PIC_ALT } from "../../config/strings";
import { Data } from "../../config/config";
import { Description, H1 } from "../../styles/text";

const LeftCol = ({ width = 4 }) => {
  return (
    <StyledCol xs={12} sm={width}>
      <div>
        <Description>{Data.title}</Description>
        <H1>{Data.name}</H1>
        <ProPic>
          <img src={Data.profile_image} alt={PROFILE_PIC_ALT} />
        </ProPic>
      </div>
    </StyledCol>
  );
};

export default LeftCol;
