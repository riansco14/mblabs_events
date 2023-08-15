import React from "react";
import { Container } from "./styles";
import { Icon, IconNames } from "../Icon";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface SocialButtonProps extends TouchableOpacityProps{
    name: `${IconNames.heart}` | `${IconNames.share}`
    color?: string
}

export function SocialButton({name, color, ...rest}:SocialButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Icon
        name={name}
        color={theme.colors.font_grey}
        width={18}
        height={18}
      />
    </Container>
  );
}
