import React from "react";

export interface HelloElementProps {
  name: string;
}

export const HelloElement = (props: HelloElementProps) => (
  <>
    <h3>Привет, {props.name}</h3>
    <button>Нажать кнопочку</button>
  </>
);
