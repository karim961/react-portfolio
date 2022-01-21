import { StyledCol } from './styles';
import { SECTIONS } from '../../config/strings';
import { Col, Row } from 'react-styled-flexboxgrid';
import TopSkill from '../top-skill';
import { Data } from '../../config/config';
import ReactMarkdown from 'react-markdown';
import ExperienceTimeline from '../experience-timeline';
import Expertise from '../expertise';
import Section from '../section';
import Education from '../education';
import { Card } from '../../styles/styles';

const RightCol = ({ width = 8 }) => {
  return (
    <StyledCol xs={12} sm={width - 2} md={width - 1} lg={width}>
      <Row>
        <Section title={SECTIONS.TOP_SKILLS}>
          <>
            {Data.topSkills ? (
              Data.topSkills.length > 0 &&
              Data.topSkills.map((topSkill) => (
                <Col xs={8} sm={6} lg={4}>
                  <TopSkill {...topSkill} />
                </Col>
              ))
            ) : (
              <></>
            )}
          </>
        </Section>
        <Section title={SECTIONS.ABOUT}>
          <Col xs={12}>
            {Data.about && (
              <Card>
                <ReactMarkdown children={Data.about} />
              </Card>
            )}
          </Col>
        </Section>
        <Section title={SECTIONS.EDUCATION}>
          <Col xs={12}>
            {Data.education && (
              <Card>
                {Data.education.length > 0 &&
                  Data.education.map((edu) => (
                    <Education
                      date={edu.date}
                      major={edu.major}
                      institute={edu.institute}
                      address={edu.address}
                      degree={edu.degree}
                    />
                  ))}
              </Card>
            )}
          </Col>
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
