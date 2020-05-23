import { ButtonStyled, FormStyled, MenuStyled } from "./Menu.styles";
import { FractalData, initialFormState } from "../FractalWindow";
import React, { useCallback, useState } from "react";

import { LabeledInput } from "./components/LabeledInput";

export interface FractalProps {
  onSubmit: (values: FractalData) => void;
  defaultValue: FractalData;
}

export const Menu = (props: FractalProps) => {
  const [state, setState] = useState(props.defaultValue);

  const playStopToggle = useCallback(() => {
    setState((s) => {
      return { ...s, play: !s.play };
    });
  }, []);

  const reset = useCallback(() => {
    props.onSubmit(initialFormState);
    setState(initialFormState);
  }, []);

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
      <ButtonStyled onClick={playStopToggle}>
        {state.play ? "Стоп" : "Старт"}
      </ButtonStyled>

      <ButtonStyled onClick={reset}>Сброс</ButtonStyled>
    </MenuStyled>
  );
};
