import React, { useState } from "react";

import { FormStyled } from "./Menu.styles";
import { LabeledInput } from "./components/LabeledInput";

interface MenuData {
  fieldSize: number;
  fractalCount: number;
  fractalDepth: number;
  baseColor: string;
}

const initialFormProps = {
  fieldSize: 400,
  fractalCount: 1,
  fractalDepth: 5,
} as MenuData;

interface MenuProps {
  onSubmit: (values: MenuData) => void;
}

export const Menu = (props: MenuProps) => {
  const [state, setState] = useState(initialFormProps);
  return (
    <FormStyled
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit(state);
      }}
    >
      <LabeledInput
        label="Размер поля"
        inputType="number"
        valueUpdated={(value) => {
          setState((st) => ({ ...st, fieldSize: Number(value) }));
        }}
        value={state.fieldSize}
      />
      <LabeledInput
        label="Глубина фрактала"
        inputType="number"
        valueUpdated={(value) => {
          setState((st) => ({ ...st, fractalDepth: Number(value) }));
        }}
        value={state.fractalDepth}
      />
      <LabeledInput
        label="Количество фракталов"
        inputType="number"
        valueUpdated={(value) => {
          setState((st) => ({ ...st, fractalCount: Number(value) }));
        }}
        value={state.fractalCount}
      />
      <LabeledInput
        label="Начальный цвет"
        inputType="color"
        valueUpdated={(value) => {
          setState((st) => ({ ...st, baseColor: value }));
        }}
        value={state.baseColor}
      />
    </FormStyled>
  );
};
