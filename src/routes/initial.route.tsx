import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Login from "../pages/Login";
import SwitchRegisterType from "../pages/Register";
import RegisterUserWhithEmailAndPassword from "../pages/Register/RegisterUserWhithEmailAndPassword";
import Main from "../pages/Main";
import LoginWithEmailAndPassword from "../pages/Login/LoginWithEmailAndPassword";
import UserRoute from "./user.route";
import { RootStackParamListInitialRoute } from "../Types";

const Stack = createNativeStackNavigator<RootStackParamListInitialRoute>();

const initialRotes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator
      initialRouteName="Main"
      screenOptions={{ ...stackNavigatorScreenOptions }}
    >
      <Screen
        name="Main"
        component={Main}
        options={{
          title: "Tela inicial",
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
        }}
      />
      <Screen
        name="SwitchRegisterType"
        component={SwitchRegisterType}
        options={{
          title: "Escolha uma forma de login",
        }}
      />
      <Screen
        name="LoginWithEmailAndPassword"
        component={LoginWithEmailAndPassword}
        options={{
          title: "Login com email e senha",
        }}
      />
      <Screen
        name="RegisterUserWhithEmailAndPassword"
        component={RegisterUserWhithEmailAndPassword}
        options={{
          title: "Registro com email e senha",
        }}
      />
      <Screen
        name="UserRoute"
        component={UserRoute}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

const stackNavigatorScreenOptions: NativeStackNavigationOptions = {
  animation: "fade",
  headerStyle: { backgroundColor: "#ed9121EF" },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
};

export default initialRotes;
