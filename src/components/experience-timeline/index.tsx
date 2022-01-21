import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Data } from '../../config/config';
import { Caption, H6 } from '../../styles/text';

const ExperienceTimeline = () => {
  const theme = useTheme();
  return (
    <VerticalTimeline layout={'1-column'}>
      {Data.experience &&
        Data.experience.map((xp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight: `7px solid  ${theme.colors.white75}`,
            }}
            date={xp.date}
            iconStyle={{
              background: theme.colors.orange,
              color: theme.colors.white,
              // transform: "scale(0.3)",
              width: '20px',
              height: '20px',
              marginLeft: '10px',
              marginTop: '20px',
              transition: '0.2s',
            }}
            contentStyle={{
              background: theme.colors.white75,
              color: theme.colors.primaryGrey,
            }}
          >
            <H6 className="vertical-timeline-element-title">{xp.position}</H6>
            <Caption className="vertical-timeline-element-subtitle">
              {xp.company}, {xp.location}
            </Caption>
            <ReactMarkdown children={xp.description} />
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
