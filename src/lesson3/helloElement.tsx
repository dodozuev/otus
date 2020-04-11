import React from "react";

export interface HelloElementProps {
  name: string;
  onClick?: () => void;
}

export const HelloElement = (props: HelloElementProps) => (
  <>
    <h3>Привет, {props.name}</h3>
    <button onClick={props.onClick || (() => {})}>Нажать кнопочку</button>
  </>
);
