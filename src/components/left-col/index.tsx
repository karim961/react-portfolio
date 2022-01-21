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
    <StyledCol xs={12} sm={width + 2} md={width + 1} lg={width}>
      <div>
        <Description>{Data.personalInfo.title}</Description>
        <H1>{Data.personalInfo.name}</H1>
        <ProPic>
          <img src={Data.personalInfo.profile_image} alt={PROFILE_PIC_ALT} />
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
            <a
              href={`tel:${Data.personalInfo.phoneNumber?.replace(/\s/g, '')}`}
            >
              <Icon className="fas fa-phone" />
              {Data.personalInfo.phoneNumber}
            </a>
          </section>
          <section>
            <a href={`mailto:${Data.personalInfo.email?.replace(/\s/g, '')}`}>
              <Icon className="fas fa-envelope" />
              {Data.personalInfo.email}
            </a>
          </section>
          <section>
            <Icon className="fas fa-map-marker-alt" />
            {Data.personalInfo.address}
          </section>
          <SocialIcons>
            {Data.personalInfo.socialLinks.length > 0 ? (
              Data.personalInfo.socialLinks.map((link) => (
                <a href={link.link}>
                  <Icon className={link.icon} />
                </a>
              ))
            ) : (
              <></>
            )}
          </SocialIcons>
        </PersonalInfoCol>
      </div>
    </StyledCol>
  );
};

export default LeftCol;
