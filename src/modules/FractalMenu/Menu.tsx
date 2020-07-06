import { ButtonStyled, FormStyled, MenuStyled } from "./Menu.styles";
import React, { useCallback, useState } from "react";

import { FractalData } from "./FractalWindow";
import { LabeledInput } from "../../Components/LabeledInput/LabeledInput";
import { fractalSlice } from "../../store";
import { startResetSettings } from "./actions";
import { useDispatch } from "react-redux";

export interface FractalProps {
  value: FractalData;
}

export const Menu = (props: FractalProps) => {
  const [state, setState] = useState(props.value);
  const isPlaying = state.play;
  const dispatch = useDispatch();
  const playStopToggle = useCallback(() => {
    dispatch(fractalSlice.actions.toggleAction());
  }, []);

  const reset = useCallback(() => {
    dispatch(startResetSettings());
  }, [state]);
  const submit = useCallback(() => {
    dispatch(fractalSlice.actions.updateSettings(state));
  }, [state]);

  return (
    <MenuStyled>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          submit();
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
        {isPlaying ? "Стоп" : "Старт"}
      </ButtonStyled>
      <ButtonStyled onClick={submit}>Сохранить настройки</ButtonStyled>
      <ButtonStyled onClick={reset}>Сброс</ButtonStyled>
    </MenuStyled>
  );
};
