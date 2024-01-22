import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from '../../Layouts/Auth-pages/OnBoard/Onboard'

const onBoardStack = createStackNavigator();

const OnBoardStackScreen = () => (

    <onBoardStack.Navigator  
    screenOptions={{
        headerShown: false,
      }}>
        <onBoardStack.Screen name="OnBoard" component={OnBoard}/>      
    </onBoardStack.Navigator>
);
export default OnBoardStackScreen

