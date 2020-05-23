import React, { useCallback, useState } from "react";

interface LoginScreenProps {
  name: string;
  onNameUpdate: (s: string) => void;
}
export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [name, setName] = useState(props.name);

  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      localStorage.setItem("userName", name);
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
