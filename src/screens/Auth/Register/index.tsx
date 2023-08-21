import React, { useRef } from "react";
import {
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Container,
  Footer,
  FormContainer,
  LogoContainer,
  WrapperContainer,
} from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { EditText } from "../../../components/EditText";
import { Heading } from "../../../components/Heading";
import { Button } from "../../../components/Button";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import Logo from "../../../assets/ilustrations/logoEventsColor.svg";

import { useFormik } from "formik";
import { Dimensions } from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('A confirmação de senha é obrigatória'),
});


export function Register() {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });


  const refEmailInput = useRef<TextInput | null>();
  const refPasswordInput = useRef<TextInput | null>();
  const refRepeatPasswordInput = useRef<TextInput | null>();

  
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{height: Dimensions.get("window").height }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <WrapperContainer>
            <FormContainer>
              <LogoContainer>
                <Logo width={120} height={120} />
                <Heading type="h4">Criar nova conta</Heading>
              </LogoContainer>

              <Text
                type="defaultBold"
                color={theme.colors.font_grey}
                style={{ marginTop: 60 }}
              >
                Nome Completo
              </Text>
              <EditText
                value={formik.values.name}
                onChangeText={formik.handleChange("name")}
                error={formik.errors.name}
                placeholder="Digite seu nome"
                returnKeyType="next"
                onSubmitEditing={() => refEmailInput.current?.focus()}
                blurOnSubmit={false}
              />

              <Text
                type="defaultBold"
                color={theme.colors.font_grey}
                style={{ marginTop: 30 }}
              >
                E-mail
              </Text>
              <EditText
                ref={refEmailInput}
                value={formik.values.email}
                error={formik.errors.email}
                onChangeText={formik.handleChange("email")}
                placeholder="Digite seu nome"
                returnKeyType="next"
                onSubmitEditing={() => refPasswordInput.current?.focus()}
                blurOnSubmit={false}
              />

              <Text
                type="defaultBold"
                color={theme.colors.font_grey}
                style={{ marginTop: 30 }}
              >
                Criar senha
              </Text>
              <EditText
                ref={refPasswordInput}
                value={formik.values.password}
                error={formik.errors.password}
                onChangeText={formik.handleChange("password")}
                placeholder="Digite seu nome"
                returnKeyType="next"
                onSubmitEditing={() => refRepeatPasswordInput.current?.focus()}
                blurOnSubmit={false}
              />

              <Text
                type="defaultBold"
                color={theme.colors.font_grey}
                style={{ marginTop: 30 }}
              >
                Repetir senha
              </Text>
              <EditText
                ref={refRepeatPasswordInput}
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
                onChangeText={formik.handleChange("repeatPassword")}
                placeholder="Digite seu nome"
                returnKeyType="done"
                onSubmitEditing={() => formik.submitForm()}
                blurOnSubmit={false}
              />
            </FormContainer>
            <Footer>
              <Button
                type="default"
                backgroundColor={theme.colors.primary}
                textColor={theme.colors.white}
                onPress={() => formik.submitForm()}
              >
                Registrar
              </Button>
            </Footer>
          </WrapperContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
