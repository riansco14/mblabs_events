import React from "react";
import { Container } from "./styles";
import { Text } from "../Text";
import theme from "../../config/styles/theme";
import { Heading } from "../Heading";
import { TouchableOpacityProps } from "react-native";
import { CityType } from "../../common/types";

interface CityCardProps extends TouchableOpacityProps {
  dataCity: CityType;
}

export function CityCard({ dataCity,...rest }: CityCardProps) {
  return (
    <Container {...rest }>
      <Heading type="h6">{dataCity.city}</Heading>
      <Text
        type="default"
        color={theme.colors.font_dark}
        style={{ marginTop: 2 }}
      >
        {dataCity.state}
      </Text>
    </Container>
  );
}
