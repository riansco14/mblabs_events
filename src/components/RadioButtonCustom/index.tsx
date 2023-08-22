import React from "react";
import { Container } from "./styles";
import { RadioButtonIcon } from "../RadioButtonIcon";
import { Text } from "../Text";
import { IconLogo, IconProps } from "../IconLogo";
import { useTheme } from "styled-components";
import { TouchableOpacityProps } from "react-native";

interface RadioButtonCustom extends TouchableOpacityProps {
  value: string;
  nameIcon: IconProps["name"];
  valueState?: string;
  price: number;
}

export function RadioButtonCustom({
  value,
  nameIcon,
  valueState,
  price,
  onPress,
}: RadioButtonCustom) {
  const theme = useTheme();
  return (
    <Container onPress={onPress}>
      <RadioButtonIcon checked={valueState === value} />
      <Text
        type="small"
        color={theme.colors.black}
        style={{ flex: 1, marginLeft: 16 }}
      >
        R$ {price}
      </Text>
      <IconLogo name={nameIcon} width={40} height={20} />
    </Container>
  );
}
