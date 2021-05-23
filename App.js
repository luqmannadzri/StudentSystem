import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from './src/screens/ListScreen';
import NewScreen from './src/screens/NewScreen';
import ViewScreen from './src/screens/ViewScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const RootStack = createStackNavigator(
  {
    Signup: SignupScreen,
    Login: LoginScreen,
    View: ViewScreen,
    New: NewScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Login'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}