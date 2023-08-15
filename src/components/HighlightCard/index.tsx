import React from "react";
import {
  ButtonsContainer,
  Container,
  EventInfoContainer,
  ImageHighlight,
  LocationEventContainer,
} from "./styles";
import { Text } from "../Text";
import { useTheme } from "styled-components";
import { ViewProps } from "react-native";
import { Icon } from "../Icon";
import { SocialButton } from "../SocialButton";

export function HighlightCard({ ...rest }: ViewProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <ImageHighlight source={require("../../../database/banda1.png")}>
        <EventInfoContainer>
          <Text type="small" color={theme.colors.font_dark}>
            Mon, Apr 18 · 21:00 Pm{" "}
          </Text>
          <Text type="defaultBold" color={theme.colors.font_dark}>
            La Rosalia
          </Text>
          <LocationEventContainer>
            <Icon
                name="map_pin"
                color={theme.colors.font_dark}
                width={14}
                height={14}
              />
            <Text type="small" color={theme.colors.font_dark} style={{marginLeft: 4}}>
              Palau Sant Jordi, Barcelona{" "}
            </Text>
          </LocationEventContainer>
          <ButtonsContainer>
            <SocialButton name="heart" />
            <SocialButton name="share" style={{ marginLeft: 8 }} />
          </ButtonsContainer>
        </EventInfoContainer>
      </ImageHighlight>
    </Container>
  );
}
