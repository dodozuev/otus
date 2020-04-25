import React, { Component } from "react";

import { CoinStyled } from "./coin.styles";

export const AvailableCoinValues = [1, 2, 5, 10];

export interface CoinProps {
  value: number;
  onClick?: () => void;
}

export class Coin extends Component<CoinProps> {
  componentDidMount() {
    if (!AvailableCoinValues.some((x) => x === this.props.value))
      throw "Cannot create a coin with this value";
  }

  componentDidUpdate(prevProps) {
    if (this.props.value != prevProps.value)
      alert("Warning: the coin value changed to " + this.props.value);
  }

  render() {
    return (
      <CoinStyled
        data-testid="coin"
        onClick={() => (this.props.onClick ? this.props.onClick : () => {})}
      >
        {this.props.value}
      </CoinStyled>
    );
  }
}
