import React from "react";
import { StyledInput, StyledLabel } from "./Input.styled";
import { InputProps } from "./Input.types";

const Input = (props: InputProps) => {
  return (
    <>
      {props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}
      <StyledInput {...props} />
    </>
  );
};

export default Input;
