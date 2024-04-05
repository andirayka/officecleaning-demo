/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {MainTabParamList} from '@/types/routes';
import {SelectService} from '@/features/order';
import {Icon} from 'react-native-paper';
import {Home} from '@/features/home';
import {Profile} from '@/features/profile';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export default () => {
  return (
    <MainTab.Navigator screenOptions={{headerShown: false}}>
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon source="home" color={color} size={20} />
          ),
        }}
      />
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
      <MainTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon source="account" color={color} size={20} />
          ),
          headerShown: true,
          title: 'Profile',
          headerTitleAlign: 'center',
        }}
      />
    </MainTab.Navigator>
  );
};
