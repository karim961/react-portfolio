import { SectionRow, StyledCol } from './styles';
import { SECTIONS } from '../../config/strings';
import { Description, H3 } from '../../styles/text';
import { Col, Row } from 'react-styled-flexboxgrid';
import TopSkill from '../top-skill';
import { Data } from '../../config/config';
import ReactMarkdown from 'react-markdown';
import ExperienceTimeline from '../experience-timeline';
import Expertise from '../expertise';
import Section from '../section';
import Education from '../education';

const RightCol = ({ width = 8 }) => {
  return (
    <StyledCol xs={12} sm={width}>
      <Row>
        <Section title={SECTIONS.TOP_SKILLS}>
          {Data.topSkills &&
            Data.topSkills.length > 0 &&
            Data.topSkills.map((topSkill) => (
              <Col xs={4}>
                <TopSkill {...topSkill} />
              </Col>
            ))}
        </Section>
        <Section title={SECTIONS.ABOUT}>
          <Col xs={12}>
            {Data.about && (
              <Description>
                <ReactMarkdown children={Data.about} />
              </Description>
            )}
          </Col>
        </Section>
        <Section title={SECTIONS.EDUCATION}>
          {Data.education &&
            Data.education.length > 0 &&
            Data.education.map((edu) => (
              <Education
                date={edu.date}
                major={edu.major}
                institute={edu.institute}
                address={edu.address}
                degree={edu.degree}
              />
            ))}
        </Section>
        <Section title={SECTIONS.EXPERIENCE}>
          {Data.experience && (
            <Col xs={12}>
              <ExperienceTimeline />
            </Col>
          )}
        </Section>
        <Section title={SECTIONS.EXPERTISE}>
          {Data.expertise && (
            <Col xs={12}>
              <Expertise />
            </Col>
          )}
        </Section>
      </Row>
    </StyledCol>
  );
};

export default RightCol;
