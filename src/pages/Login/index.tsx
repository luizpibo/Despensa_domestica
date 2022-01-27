import React, { memo } from "react";
import { StyleSheet } from "react-native";

import Button from "../../components/Button";
import DefaultContainer from "../../components/DefaultContainer/index";
import { LoginProps } from "../../Types";

const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <DefaultContainer>
      <Button
        title="Login com Email e senha"
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate("LoginWithEmailAndPassword");
        }}
      />
      <Button title="Login com Gmail" buttonStyle={styles.button} />
      <Button title="Login com Facebook" buttonStyle={styles.button} />
    </DefaultContainer>
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1ACC7B",
  },
});
