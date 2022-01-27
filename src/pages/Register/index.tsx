import React from "react";
import Button from "../../components/Button";
import DefaultContainer from "../../components/DefaultContainer";
import { StyleSheet } from "react-native";
import { SwitchRegisterTypeProps } from "../../Types";

const SwitchRegisterType: React.FC<SwitchRegisterTypeProps> = ({
  navigation,
}) => {
  return (
    <DefaultContainer>
      <Button
        title="Registrar com email e senha"
        onPress={() => {
          navigation.navigate("RegisterUserWhithEmailAndPassword");
        }}
        buttonStyle={styles.button}
      />
      <Button title="Registrar com Gmail" buttonStyle={styles.button} />
      <Button title="Registrar com Facebook" buttonStyle={styles.button} />
    </DefaultContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#1ACC7B",
  },
});
export default SwitchRegisterType;
