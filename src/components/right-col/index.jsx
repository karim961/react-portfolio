import { SectionRow, StyledCol } from "./styles";
import { SECTIONS } from "../../config/strings";
import { Description, H3 } from "../../styles/text";
import { Col, Row } from "react-styled-flexboxgrid";
import TopSkill from "../top-skill";
import { Data } from "../../config/config";
import ReactMarkdown from "react-markdown";
import ExperienceTimeline from "../experience-timeline";

const RightCol = ({ width = 8 }) => {
  return (
    <StyledCol xs={12} sm={width}>
      <Row>
        <Col xs={12}>
          <H3>{SECTIONS.TOP_SKILLS}</H3>
          <SectionRow>
            {Data.topSkills &&
              Data.topSkills.length > 0 &&
              Data.topSkills.map((topSkill) => (
                <Col xs={4}>
                  <TopSkill {...topSkill} />
                </Col>
              ))}
          </SectionRow>
        </Col>
        <Col xs={12}>
          <H3>{SECTIONS.ABOUT}</H3>
          <SectionRow>
            <Col xs={12}>
              <Description>
                <ReactMarkdown children={Data.about} />
              </Description>
            </Col>
          </SectionRow>
        </Col>
        <Col xs={12}>
          <H3>{SECTIONS.EXPERIENCE}</H3>
          <SectionRow>
            <Col xs={12}>
              <ExperienceTimeline />
            </Col>
          </SectionRow>
        </Col>
      </Row>
    </StyledCol>
  );
};

export default RightCol;
