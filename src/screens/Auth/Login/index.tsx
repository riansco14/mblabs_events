import React, { useState, useRef } from "react";
import {
  Container,
  Footer,
  FormContainer,
  LogoContainer,
  RememberPasswordContainer,
  WrapperContainer,
} from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { EditText } from "../../../components/EditText";
import { Heading } from "../../../components/Heading";
import { Button } from "../../../components/Button";
import { Switch, TextInput } from "react-native-gesture-handler";

import Logo from "../../../assets/ilustrations/logoEventsColor.svg";
import { StatusBar } from "expo-status-bar";

export function Login() {
  const theme = useTheme();
  const [rememberPassword, setRememberPassword] = useState(true);

  const refPasswordInput = useRef<TextInput | null>();
  function handleLogin() {}

  return (
    <Container>
      <StatusBar
        backgroundColor={theme.colors.primary}
        style="light"
      ></StatusBar>
      <WrapperContainer>
        <FormContainer>
          <LogoContainer>
            <Logo width={160} height={160} />
            <Heading type="h4">Bem vindo, novamente!</Heading>
          </LogoContainer>

          <Text
            type="defaultBold"
            color={theme.colors.font_grey}
            style={{ marginTop: 60 }}
          >
            E-mail
          </Text>
          <EditText
            placeholder="name@example.com"
            returnKeyType="next"
            onSubmitEditing={() => refPasswordInput.current?.focus()}
            blurOnSubmit={false}
          />
          <Text
            type="defaultBold"
            color={theme.colors.font_grey}
            style={{ marginTop: 30 }}
          >
            Senha
          </Text>
          <EditText ref={refPasswordInput} placeholder="Enter your password" />
          <RememberPasswordContainer>
            <Text type="default" color={theme.colors.font_grey}>
              Lembrar senha
            </Text>
            <Switch
              trackColor={{
                false: theme.colors.font_grey,
                true: theme.colors.primary,
              }}
              thumbColor={theme.colors.white}
              onValueChange={() => {
                setRememberPassword((oldState) => !oldState);
              }}
              value={rememberPassword}
            />
          </RememberPasswordContainer>
        </FormContainer>
        <Footer>
          <Button
            type="default"
            backgroundColor={theme.colors.primary}
            textColor={theme.colors.white}
            onPress={handleLogin}
          >
            Logar
          </Button>
        </Footer>
      </WrapperContainer>
    </Container>
  );
}
