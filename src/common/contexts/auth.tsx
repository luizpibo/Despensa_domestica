import React, { createContext, useState, useEffect } from "react";
import { AuthContextProps } from "../../Types";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({});
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
    auth()
      .signInWithEmailAndPassword(email, password)
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

  const signOut = (): void => {
    auth().signOut();
  };

  const registerUserWhithEmailAndPassword = (
    email: string,
    name: string,
    password: string
  ) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Erro ao cadastrar usuário");
      });
  };
  useEffect(() => {
    const currentUser = auth().currentUser;
    console.log(currentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed, signIn, signOut, registerUserWhithEmailAndPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, AuthContextProps };
