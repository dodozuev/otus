import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoginState } from "./store";
import { loginToWebsite } from "./thunk";

export const LoginScreen = () => {
  const userName = useSelector((state: LoginState) => state.name);
  const [name, setName] = useState(userName);
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await dispatch(loginToWebsite(name));
    },
    [name]
  );
  const onChange = useCallback(
    (ev) => setName((ev.target as HTMLInputElement).value),
    []
  );
  return (
    <form onSubmit={onSubmit}>
      <label>
        Enter your name:
        <input placeholder="Ivan" onChange={onChange} />
      </label>
      <button>Login</button>
    </form>
  );
};
