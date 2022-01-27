import React, { memo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { IButton } from "../../Types";
import defaultStyle from "./styles";

const Button = ({ title, buttonStyle, textStyle, ...rest }: IButton) => {
  const currentStyle = {
    button: buttonStyle
      ? [defaultStyle.button, buttonStyle]
      : defaultStyle.button,
    text: textStyle ? [defaultStyle.text, textStyle] : defaultStyle.text,
  };

  return (
    <TouchableOpacity style={currentStyle.button} {...rest}>
      <Text style={currentStyle.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
