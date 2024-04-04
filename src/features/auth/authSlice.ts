import {getLocalStorageObject, storage, storageKey} from '@/utils';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

type stateType = {
  userToken: string | null;
  user: User | null;
  isLoadingLocalStorage: boolean;
  loginPayload: Partial<ConfirmAuthReq> | null;
  dontShowLoginScreen: boolean;
};

const initialState: stateType = {
  user: null,
  userToken: null,
  isLoadingLocalStorage: true,
  loginPayload: null,
  dontShowLoginScreen: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getUserDataFromStorage: state => {
      const userToken = storage.getString(storageKey.userToken);
      const dontShowLoginScreen = storage.getBoolean(
        storageKey.dontShowLoginScreen,
      );
      const user = getLocalStorageObject(storageKey.user);

      if (userToken && user) {
        state.userToken = userToken;
        state.user = user;
        axios.defaults.headers.common.Authorization = `Bearer ${userToken}`;
      }
      state.isLoadingLocalStorage = false;
      state.dontShowLoginScreen = Boolean(dontShowLoginScreen);
    },
    setCredentials: (
      state,
      {payload}: PayloadAction<{token?: string; user: User}>,
    ) => {
      if (payload.token) {
        state.userToken = payload.token;
        axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;
        storage.set(storageKey.userToken, payload.token);
      }
      if (payload.user) {
        storage.set(storageKey.user, JSON.stringify(payload.user));
        state.user = payload.user;
      }
    },
    logout: () => {
      storage.clearAll();
      axios.defaults.headers.common.Authorization = '';

      return {...initialState, isLoadingLocalStorage: false};
    },
    setLoginPayload: (
      state,
      {payload}: PayloadAction<Partial<ConfirmAuthReq>>,
    ) => {
      state.loginPayload = {...state.loginPayload, ...payload};
    },
  },
});

export const {logout, setLoginPayload, setCredentials, getUserDataFromStorage} =
  authSlice.actions;
