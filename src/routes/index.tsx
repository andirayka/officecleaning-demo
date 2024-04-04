import {SelectSchedule} from '@/features/order';
import MainTab from '@/routes/MainTab';
import {MainStackParamList} from '@/types/routes';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator<MainStackParamList>();

const Routes = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="SelectSchedule"
          component={SelectSchedule}
          options={{
            title: 'Select Schedule',
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
