import React, { useRef, useContext, useReducer, memo } from "react";
import validator from "validator";

import { AuthContext, AuthContextProps } from "../../../common/contexts/auth";
import { Form } from "@unform/mobile";
import FormInput from "../../../components/Forms/FormInput";

import Button from "../../../components/Button";
import DefaultContainer from "../../../components/DefaultContainer";
import { HandleRegisterUserWhithEmailAndPasswordProps } from "../../../Types";
import { FormHandles } from "@unform/core";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

interface errorProps {
  email: string | undefined;
  name: string | undefined;
  password: string | undefined;
  passwordConfirmation: string | undefined;
}
const RegisterWhitEmailAndPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { registerUserWhithEmailAndPassword } = useContext(
    AuthContext
  ) as AuthContextProps;
  const [loading, setLoading] = useReducer((value: boolean) => {
    return !value;
  }, false);
  //Validando dados do formulaio
  const handleFormSubmit = ({
    email,
    name,
    password,
    passwordConfirmation,
  }: HandleRegisterUserWhithEmailAndPasswordProps) => {
    let errorsMenssges: errorProps;
    errorsMenssges = {
      email: email && validator.isEmail(email) ? undefined : "Email inválido",
      name:
        name && validator.isAlpha(name) && !validator.isEmpty(name)
          ? undefined
          : "Nome inválido",
      password:
        password && validator.isStrongPassword(password)
          ? undefined
          : "Senha fraca",
      passwordConfirmation:
        passwordConfirmation && validator.equals(password, passwordConfirmation)
          ? undefined
          : "Senhas não conferem",
    };
    //Caso tenha algum erro, setar erros
    if (
      errorsMenssges.email ||
      errorsMenssges.password ||
      errorsMenssges.name ||
      errorsMenssges.passwordConfirmation
    ) {
      formRef.current?.setErrors(errorsMenssges);
    } else {
      formRef.current?.setErrors({});
      registerUserWhithEmailAndPassword(email, password, name, setLoading);
    }
  };

  return (
    <DefaultContainer>
      <Form ref={formRef} onSubmit={handleFormSubmit} style={{ width: "100%" }}>
        <FormInput
          name="name"
          type="text"
          label="Nome"
          placeholder="Digite o nome"
        />
        <FormInput
          name="email"
          type="email"
          label="email"
          placeholder="Digite o email"
        />
        <FormInput
          name="password"
          type="password"
          label="Senha"
          placeholder="Digite a senha"
        />
        <FormInput
          name="passwordConfirmation"
          type="password"
          label="Confirmar senha"
          placeholder="Digite a senha"
        />

        <Button
          title="Registrar"
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
    </DefaultContainer>
  );
};

export default memo(RegisterWhitEmailAndPassword);
