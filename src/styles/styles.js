import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const Container = styled(Grid)`
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.white25};
  box-shadow: 0 8px 32px 0 rgba(120, 120, 120, 0.37);
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Icon = styled.i`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.cyan};
`;
