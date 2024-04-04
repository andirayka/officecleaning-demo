import {MMKV} from 'react-native-mmkv';

// COMMENT THE DATA TYPE AT THE RIGHT
export const storageKey = {
  userToken: 'userToken', // string
  user: 'user', // object
  dontShowLoginScreen: 'dontShowLoginScreen', // boolean
};

export const storage = new MMKV();

export const getLocalStorageObject = (keyName: string) => {
  const stringData = storage.getString(keyName);
  if (stringData) {
    return JSON.parse(stringData);
  }

  return undefined;
};
