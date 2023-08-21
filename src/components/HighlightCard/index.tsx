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
import { EventCardType } from "../../common/types";

import moment from "moment";
import { getImage } from "../../../database/db";
interface EventCardProps extends TouchableOpacityProps {
  eventData: EventCardType
  isLiked: boolean;
  onPressLikeButton: () => void;
  onPressShareButton: () => void;
}

export function HighlightCard({
  eventData,
  isLiked,
  onPressLikeButton,
  onPressShareButton,
  ...rest
}: EventCardProps) {
  const theme = useTheme();
  const image = getImage(eventData.idEvent)
  return (
    <Container {...rest}>
      <ImageHighlight source={image}>
        <EventInfoContainer>
          <Text type="small" color={theme.colors.font_dark}>
          {moment(eventData.dateInfo.startDate).format("ddd, MMM D · kk:mm").toUpperCase()}
          </Text>
          <Text type="defaultBold" color={theme.colors.font_dark}>
            {eventData.eventName}
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
              {eventData.locationName}
            </Text>
          </LocationEventContainer>
          <ButtonsContainer>
            <SocialButton name="heart" isLiked={isLiked} onPress={onPressLikeButton} />
            <SocialButton name="share" style={{ marginLeft: 8 }} onPress={onPressShareButton} />
          </ButtonsContainer>
        </EventInfoContainer>
      </ImageHighlight>
    </Container>
  );
}
