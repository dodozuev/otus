import { createAsyncThunk } from "@reduxjs/toolkit";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

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
