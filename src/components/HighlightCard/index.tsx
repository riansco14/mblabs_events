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
import { Icon } from "../Icon";
import { SocialButton } from "../SocialButton";
import { TouchableOpacityProps } from "react-native";

interface EventCardProps extends TouchableOpacityProps {
  idEvent: number;
  dateString: string;
  eventName: string;
  localName: string;
  isLiked: boolean;
  onPressLikeButton: () => void;
}

export function HighlightCard({
  idEvent,
  dateString,
  eventName,
  localName,
  isLiked,
  onPressLikeButton,
  ...rest
}: EventCardProps) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <ImageHighlight source={require("../../../database/banda1.png")}>
        <EventInfoContainer>
          <Text type="small" color={theme.colors.font_dark}>
            {dateString}
          </Text>
          <Text type="defaultBold" color={theme.colors.font_dark}>
            {eventName}
          </Text>
          <LocationEventContainer style={{ marginTop: 4 }}>
            <Icon
              name="map_pin"
              color={theme.colors.font_dark}
              width={14}
              height={14}
            />
            <Text
              type="small"
              color={theme.colors.font_dark}
              style={{ marginLeft: 4 }}
            >
              {localName}
            </Text>
          </LocationEventContainer>
          <ButtonsContainer>
            <SocialButton name="heart" isLiked={isLiked} onPress={onPressLikeButton} />
            <SocialButton name="share" style={{ marginLeft: 8 }} />
          </ButtonsContainer>
        </EventInfoContainer>
      </ImageHighlight>
    </Container>
  );
}
