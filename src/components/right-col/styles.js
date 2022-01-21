import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';

export const StyledCol = styled(Col)`
  padding: 50px;
`;

export const SectionRow = styled(Row)`
  margin-top: 2rem;
  margin-bottom: 3rem;
  justify-content: center;
`;

export const EducationContainer = styled.article`
  color: ${(props) => props.theme.colors.primaryGrey};
  padding: 1em;
  -webkit-box-shadow: 0 3px 0 #ddd;
  box-shadow: 0 3px 0 #ddd;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.25em;
`;
