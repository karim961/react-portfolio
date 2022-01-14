import React from 'react';
import { H3 } from '../../styles/text';
import { SectionRow } from '../right-col/styles';
import { Col } from 'react-styled-flexboxgrid';

const Section = ({ children, title }) => {
  return children ? (
    <Col xs={12}>
      <H3>{title}</H3>
      <SectionRow>{children}</SectionRow>
    </Col>
  ) : (
    <></>
  );
};

export default Section;
