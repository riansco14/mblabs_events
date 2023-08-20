import React from "react";
import { Container } from "./styles";
import { Heading } from "../../../components/Heading";
import { FlatList, View } from "react-native";
import { EventCard } from "../../../components/EventCard";
import { EventCardType } from "../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../store/event/eventSlice";
import { getEvents } from "../../../../database/db";

export function Favorites() {
  const dispatch = useAppDispatch();
  const eventsFavorites = useAppSelector(
    (state) => state.event.eventsFavorites
  );

  const events: EventCardType[] = getEvents()

  const eventsCommon = events.filter(
    (item) => !!eventsFavorites.find((itemStore) => itemStore === item.idEvent)
  );

  function handleAddOrRemoveFavorite(idEvent: number) {
    dispatch(addOrRemoveEventFavorite({ idEvent }));
  }

  return (
    <Container>
      <Heading type="h5">Favoritos</Heading>

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => (
          <EventCard
            {...item}
            isLiked={
              eventsFavorites.includes(item.idEvent)
            }
            onPressLikeButton={() => handleAddOrRemoveFavorite(item.idEvent)}
          />
        )}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
