import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #717578;
  margin-bottom: 16px;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #ffffff;
  padding: 8px 0;
  width: 240px;

  &::placeholder {
    color: #a1a3a5;
  }

  &:focus {
    border-bottom-color: #00cdf6;

    &::placeholder {
      color: white;
    }
  }
`;

export const StyledLabel = styled.label`
  color: #ffffff;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.5px;
`;
