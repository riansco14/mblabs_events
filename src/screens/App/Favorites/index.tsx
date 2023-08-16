import React from "react";
import { Container } from "./styles";
import { Heading } from "../../../components/Heading";
import { FlatList, View } from "react-native";
import { EventCard } from "../../../components/EventCard";
import { EventCardType } from "../../../common/types";

export function Favorites() {
  const events: EventCardType[] = [
    {
      idEvent: 0,
      dateString: "Mon, Apr 18 · 21:00 Pm",
      eventName: "La Rosalia",
      localName: "Razzmatazz",
      highlight: true,
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

  const eventHighlight = events.find((item) => item.highlight === true);
  const eventsCommon = events.filter((item) => item.highlight != true);

  return (
    <Container>
      <Heading type="h5">Favoritos</Heading>

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => <EventCard {...item} />}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
