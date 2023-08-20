import React from "react";
import { Container } from "./styles";
import { Icon, IconNames } from "../Icon";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface SocialButtonProps extends TouchableOpacityProps{
    name: `${IconNames.heart}` | `${IconNames.share}`
    color?: string
    isLiked?: boolean
}

export function SocialButton({name, color, isLiked=false, ...rest}:SocialButtonProps) {
  const theme = useTheme();
  
  return (
    <Container {...rest}>
      <Icon
        name={isLiked && name ==="heart" ? IconNames.heart_fill: name}
        color={isLiked && name ==="heart"? theme.colors.red : (color?color:theme.colors.font_grey)}
        width={18}
        height={18}
      />
    </Container>
  );
}
