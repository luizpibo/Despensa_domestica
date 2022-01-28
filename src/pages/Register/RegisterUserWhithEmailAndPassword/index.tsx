import React, { useRef, useContext, useReducer } from "react";
import validator from "validator";
import { FormHandles } from "@unform/core";

import { AuthContext, AuthContextProps } from "../../../common/contexts/auth";

import { Form } from "@unform/mobile";
import FormInput from "../../../components/Forms/FormInput";

import Button from "../../../components/Button";
import DefaultContainer from "../../../components/DefaultContainer";

import { HandleRegisterUserWhithEmailAndPasswordProps } from "../../../Types";

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
    if (formRef.current) {
      var errors: Record<string, string> | null = null;
      !validator.isEmail(email) && (errors = { email: "Email inválido" });

      !validator.isLength(name, { min: 3 }) &&
        (errors
          ? (errors = { ...errors, name: "Nome inválido" })
          : (errors = { name: "Nome inválido" }));

      !validator.isLength(password, { min: 6 }) &&
        (errors
          ? (errors = { ...errors, password: "Senha inválida" })
          : (errors = { password: "Senha inválida" }));

      !validator.isStrongPassword(password) &&
        (errors
          ? (errors = { ...errors, password: "Senha inválida" })
          : (errors = { password: "Senha inválida" }));

      !validator.equals(password, passwordConfirmation) &&
        (errors
          ? (errors = {
              ...errors,
              passwordConfirmation: "Senhas não conferem",
            })
          : (errors = { passwordConfirmation: "Senhas não conferem" }));

      //Caso tenha algum erro, setar erros
      if (errors) {
        console.log(errors);
        formRef.current.setErrors(errors);
        return;
      } else {
        registerUserWhithEmailAndPassword(email, password, name, setLoading);
      }
      formRef.current.setErrors({});
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
          disabled={loading}
          title="Registrar"
          onPress={() => formRef.current?.submitForm()}
        />
      </Form>
    </DefaultContainer>
  );
};

export default RegisterWhitEmailAndPassword;
