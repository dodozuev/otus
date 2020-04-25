import React, { Component } from "react";

import { Coin } from "./components/WalletItem/coin";
import { WalletStyled } from "./wallet.styles";

interface WalletProps {
  ownerName: string;
  coins: number[];
}

interface WalletState {
  hasError: boolean;
}
const initWallet = (): WalletState => ({ hasError: false });

export class Wallet extends Component<WalletProps, WalletState> {
  constructor(props) {
    super(props);
    this.state = initWallet();
  }

  componentDidMount() {
    this.setState({ ...this.state, hasError: false });
  }

  componentDidCatch(error) {
    console.log("error:", error);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>{"Произошла ошибка :'("}</div>
    ) : (
      <WalletStyled>
        <span>{this.props.ownerName + "'s wallet"}</span>
        {this.props.coins.map((c, index) => (
          <Coin key={index} value={c} />
        ))}
      </WalletStyled>
    );
  }
}
