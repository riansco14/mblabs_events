import React from "react";
import {
  ButtonsContainer,
  Container,
  EventImage,
  EventInfoContainer,
  LocationEventContainer,
} from "./styles";
import { Text } from "../Text";
import { useTheme } from "styled-components";
import { Icon } from "../Icon";
import { SocialButton } from "../SocialButton";
import { getImage } from "../../../database/db";
import { TouchableOpacityProps } from "react-native";

interface EventCardProps extends TouchableOpacityProps {
  idEvent: number;
  dateString: string;
  eventName: string;
  localName: string;
  isLiked: boolean;
  onPressLikeButton: () => void;
}

export function EventCard({
  idEvent,
  dateString,
  eventName,
  localName,
  isLiked,
  onPressLikeButton,
  ...rest
}: EventCardProps) {
  const theme = useTheme();

  const image = getImage(idEvent);
  return (
    <Container {...rest}>
      <EventImage source={image}></EventImage>
      <EventInfoContainer>
        <Text type="small" color={theme.colors.font_dark}>
          {dateString}
        </Text>
        <Text type="defaultBold" color={theme.colors.font_dark}>
          {eventName}
        </Text>
        <LocationEventContainer>
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
      </EventInfoContainer>
      <ButtonsContainer>
        <SocialButton
          name="heart"
          isLiked={isLiked}
          onPress={onPressLikeButton}
        />
        <SocialButton name="share" style={{ marginLeft: 8 }} />
      </ButtonsContainer>
    </Container>
  );
}
