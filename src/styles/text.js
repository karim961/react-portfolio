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

export const H3 = styled.h3`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.h3}rem;
  font-weight: normal;
`;

export const H5 = styled.h5`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.h5}rem;
  font-weight: normal;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryGrey};
  font-size: ${(props) => props.theme.fontSizes.regular}rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;
