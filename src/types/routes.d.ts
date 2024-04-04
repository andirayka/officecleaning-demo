import {NavigatorScreenParams} from '@react-navigation/native';

type MainStackParamList = {
  MainTab: NavigatorScreenParams<MainTabParamList>;
  SelectSchedule: undefined;
  SelectAddress: undefined;
  CalculatePrice: undefined;
  Payment: undefined;
};

type MainTabParamList = {
  Home: undefined;
  SelectService: undefined;
  Profile: undefined;
};
