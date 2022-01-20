import {
  LanguageCol,
  LanguageTitle,
  PersonalInfoCol,
  ProPic,
  SocialIcons,
  StyledCol,
} from './styles';
import { PROFILE_PIC_ALT, SECTIONS } from '../../config/strings';
import { Data } from '../../config/config';
import { Description, H1, H3, H6 } from '../../styles/text';
import { Icon } from '../../styles/styles';
import { SkillCol } from '../experience-timeline/styles';
import ProgressBar from 'react-animated-progress-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

const LeftCol = ({ width = 4 }) => {
  const theme = useTheme();

  return (
    <StyledCol xs={12} sm={width + 2} lg={width}>
      <div>
        <Description>{Data.title}</Description>
        <H1>{Data.name}</H1>
        <ProPic>
          <img src={Data.profile_image} alt={PROFILE_PIC_ALT} />
        </ProPic>

        <LanguageCol>
          <H3>{SECTIONS.LANGUAGE}</H3>
          <Row>
            {Data.languages &&
              Data.languages.map((language) => (
                <SkillCol xs={12}>
                  <Row>
                    <LanguageTitle xs={3}>
                      <H6>{language.title}</H6>
                    </LanguageTitle>
                    <Col xs={9}>
                      <ProgressBar
                        width="100%"
                        height="15px"
                        rect
                        rectPadding="1px"
                        fontColor={theme.colors.primaryGrey}
                        percentage={language.percentage}
                        rectBorderRadius="20px"
                        trackPathColor={theme.colors.white75}
                        defColor={{
                          fair: theme.colors.cyan,
                          good: theme.colors.cyan,
                          excellent: theme.colors.cyan,
                          poor: theme.colors.cyan,
                        }}
                      />
                    </Col>
                  </Row>
                </SkillCol>
              ))}
          </Row>
        </LanguageCol>
        <PersonalInfoCol>
          <H3>{SECTIONS.PERSONAL_INFO}</H3>
          <section>
            <a href="tel:+96170640697">
              <Icon className="fas fa-phone" />
              +961 70 640 697
            </a>
          </section>
          <section>
            <a href="mailto:karim.abbas961@gmail.com">
              <Icon className="fas fa-envelope" />
              karim.abbas961@gmail.com
            </a>
          </section>
          <section>
            <Icon className="fas fa-map-marker-alt" /> Beirut, Lebanon
          </section>
          <SocialIcons>
            <a href="#">
              <Icon className="fab fa-linkedin" />
            </a>
            <a href="#">
              <Icon className="fab fa-github-square" />
            </a>
          </SocialIcons>
        </PersonalInfoCol>
      </div>
    </StyledCol>
  );
};

export default LeftCol;
