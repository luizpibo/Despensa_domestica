import React, { memo, useContext, useReducer, useRef } from "react";
import validator from "validator";

import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import { AuthContext, AuthContextProps } from "../../../common/contexts/auth";
import FormInput from "../../../components/Forms/FormInput";
import Button from "../../../components/Button";
import DefaultContainer from "../../../components/DefaultContainer";
import { LoginWithEmailAndPasswordProps } from "../../../Types";
import { Alert } from "react-native";
import Auth from "@react-native-firebase/auth";

const LoginWithEmailAndPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useReducer((value: boolean) => {
    return !value;
  }, false);
  const { signIn } = useContext(AuthContext) as AuthContextProps;

  const handleFormSubmit: SubmitHandler<LoginWithEmailAndPasswordProps> = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): void => {
    let errosMenssages = {
      email: email && !validator.isEmpty(email) ? null : "Email",
      password: password && !validator.isEmpty(password) ? null : "Senha",
    };
    //Caso tenha algum erro, setar erros
    if (errosMenssages.email || errosMenssages.password) {
      console.log("Erros: ", errosMenssages);
      formRef.current?.setErrors(errosMenssages);
    } else {
      formRef.current?.setErrors({});
      // signIn(email, password, setLoading);
      Auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.log("deu erro"));
    }
  };

  return (
    <DefaultContainer>
      <Form ref={formRef} onSubmit={handleFormSubmit} style={{ width: "100%" }}>
        <FormInput name="email" type="email" placeholder="Digite o email" />
        <FormInput
          name="password"
          type="password"
          placeholder="Digite a senha"
        />
        <Button title="Entrar" onPress={() => formRef.current?.submitForm()} />
      </Form>
      <Button
        disabled={loading}
        onPress={() => {
          console.log("esqueci a senha");
        }}
        title="Esqueci minha senha"
        buttonStyle={{ width: "100%", backgroundColor: "#1ACC7B" }}
      />
    </DefaultContainer>
  );
};

export default memo(LoginWithEmailAndPassword);
