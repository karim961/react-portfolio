import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { Row } from 'react-styled-flexboxgrid';
import { H6 } from '../../styles/text';
import { useTheme } from 'styled-components';
import { SkillCol } from '../experience-timeline/styles';
import { Data } from '../../config/config';

const Expertise = () => {
  const theme = useTheme();
  return (
    <Row>
      {Data.expertise &&
        Data.expertise.map((skill) => (
          <SkillCol xs={12} sm={12} md={6}>
            <H6>{skill.title}</H6>
            <ProgressBar
              width="100%"
              height="15px"
              rect
              rectPadding="1px"
              fontColor={theme.colors.primaryGrey}
              percentage={skill.percentage}
              rectBorderRadius="20px"
              trackPathColor={theme.colors.white75}
              defColor={{
                fair: theme.colors.cyan,
                good: theme.colors.cyan,
                excellent: theme.colors.cyan,
                poor: theme.colors.cyan,
              }}
            />
          </SkillCol>
        ))}
    </Row>
  );
};

export default Expertise;
