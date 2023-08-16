import React, { useRef } from "react";
import { Container, Content, Footer, FooterSection, Section, SectionAbout, SectionInfo } from "./styles";

import { ScrollView, Animated } from "react-native";

import DynamicHeader from "../../../../components/DynamicHeader";
import { StatusBar } from "expo-status-bar";
import { Text as TextCustom } from "../../../../components/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Heading } from "../../../../components/Heading";
import { Icon } from "../../../../components/Icon";
import { useTheme } from "styled-components";

export function TicketInfo() {
  const theme = useTheme()
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <StatusBar backgroundColor={theme.colors.primary} style="light" />
      <DynamicHeader animHeaderValue={scrollOffsetY} />
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
          <Heading type="h4">La Rosalia</Heading>
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
                Mon, Apr 18 · 21:00 Pm
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                21:00 Pm - 23.30 Pm
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
                Palau Sant Jordi
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.font_dark}
                style={{ lineHeight: 20 }}
              >
                Passeig Olímpic, 5-7, 08038 Barcelona
              </TextCustom>
              <TextCustom
                type="small"
                color={theme.colors.blue}
                style={{ fontWeight: "bold", lineHeight: 14 }}
              >
                Ver no mapa
              </TextCustom>
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
            R$ 30,00
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

