import React from "react";
import { Logo, StyledTilt, Title } from "./styles";
import { Description, H3, H5 } from "../../styles/text";

const TopSkill = ({ title, description, logo }) => {
  const tiltOptions = {
    reverse: true, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <StyledTilt options={tiltOptions}>
      <Logo>
        <img src={logo} alt={title} />
      </Logo>
      <Title>
        <H5>{title}</H5>
      </Title>
      {description && <Description>{description}</Description>}
    </StyledTilt>
  );
};

export default TopSkill;
