import React from "react";
import styled from "styled-components";

const Button = ({ text, bgColor, color, action, padding, border }) => {
  const StyledButton = styled.button`
    width: 100%;
    background-color: ${bgColor};
    border-radius: 100px;
    color: ${color};
    border: ${border};
    padding: ${padding};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    cursor: pointer;
  `;
  return (
    <StyledButton className="button" onClick={action}>
      {text}
    </StyledButton>
  );
};

export default Button;
