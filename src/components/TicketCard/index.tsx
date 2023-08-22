import React from "react";
import {
  Container,
  EventImage,
  TicketInfoContainer,
  TicketInfoSection,
  TicketInfoWrapper,
} from "./styles";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { useTheme } from "styled-components";
import { TicketType } from "../../common/types";
import { getImage } from "../../../database/db";
import moment from "moment";
import { TouchableOpacityProps } from "react-native";

interface TicketCardProps extends TouchableOpacityProps {
  dataTicket: TicketType;
  isPast?: boolean;
}

export function TicketCard({ dataTicket, isPast, ...rest }: TicketCardProps) {
  const theme = useTheme();
  const image = getImage(dataTicket.event.idEvent);

  return (
    <Container {...rest}>
      <TicketInfoContainer>
        <TicketInfoSection>
          <Icon
            name="ticket_fill"
            color={isPast ? theme.colors.font_grey : theme.colors.primary}
            width={32}
            height={32}
          />
          <TicketInfoWrapper>
            <Text type="defaultBold" color={theme.colors.black}>
              {dataTicket.event.eventName}
            </Text>
            <Text type="small" color={theme.colors.font_dark}>
              {moment(dataTicket.event.dateInfo.startDate)
                .format("ddd, MMM D · kk:mm")
                .toUpperCase()}
            </Text>
          </TicketInfoWrapper>
        </TicketInfoSection>
        <Text
          type="small"
          color={theme.colors.black}
          style={{ marginTop: 6, marginLeft: 6 }}
        >
          {dataTicket.amount} {dataTicket.amount > 1 ? "Ingressos" : "Ingresso"}
        </Text>
      </TicketInfoContainer>
      <EventImage source={image} />
    </Container>
  );
}
