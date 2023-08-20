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
import { EventCardType } from "../../common/types";

import moment from "moment";
interface EventCardProps extends TouchableOpacityProps {
  eventData: EventCardType;
  isLiked: boolean;
  onPressLikeButton: () => void;
  onPressShareButton: () => void;
}

export function EventCard({
  eventData,
  isLiked,
  onPressLikeButton,
  onPressShareButton,
  ...rest
}: EventCardProps) {
  const theme = useTheme();

  const image = getImage(eventData.idEvent);
  return (
    <Container {...rest}>
      <EventImage source={image}></EventImage>
      <EventInfoContainer>
        <Text type="small" color={theme.colors.font_dark}>
          {moment(eventData.dateInfo.startDate)
            .format("ddd, MMM D · kk:mm")
            .toUpperCase()}
        </Text>
        <Text type="defaultBold" color={theme.colors.font_dark}>
          {eventData.eventName}
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
            {eventData.locationName}
          </Text>
        </LocationEventContainer>
      </EventInfoContainer>
      <ButtonsContainer>
        <SocialButton
          name="heart"
          isLiked={isLiked}
          onPress={onPressLikeButton}
        />
        <SocialButton
          name="share"
          style={{ marginLeft: 8 }}
          onPress={onPressShareButton}
        />
      </ButtonsContainer>
    </Container>
  );
}
