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
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addOrRemoveEventFavorite } from "../../../store/event/eventSlice";
import { getEvents } from "../../../../database/db";

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation<AuthStackParam>();

  const eventsFavorites = useAppSelector(
    (state) => state.event.eventsFavorites
  );
  const dispatch = useAppDispatch();

  function handleAddOrRemoveFavorite(idEvent: number) {
    dispatch(addOrRemoveEventFavorite({ idEvent }));
  }

  const events: EventCardType[] = getEvents()

  const eventHighlight = events.find((item) => item.highlight === true);
  const eventsCommon = events.filter((item) => item.highlight != true);

  function handleEventInfo(idEvent: number) {
    navigation.navigate("TicketInfo", { idEvent});
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
      <HighlightCard
        {...eventHighlight}
        style={{ marginTop: 20 }}
        onPress={()=>handleEventInfo(eventHighlight.idEvent)}
        isLiked={
          eventsFavorites.includes(eventHighlight.idEvent)
        }
        onPressLikeButton={() => handleAddOrRemoveFavorite(eventHighlight.idEvent)}
      />

      <FlatList
        data={eventsCommon}
        renderItem={({ item }) => (
          <EventCard
            {...item}
            onPress={()=>handleEventInfo(item.idEvent)}
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
