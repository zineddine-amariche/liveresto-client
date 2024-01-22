import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from "../../Layouts/Auth-pages/Splash/Splash"
import OnBoardStackScreen from '../navigation/onBoardStack';
// import Register from '../../Layouts/Auth-pages/Register/Register';
import Laoding2 from '../../Layouts/Auth-pages/Laoder-2';
import Login from '../../Layouts/Auth-pages/Login';
import Register from '../../Layouts/Auth-pages/Register';
import ConfirmPassword from '../../Layouts/Auth-pages/ForgotPassword/ConfirmPassword';
import ForgotPassword from '../../Layouts/Auth-pages/ForgotPassword';

const RootStack = createNativeStackNavigator();

function SwitchHome(props) {
  setTimeout(() => {
    props.navigation.replace('login');
  }, 2000);
  return <SplashScreen />;
}
const AuthStackScreen = (props) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="SplashScreen" component={SwitchHome} />
    <RootStack.Screen name="login" component={Login} />
    <RootStack.Screen name="Register" component={Register} />
    <RootStack.Screen name="onBoardStackScreen" component={OnBoardStackScreen} />
    <RootStack.Screen name="Laoding2" component={Laoding2} />
    <RootStack.Screen name="ConfirmPassword" component={ConfirmPassword} {...props} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} {...props} />
  </RootStack.Navigator>
);

export default AuthStackScreen;
