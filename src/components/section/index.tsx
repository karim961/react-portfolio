import React from 'react';
import { H3 } from '../../styles/text';
import { SectionRow } from '../right-col/styles';
import { Col } from 'react-styled-flexboxgrid';

interface SectionProps {
  title: string;
  children?: JSX.Element;
}

const Section = ({ children, title }: SectionProps) => {
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
