import React, { memo, useRef, useEffect, useReducer, useCallback } from "react";

import {
  Text,
  TextInput,
  TextInputProps,
  Image,
  TouchableOpacity,
  View,
} from "react-native";

import { useField } from "@unform/core";

const Visibility = require("../../../../assets/icons/visibility.png");
const VisibilityOff = require("../../../../assets/icons/visibilityOff.png");

import Styles from "./styles";
import { FormInputProps } from "../../../Types";

interface InputReference extends TextInput {
  value: string;
}

const FormInput = ({
  name,
  label,
  onChangeText,
  type,
  ...rest
}: FormInputProps) => {
  //Configurações do unForm para o input
  const inputRef = useRef<InputReference>(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({
            text: value,
          });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  //Manipulando alterações do imput
  const handleChangeText = useCallback(
    (text: string) => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  //Selecionando o tipo de input
  function SwitchIput() {
    switch (type) {
      case "password":
        return <PasswordInput />;
      default:
        return <DefaultInput />;
    }
  }

  //Input padrão
  const DefaultInput = () => {
    return (
      <View style={Styles.InputContainer}>
        <TextInput
          defaultValue={defaultValue}
          onChangeText={handleChangeText}
          ref={inputRef}
          style={Styles.input}
          {...rest}
        />
      </View>
    );
  };

  //Input de senha
  const PasswordInput = () => {
    const initialState = true;
    const [showPassword, toggleShowPassword] = useReducer((state) => {
      return !state;
    }, initialState);

    const [icon, toggleIcon] = useReducer((state) => {
      return state === Visibility ? VisibilityOff : Visibility;
    }, Visibility);

    const onPress = () => {
      toggleIcon();
      toggleShowPassword();
    };
    return (
      <View style={Styles.InputContainer}>
        <TextInput
          secureTextEntry={showPassword}
          defaultValue={defaultValue}
          onChangeText={handleChangeText}
          ref={inputRef}
          style={Styles.input}
          {...rest}
        />
        <TouchableOpacity onPress={onPress} style={Styles.button}>
          <Image style={Styles.icon} source={icon} />
        </TouchableOpacity>
      </View>
    );
  };

  //Retornando o input
  return (
    <View style={Styles.container}>
      {label && (
        <View style={Styles.labelContainer}>
          {error ? (
            <Text style={Styles.errorLabel}>{error}</Text>
          ) : (
            <Text style={Styles.label}>{label}</Text>
          )}
        </View>
      )}
      <SwitchIput />
    </View>
  );
};

export default memo(FormInput);
