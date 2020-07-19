import {
  InputStyled,
  LabelInputContainer,
  LabelStyled,
} from "./LabeledInput.styles";

import React from "react";

export interface LabeledInputProps {
  label: string;
  inputType: string;
  value: any;
  valueUpdated: (value: any) => void;
}

export const LabeledInput = (props: LabeledInputProps) => {
  return (
    <LabelInputContainer>
      <LabelStyled>{props.label}</LabelStyled>
      <InputStyled
        type={props.inputType}
        onChange={(e) => {
          props.valueUpdated(e.target.value);
        }}
        value={props.value}
      ></InputStyled>
    </LabelInputContainer>
  );
};
