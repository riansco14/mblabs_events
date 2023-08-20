import React, { useRef } from "react";
import {
  Container,
  Content,
  Footer,
  FooterSection,
  Section,
  SectionAbout,
  SectionInfo,
} from "./styles";

import { ScrollView, Animated } from "react-native";

import DynamicHeader from "../../../../components/DynamicHeader";
import { StatusBar } from "expo-status-bar";
import { Text as TextCustom } from "../../../../components/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Heading } from "../../../../components/Heading";
import { Icon } from "../../../../components/Icon";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../../store/event/eventSlice";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../../config/navigation/routes";
import { getEvent } from "../../../../../database/db";
import { Linking, Platform } from "react-native";
import { openMaps } from "../../../../services/system/System";

export function TicketInfo({ route }) {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>();

  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  const { idEvent } = route.params;
  const event = getEvent(idEvent);

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
      <StatusBar backgroundColor={theme.colors.primary} style="light" />
      <DynamicHeader
        idEvent={idEvent}
        animHeaderValue={scrollOffsetY}
        onPressGoBack={handleGoBack}
        isLiked={eventsFavorites.includes(idEvent)}
        onPressLikeButton={() => handleAddOrRemoveFavorite(idEvent)}
      />
      <ScrollView
        scrollEventThrottle={4}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        style={{ backgroundColor: "white" }}
        contentContainerStyle={{ height: 800 }}
      >
        <Content>
          <Heading type="h4">{event.eventName}</Heading>
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
                {event.dateString}
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                {event.datePeriod}
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.blue}
                style={{ fontWeight: "bold", lineHeight: 14 }}
              >
                Adicionar ao calendário
              </TextCustom>
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
                {event.localName}
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                {event.locationAddress}
              </TextCustom>
              <TouchableOpacity onPress={() => openMaps(event.locationGPS)}>
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

          <Section>
            <Icon
              name="dollar_sign"
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
                Política de Reembolso
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                Reembolso gratuito
              </TextCustom>
            </SectionInfo>
          </Section>
          <SectionAbout>
            <TextCustom
              type="defaultBold"
              color={theme.colors.font_dark}
              style={{ lineHeight: 24 }}
            >
              About
            </TextCustom>

            <TextCustom
              type="small"
              color={theme.colors.font_dark}
              style={{ lineHeight: 24 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio quibusdam laborum dolores odio amet officia eveniet,
              labore ad rerum? A laudantium unde voluptate eum maxime molestias
              eos dolore animi dolor!
            </TextCustom>
          </SectionAbout>
        </Content>
      </ScrollView>

      <Footer>
        <FooterSection>
          <TextCustom type="defaultBold" color={theme.colors.font_dark}>
            Preço
          </TextCustom>
          <TextCustom
            type="default"
            color={theme.colors.font_dark}
            style={{ marginTop: 4 }}
          >
            {event.price}
          </TextCustom>
        </FooterSection>
        <FooterSection>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: theme.colors.primary,
              padding: 12,
              borderRadius: 10,
            }}
          >
            <TextCustom type="default" color={theme.colors.white}>
              Comprar
            </TextCustom>
          </TouchableOpacity>
        </FooterSection>
      </Footer>
    </Container>
  );
}
