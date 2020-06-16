import React, { useCallback, useState } from "react";

import { storeUserName } from "./StorageUtils";

interface LoginScreenProps {
  name: string;
  onNameUpdate: (s: string) => void;
}
export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [name, setName] = useState(props.name);

  const onSubmit = useCallback(
    (ev) => {
      ev.preventDefault();
      storeUserName(name);
      props.onNameUpdate(name);
    },
    [name]
  );
  return (
    <form onSubmit={onSubmit}>
      <label>
        Enter your name:
        <input
          placeholder="Ivan"
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};
