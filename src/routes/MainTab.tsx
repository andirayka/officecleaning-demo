import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabParamList} from '@/types/routes';
import {SelectService} from '@/features/order';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export default () => {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen name="SelectService" component={SelectService} />
    </MainTab.Navigator>
  );
};
