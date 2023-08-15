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
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { setUserEmailRemember } from "../../../store/user/userSlice";

export function Login() {
  const theme = useTheme();

  const userRemember = useAppSelector((state) => state.user.userRemember);
  const dispatch = useAppDispatch();



  const [email, setEmail] = useState(userRemember.email || "");
  const [password, setPassword] = useState("");

  const [rememberPassword, setRememberPassword] = useState(userRemember.rememberStatus || false);

  const refPasswordInput = useRef<TextInput | null>();


  function handleLogin() {
    if (rememberPassword) {
      dispatch(setUserEmailRemember(email));
    }
  }

  function handleSwitchRememberEmail() {
    setRememberPassword(oldState=>{
      
      if(oldState){
        dispatch(setUserEmailRemember(""));
      }
      return !oldState
    })
  }

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
            value={email}
            onChangeText={setEmail}
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
          <EditText
            ref={refPasswordInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          <RememberPasswordContainer>
            <Text type="default" color={theme.colors.font_grey}>
              Lembrar e-mail
            </Text>
            <Switch
              trackColor={{
                false: theme.colors.font_grey,
                true: theme.colors.primary,
              }}
              thumbColor={theme.colors.white}
              onValueChange={handleSwitchRememberEmail}
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
