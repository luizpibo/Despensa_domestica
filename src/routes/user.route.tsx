import React from "react";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";

import DashBoard from "../pages/DashBoard";

import { cores } from "../styles";
import Despensa from "../pages/Despensa";
import Chats from "../pages/Chats";

const Tab = createBottomTabNavigator();

const RotasApp = () => {
  const { Navigator, Screen } = Tab;
  return (
    <Navigator
      screenOptions={{
        ...TabNavigatorScreenOptions,
      }}
      initialRouteName="Dashboard"
    >
      <Screen name="Dashboard" component={DashBoard} />
      <Screen name="Despensa" component={Despensa} />
      <Screen name="Chats" component={Chats} />
    </Navigator>
  );
};

const TabNavigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: "#ed9121EF",
  },
  headerTintColor: "#fff",
  headerTitleStyle: { fontWeight: "bold" },
  /* Mudando cor do icone da aba ativa */
  tabBarActiveTintColor: cores.roxo,
  /* Mudando cor do icone da aba inativa */
  tabBarInactiveTintColor: cores.claro,
  /* Mudando configurações de estilo da label */
  tabBarActiveBackgroundColor: cores.roxo,
  tabBarInactiveBackgroundColor: cores.cinza,
  tabBarStyle: {
    height: 70,
    width: "100%",
  },
  tabBarIconStyle: { display: "none" },
  tabBarLabelStyle: {
    width: "100%",
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 21,
    marginTop: 3,
    paddingTop: 21,
    backgroundColor: cores.laranja,
  },
};

export default RotasApp;
