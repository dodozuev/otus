import { InputStyled } from "./LabeledInput.styles";
import React from "react";

export interface LabeledInputProps {
  label: string;
  inputType: string;
  value: any;
  valueUpdated: (value: any) => void;
}

export const LabeledInput = (props: LabeledInputProps) => {
  console.log("labeled input value", props.value);
  return (
    <>
      <label>{props.label}</label>
      <InputStyled
        type={props.inputType}
        onChange={(e) => {
          console.log("e.t.v", e.target.value);
          props.valueUpdated(e.target.value);
        }}
        value={props.value}
      ></InputStyled>
    </>
  );
};
