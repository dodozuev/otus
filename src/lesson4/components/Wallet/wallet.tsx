import { AvailableCoinValues, Coin } from "./components/WalletItem/coin";

import React from "react";
import { WalletStyled } from "./wallet.styles";

interface WalletProps {
  ownerName: string;
  coins: number[];
}
export const Wallet = (props: WalletProps) => {
  var badCoins = props.coins.filter(
    (x) => !AvailableCoinValues.some((y) => y === x)
  );
  if (badCoins.length > 0)
    return <div>{"Error: unable to create coin from " + badCoins}</div>;
  return (
    <WalletStyled>
      <span>{props.ownerName + "'s wallet"}</span>
      {props.coins.map((c, index) => (
        <Coin key={index} value={c} />
      ))}
    </WalletStyled>
  );
};
