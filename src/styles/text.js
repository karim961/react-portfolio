import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.h1}rem;
  font-weight: 900;
`;

export const H2 = styled.h2`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.h2}rem;
  font-weight: 900;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.regular}rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;
