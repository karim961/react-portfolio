import styled from 'styled-components';
import { Col } from 'react-styled-flexboxgrid';
import { Description, H1 } from '../../styles/text';
import { Icon } from '../../styles/styles';

export const StyledCol = styled(Col)`
  background: ${(props) => props.theme.colors.white75};
  padding: 30px;

  border-radius: 10px;
  & > div {
    position: sticky;
    top: 0;
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  & ${Description} {
    padding: 0 2rem;
    margin-bottom: 0.5rem;
  }

  & ${H1} {
    padding: 0 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

export const ProPic = styled.div`
  border-radius: 50%;
  width: 150px;
  position: relative;
  display: block;

  & img {
    width: 150px;
    border-radius: 50%;
    margin-left: -20px;
  }

  &:after {
    content: ' ';
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    left: 20px;
    background: ${(props) => props.theme.colors.cyan};
    z-index: -1;
  }
`;

export const PersonalInfoCol = styled(Col)`
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.primaryGrey};
  font-weight: 400;
  width: 100%;
  padding: 0;
  & h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  & section {
    margin-bottom: 0.5rem;
  }

  & ${Icon} {
    margin-right: 10px;
    transition: 0.3s;
  }
  & a {
    color: ${(props) => props.theme.colors.primaryGrey};
    transition: 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.orange};

      & ${Icon} {
        color: ${(props) => props.theme.colors.orange};
      }
    }
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  & ${Icon} {
    font-size: 2rem;
    margin-right: 10px;
    margin-left: 10px;
  }

  & a:hover ${Icon} {
    color: ${(props) => props.theme.colors.orange};
  }
`;

export const LanguageCol = styled(Col)`
  padding: 0;
  margin-top: 2rem;
  color: ${(props) => props.theme.colors.primaryGrey};
  font-weight: 400;
  width: 100%;

  & h3 {
    margin-bottom: 1rem;
    text-align: center;
  }
  & h6 {
    display: inline-block;
  }
`;

export const LanguageTitle = styled(Col)`
  padding-right: 0;
`;
