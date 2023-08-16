import React from "react";
import { Container } from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { HighlightCard } from "../../../components/HighlightCard";
import { FlatList } from "react-native-gesture-handler";
import { EventCard } from "../../../components/EventCard";
import { View } from "react-native";
import { EventCardType } from "../../../common/types";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParam } from "../../../config/navigation/routes";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>()

  const events: EventCardType[] = [
    {
      idEvent: 0,
      dateString: "Mon, Apr 18 · 21:00 Pm",
      eventName: "La Rosalia",
      localName: "Razzmatazz",
      highlight: true
    },
    {
      idEvent: 1,
      dateString: "Thu, Apr 19 · 20.00 Pm",
      eventName: "The Kooks",
      localName: "Razzmatazz",
    },
    {
      idEvent: 2,
      dateString: "Fri, Apr 22 · 21.00 Pm",
      eventName: "The Wombats",
      localName: "Sala Apolo",
    },
    {
      idEvent: 3,
      dateString: "Mon, Apr 25  · 17.30",
      eventName: "Foster The People",
      localName: "La Monumental",
    },
  ];

  const eventHighlight = events.find(item => item.highlight === true)
  const eventsCommon = events.filter(item => item.highlight != true)


  function handleEventInfo(){
    navigation.navigate("TicketInfo")
  }

  return (
    <Container>
      <Text type="small" color={theme.colors.font_grey}>
        Procure eventos em
      </Text>
      <Text
        type="default"
        color={theme.colors.font_dark}
        style={{ marginTop: 30 }}
      >
        Popular em Barcelona
      </Text>
      <HighlightCard {...eventHighlight} style={{ marginTop: 20 }} onPress={handleEventInfo} />

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => <EventCard {...item} />}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
