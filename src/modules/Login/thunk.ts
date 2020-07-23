import { createAsyncThunk } from "@reduxjs/toolkit";
import { delay } from "Utils/delay";

export const userNameKey = "userName";
export const loginToWebsite = createAsyncThunk(
  "user/login",
  async (name: string) => {
    await delay(300);
    localStorage.setItem(userNameKey, name);
    return name;
  }
);

export const logoutFromWebsite = createAsyncThunk("user/logout", async () =>
  localStorage.setItem(userNameKey, "")
);
