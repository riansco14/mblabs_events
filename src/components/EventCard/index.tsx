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

interface EventCardProps {
  idEvent: number;
  dateString: string;
  eventName: string;
  localName: string;
}

const temporarySwitchImages = (idEvent: number) => {
  switch (idEvent) {
    case 0:
      return require("../../../database/banda1.png");
    case 1:
      return require("../../../database/banda2.png");
    case 2:
      return require("../../../database/banda3.png");
    case 3:
      return require("../../../database/banda4.png");
  }
};

export function EventCard({
  idEvent,
  dateString,
  eventName,
  localName,
}: EventCardProps) {
  const theme = useTheme();

  const image = temporarySwitchImages(idEvent);
  return (
    <Container>
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
        <SocialButton name="heart" />
        <SocialButton name="share" style={{ marginLeft: 8 }} />
      </ButtonsContainer>
    </Container>
  );
}
