import { ButtonStyled, FormStyled, MenuStyled } from "./Menu.styles";
import React, { useState } from "react";

import { FractalProps } from "../FractalWindow";
import { LabeledInput } from "./components/LabeledInput";

export const Menu = (props: FractalProps) => {
  const [state, setState] = useState(props.defaultValue);

  return (
    <MenuStyled>
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

        <LabeledInput
          label="Скорость"
          inputType="number"
          valueUpdated={(value) => {
            setState((st) => ({ ...st, playbackSpeed: value }));
          }}
          value={state.baseColor}
        />
      </FormStyled>
      <ButtonStyled
        onClick={() => {
          setState((s) => {
            return { ...s, play: !s.play };
          });
          props.onSubmit(state);
        }}
      >
        {state.play ? "Стоп" : "Старт"}
      </ButtonStyled>
    </MenuStyled>
  );
};
