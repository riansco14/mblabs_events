import React from "react";
import { Container, HeadingContainer } from "./styles";
import { Heading } from "../../../components/Heading";
import { FlatList, View } from "react-native";
import { EventCard } from "../../../components/EventCard";
import { EventCardType } from "../../../common/types";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../store/event/eventSlice";
import { getEvents } from "../../../../database/db";
import theme from "../../../config/styles/theme";
import { Text } from "../../../components/Text";
import { shareEvent } from "../../../services/system/System";

export function Favorites() {
  const dispatch = useAppDispatch();
  const eventsFavorites = useAppSelector(
    (state) => state.event.eventsFavorites
  );

  const events: EventCardType[] = getEvents();

  const eventsCommon = events.filter(
    (item) => !!eventsFavorites.find((itemStore) => itemStore === item.idEvent)
  );

  function handleAddOrRemoveFavorite(idEvent: number) {
    dispatch(addOrRemoveEventFavorite({ idEvent }));
  }

  return (
    <Container>
      <HeadingContainer>
        <Heading type="h5">Favoritos</Heading>
        {eventsFavorites.length > 0 ? (
          <Text
            type="defaultBold"
            style={{
              textAlign: "center",
              backgroundColor: theme.colors.primary,
              width: 30,
              height: 30,
              borderRadius: 30,
              paddingTop: 3,
              marginLeft: 16,
            }}
            color={theme.colors.white}
          >
            {eventsFavorites.length}
          </Text>
        ) : null}
      </HeadingContainer>

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => (
          <EventCard
            eventData={item}
            isLiked={eventsFavorites.includes(item.idEvent)}
            onPressLikeButton={() => {
              handleAddOrRemoveFavorite(item.idEvent);
            }}
            onPressShareButton={()=>{
              shareEvent(item)
            }}
          />
        )}
        style={{ marginTop: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      ></FlatList>
    </Container>
  );
}
