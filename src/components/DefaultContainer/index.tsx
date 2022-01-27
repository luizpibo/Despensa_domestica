import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const imageBackground = require("../../../assets/fundo_app.png");
import Styles from "./styles";

const DefaultContainer: React.FC = ({ children }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ImageBackground style={Styles.container} source={imageBackground}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={Styles.wrapper}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              minHeight: "100%",
              minWidth: "100%",
              padding: 20,
            }}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DefaultContainer;
