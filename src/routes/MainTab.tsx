/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabParamList} from '@/types/routes';
import {SelectService} from '@/features/order';
import {Icon} from 'react-native-paper';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export default () => {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        name="SelectService"
        component={SelectService}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <Icon source="camera" color={color} size={20} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
