import styled from "styled-components";

export const StyledLogo = styled.a`
  margin: 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  & svg {
    width: 60px;
    height: 60px;
  }

  & path:nth-child(1) {
    stroke-dasharray: 2765;
    stroke-dashoffset: 2765;
    animation: line-anim 2s ease forwards;
  }

  & path:nth-child(2) {
    stroke-dasharray: 2145;
    stroke-dashoffset: 2145;
    animation: line-anim 2s ease forwards, fill 0.5s ease forwards 1.5s;
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: ${(props) => props.theme.colors.Grey};
    }
  }
`;
