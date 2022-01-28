import React, { createContext, useState, useEffect } from "react";
import { AuthContextProps } from "../../Types";
import { Alert } from "react-native";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../services/firebase";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null || {});
  const [signed, setSigned] = useState(false);

  const onAuthStateChanged = (user: any): void => {
    user ? (setUser(user), setSigned(true)) : (setUser({}), setSigned(false));
  };

  const signIn = (
    email: string,
    password: string,
    setLoading: React.DispatchWithoutAction
  ): void => {
    setLoading();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          console.log("Usuário logado com sucesso");
          console.log(userCredential.user);
          onAuthStateChanged(userCredential.user);
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro ao efetuar o login");
      })
      .finally(() => setLoading());
  };

  const logout = (): void => {
    signOut(auth).then(() => {
      Alert.alert("Logout efetuado com sucesso");
      onAuthStateChanged(null);
    });
  };

  const registerUserWhithEmailAndPassword = (
    email: string,
    name: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro ao cadastrar usuário");
      });
  };
  useEffect(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ signed, signIn, logout, registerUserWhithEmailAndPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, AuthContextProps };
