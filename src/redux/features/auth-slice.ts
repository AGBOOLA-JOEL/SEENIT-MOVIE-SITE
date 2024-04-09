import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  userName: string;
  uid: string;
};
const initialState = {
  value: {
    isAuth: false,
    userName: "",
    uid: "",
  } as AuthState,
} as InitialState;
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
          uid: "vysfvyv7s7s7373737yeahvshvvs",
        },
      };
    },
    authstatus: (state) => {
      state.value.isAuth = !state.value.isAuth;
    },
  },
});

export const { login, logout, authstatus } = auth.actions;
export default auth.reducer;
