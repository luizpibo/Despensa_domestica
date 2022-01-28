import {
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from "react-native";
import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";

type AuthContextProps = {
  signed: boolean;
  signIn: (
    email: string,
    password: string,
    setLoading: React.DispatchWithoutAction
  ) => void;
  logout: () => void;
  registerUserWhithEmailAndPassword: (
    email: string,
    password: string,
    name: string,
    setLoading: React.DispatchWithoutAction
  ) => void;
};

type User = {
  uid: string;
  email: string;
  name: string;
};

interface IButton extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

interface FormInputProps extends TextInputProps {
  name: string;
  label?: string;
  type: string;
}

interface LoginWithEmailAndPasswordProps {
  email: string;
  password: string;
}

type HandleRegisterUserWhithEmailAndPasswordProps = {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
};

type RootStackParamListInitialRoute = {
  Main: undefined;
  Login: undefined;
  SignUp: undefined;
  Register: undefined;
  LoginWithEmailAndPassword: undefined;
  RegisterUserWhithEmailAndPassword: undefined;
  SwitchRegisterType: undefined;
  UserRoute: undefined;
};
type MainProps = {
  navigation: StackNavigationProp<RootStackParamListInitialRoute, "Main">;
};
type LoginProps = {
  navigation: StackNavigationProp<RootStackParamListInitialRoute, "Login">;
};
type SwitchRegisterTypeProps = {
  navigation: StackNavigationProp<RootStackParamListInitialRoute, "Register">;
};
type RegisterUserWhithEmailAndPasswordProps = {
  navigation: StackNavigationProp<
    RootStackParamListInitialRoute,
    "RegisterUserWhithEmailAndPassword"
  >;
};

export {
  AuthContextProps,
  User,
  IButton,
  FormInputProps,
  LoginProps,
  SwitchRegisterTypeProps,
  MainProps,
  LoginWithEmailAndPasswordProps,
  HandleRegisterUserWhithEmailAndPasswordProps,
  RegisterUserWhithEmailAndPasswordProps,
  RootStackParamListInitialRoute,
};
