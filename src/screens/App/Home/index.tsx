import React from "react";
import { Container } from "./styles";
import { Text } from "../../../components/Text";
import { useTheme } from "styled-components";
import { HighlightCard } from "../../../components/HighlightCard";
import { FlatList } from "react-native-gesture-handler";
import { EventCard } from "../../../components/EventCard";
import { View } from "react-native";

export function Home() {
  const theme = useTheme();

  const events = [
    {
      id: 1,
      dateString: "Thu, Apr 19 · 20.00 Pm",
      eventName: "The Kooks",
      localName: "Razzmatazz",
    },
    {
      id: 2,
      dateString: "Fri, Apr 22 · 21.00 Pm",
      eventName: "The Wombats",
      localName: "Sala Apolo",
    },
    {
      id: 3,
      dateString: "Mon, Apr 25  · 17.30",
      eventName: "Foster The People",
      localName: "La Monumental",
    },
  ];

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
      <HighlightCard style={{ marginTop: 20 }}></HighlightCard>

      <FlatList
        data={events}
        renderItem={({ item }) => <EventCard {...item} />}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
