import React from "react";
import {
  AvatarContainer,
  ConfigButton,
  ConfigContainer,
  Container,
  Footer,
} from "./styles";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { Avatar } from "../../../components/Avatar";
import { ButtonUnderlined } from "../../../components/ButtonUnderlined";
import { useAppDispatch } from "../../../store/hook";
import { logout } from "../../../store/user/userSlice";
import { Icon } from "../../../components/Icon";

export function UserInfo() {
  const theme = useTheme();
  const dispatch = useAppDispatch()


  function handleLogout() {
    dispatch(logout())  
  }

  return (
    <Container>
      <AvatarContainer>
        <Avatar />
        <Heading type="h6" style={{ marginTop: 16 }}>
          Rian Rabelo
        </Heading>
        <Text type="small" color={theme.colors.black}>
          admin@gmail.com
        </Text>
      </AvatarContainer>

      <Heading type="h6" style={{ marginTop: 60, marginLeft: 16 }}>
        Configurações
      </Heading>

      <ConfigContainer>
        <ConfigButton>
          <Text type="small" color={theme.colors.black}>
            Cidade atual
          </Text>
          <Text type="small" color={theme.colors.black}>
            Recife
          </Text>
        </ConfigButton>
        <ConfigButton>
          <Text type="small" color={theme.colors.black}>
            Gerenciar Eventos
          </Text>
          <Icon name="chevron_right" color={theme.colors.font_dark} width={18} height={18} />
        </ConfigButton>
        <ConfigButton>
          <Text type="small" color={theme.colors.black}>
            Configurações pessoais
          </Text>
          <Icon name="chevron_right" color={theme.colors.font_dark} width={18} height={18} />
        </ConfigButton>
      </ConfigContainer>

      <Footer>
        <ButtonUnderlined
          type="default"
          textColor="black"
          onPress={handleLogout}
        >
          Logout
        </ButtonUnderlined>
      </Footer>
    </Container>
  );
}
