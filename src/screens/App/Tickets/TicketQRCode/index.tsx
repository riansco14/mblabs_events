import React, { useRef } from "react";
import {
  Container,
  Content,
  Section,
  SectionInfo,
  TicketQRCodeContainer,
  TicketQRCodeImage,
} from "./styles";

import { ScrollView, Animated } from "react-native";

import DynamicHeader from "../../../../components/DynamicHeader";
import { Text, Text as TextCustom } from "../../../../components/Text";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Heading } from "../../../../components/Heading";
import { Icon } from "../../../../components/Icon";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../../store/event/eventSlice";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../../config/navigation/routes";
import { getTicket } from "../../../../../database/db";
import {
  createEventInCalendar,
  openMaps,
  shareEvent,
} from "../../../../services/system/System";

import moment from "moment";

export function TicketQRCode({ route }) {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>();

  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const { idTicket } = route.params;
  const ticketData = getTicket(idTicket);

  const eventData = ticketData.event;
  const { idEvent } = eventData;

  const eventsFavorites = useAppSelector(
    (state) => state.event.eventsFavorites
  );
  const dispatch = useAppDispatch();

  function handleAddOrRemoveFavorite(idEvent: number) {
    dispatch(addOrRemoveEventFavorite({ idEvent }));
  }

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }

  return (
    <Container>
      <DynamicHeader
        idEvent={idEvent}
        animHeaderValue={scrollOffsetY}
        onPressGoBack={handleGoBack}
        isLiked={eventsFavorites.includes(idEvent)}
        onPressLikeButton={() => handleAddOrRemoveFavorite(idEvent)}
        onPressShareButton={() => shareEvent(eventData)}
      />
      <ScrollView
        scrollEventThrottle={8}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Content>
          <Heading type="h4">{eventData.eventName}</Heading>
          <Section>
            <Icon
              name="calendar"
              color={theme.colors.black}
              width={18}
              height={18}
            />
            <SectionInfo>
              <TextCustom
                type="defaultBold"
                color={theme.colors.font_dark}
                style={{ lineHeight: 24 }}
              >
                {moment(eventData.dateInfo.startDate)
                  .format("ddd, MMM D · kk:mm")
                  .toUpperCase()}
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                {moment(eventData.dateInfo.startDate)
                  .format("kk:mm")
                  .toUpperCase()}
                {"\t-\t"}
                {moment(eventData.dateInfo.endDate)
                  .format("kk:mm")
                  .toUpperCase()}
              </TextCustom>
              <TouchableOpacity
                onPress={() => {
                  createEventInCalendar({
                    title: eventData.eventName,
                    startDate: moment(eventData.dateInfo.startDate).format(
                      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                    ),
                    endDate: moment(eventData.dateInfo.endDate).format(
                      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                    ),
                  });
                }}
              >
                <TextCustom
                  type="small"
                  color={theme.colors.blue}
                  style={{ fontWeight: "bold", lineHeight: 14 }}
                >
                  Adicionar ao calendário
                </TextCustom>
              </TouchableOpacity>
            </SectionInfo>
          </Section>

          <Section>
            <Icon
              name="map_pin"
              color={theme.colors.black}
              width={18}
              height={18}
            />
            <SectionInfo>
              <TextCustom
                type="defaultBold"
                color={theme.colors.font_dark}
                style={{ lineHeight: 24 }}
              >
                {eventData.locationName}
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                {eventData.locationAddress}
              </TextCustom>
              <TouchableOpacity onPress={() => openMaps(eventData.locationGPS)}>
                <TextCustom
                  type="small"
                  color={theme.colors.blue}
                  style={{ fontWeight: "bold", lineHeight: 14 }}
                >
                  Ver no mapa
                </TextCustom>
              </TouchableOpacity>
            </SectionInfo>
          </Section>

          <Heading type="h4" style={{ marginTop: 16 }}>
            Ingressos
          </Heading>
          {new Array(ticketData.amount).fill(0).map((item, index) => {
            return (
              <TicketQRCodeContainer
                style={{ marginTop: index === 0 ? 0 : 32 }}
                key={index}
              >
                <Text type="defaultBold" color={theme.colors.font_dark}>
                  Ingresso {index + 1}
                </Text>
                <TicketQRCodeImage
                  source={require("../../../../assets/ilustrations/qrCode.png")}
                />
              </TicketQRCodeContainer>
            );
          })}
        </Content>
      </ScrollView>
    </Container>
  );
}
