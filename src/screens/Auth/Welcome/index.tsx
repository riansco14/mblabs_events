import React from "react";
import { Container } from "./styles";
import { Heading } from "../../../components/Heading";

import WelcomePeople from "./../../../assets/ilustrations/welcomePeople.svg";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../config/navigation/routes";

import Logo from "../../../assets/ilustrations/logoEventsColor.svg";
import { ButtonUnderlined } from "../../../components/ButtonUnderlined";

export function Welcome() {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>();

  function handleLogin() {
    navigation.navigate("Login");
  }

  function handleRegister() {
    navigation.navigate("Register");
  }

  return (
    <Container>
      <Logo width={120} height={120} />
      <Heading type="h2" style={{ marginTop: 0 }}>
        Bem vindo!
      </Heading>
      <Text
        type="small"
        color={theme.colors.font_grey}
        style={{ marginTop: 12 }}
      >
        Entre na sua conta e procure algum evento
      </Text>
      <WelcomePeople style={{ marginTop: 60 }} />

      <Button
        type="default"
        backgroundColor={theme.colors.primary}
        textColor={theme.colors.white}
        style={{ marginTop: 100 }}
        onPress={handleLogin}
      >
        Logar
      </Button>

      <ButtonUnderlined
        type="default"
        textColor={theme.colors.font_grey}
        style={{ marginTop: 20 }}
        onPress={handleRegister}
      >
        Não tem conta?{" "}
        <Text type="defaultBold" color={theme.colors.primary}>
          Registre-se
        </Text>
      </ButtonUnderlined>
    </Container>
  );
}
