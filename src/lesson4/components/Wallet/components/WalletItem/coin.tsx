import { CoinStyled } from "./coin.styles";
import React from "react";

export const AvailableCoinValues = [1, 2, 5, 10];

export interface CoinProps {
  value: number;
  onClick?: () => void;
}

export const Coin = (props: CoinProps) => {
  if (!AvailableCoinValues.some((x) => x === props.value))
    throw "Cannot create a coin with this value";

  return (
    <CoinStyled
      data-testid="coin"
      onClick={() => (props.onClick ? props.onClick : () => {})}
    >
      {props.value}
    </CoinStyled>
  );
};
