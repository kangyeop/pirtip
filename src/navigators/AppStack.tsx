import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/Home';
import {CreatePlan} from '../screen/Plan/CreatePlan';

const {Navigator, Screen} = createNativeStackNavigator();

export const AppStack: React.FC = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="CreatePlan" component={CreatePlan} />
    </Navigator>
  );
};
