import React, { memo } from "react";
import { Image, Text } from "react-native";

import DefaultContainer from "../../components/DefaultContainer";
import Button from "../../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styles from "./styles";
import { MainProps } from "../../Types";

const logo = require("../../../assets/marketPic.png");

const Home: React.FC<MainProps> = ({ navigation }) => {
  return (
    <DefaultContainer>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.title}>Despensa doméstica</Text>
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Login"
      />
      <Button
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("SwitchRegisterType")}
        title="Cadastrar"
      />
    </DefaultContainer>
  );
};

export default memo(Home);
