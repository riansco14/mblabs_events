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

interface TicketCardProps {
  isPast?: boolean;
}

export function TicketCard({ isPast }: TicketCardProps) {
  const theme = useTheme();
  const image = isPast ?  require("../../../database/banda1grey.png"): require("../../../database/banda1.png")
  
  return (
    <Container>
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
              La Rosalia
            </Text>
            <Text type="small" color={theme.colors.font_dark}>
              Mon, Apr 18 · 21:00 Pm{" "}
            </Text>
          </TicketInfoWrapper>
        </TicketInfoSection>
        <Text
          type="small"
          color={theme.colors.black}
          style={{ marginTop: 6, marginLeft: 6 }}
        >
          2 Ingressos
        </Text>
      </TicketInfoContainer>
      <EventImage source={image} />
    </Container>
  );
}
